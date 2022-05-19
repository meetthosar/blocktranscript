import { useEffect, useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

function University(){
    const [universityCode, setUniversityCode] = useState(null);
    const [account, setAccount] = useState(null);        
    const [balance, setBalance] = useState(null);
    const [contract, setContract] = useState(null);
    const [contractInfo, setContractInfo] = useState(null);
    // const [deadline, setDeadline] = useState(null);
    const [studentFound, setStudentFound] = useState(null);
    const [foundUniversity, setFoundUniversity] = useState(null);
   
    const [isLoading, setIsLoading] = useState(false);
    const [serving, setServing] = useState(false);
    const deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
    const price = reach.parseCurrency(0.01);

    const startWaiting = async () => {  
        const foundUniversity = checkUniversity();
        if(foundUniversity){      

            let promiseToCreateContract = new Promise( async (createContract, throwError) => {
                if(account === null){      
                    var acc = await setupAccount();
                    await setAccount(acc)
                }

                if(acc !== null)
                    createContract(acc);
                else
                    throwError();
            });

            promiseToCreateContract.then(
                async (account) => {
                    const contr = await account.contract(backend);
                    const interaction = {universityCode, price ,deadline, isServing, requestTranscript, sendTranscript};
                    
                    setAccount(account);
                    setContract(contr);            
                    
                    backend.University(contr,Object(interaction));
                    
                    const contractInfo = JSON.stringify( await contr.getInfo(), null, 2);
                    setContractInfo(contractInfo);
                },
                () => { console.log("Failed to create account"); }
            );
            
            
                
            
        }
    }

    const checkUniversity = async () => {
        const res = await fetch('http://localhost:5000/data')
        const data = await res.json();
        const universities = data.filter(d => { return d.code === universityCode })

        if(universities.length > 0) return true;
        return false;
    }

    const setupAccount = async () => {
        const acc = await reach.getDefaultAccount(reach.parseCurrency(1000));
        const balAtomic = await reach.balanceOf(acc);       
        const balance = await reach.formatCurrency(balAtomic, 4);
        // setBalance(balance);
        return acc;
    }

    const sendTranscript = async(transcript) => {
        console.log(transcript);

        await resetContractParameters();
        await startWaiting();
    }

    const isServing = async (status) => {
        setServing(status);        
    }

    const requestTranscript = async (university, studentCode) => {
    
        const res = await fetch('http://localhost:5000/data')
        const data = await res.json();

        const filteredUniversities = data.filter(d => { return d.code === university.toString() })

        let found = filteredUniversities.length !== 0;
        if(found){
          var student = filteredUniversities[0].students[studentCode.toNumber()];
          found = student !== undefined 
        }
        // return [student, found];
        
          if(found){
            // setupAccount();
            var transcript = Object({name:student.name, code:studentCode.toString(), status:student.status === 1, found:true});
                       
          }else{          
             transcript = Object({name:"Not Found", code:studentCode.toString(), status:false, found:false});
            }
            return transcript;
        
      }

    const resetContractParameters = async () => {
        // setUniversityCode(null);
        // setBalance(null);
        setContract(null);
        setContractInfo(null);
        setFoundUniversity(null);
        // setIsLoading(null);
        // setServing(null);
    }

    useEffect(() => {
        // setContract(contract);
    },[]);

       return <Form>
                <fieldset disabled={isLoading}>
                {(studentFound !== null && !studentFound) ? <Alert variant="danger">
                Student not found</Alert> : ""}
                {!foundUniversity && foundUniversity!==null ? <Alert variant="danger">
                    Univeristy not found</Alert> : ""}
                {balance !== null? <p>Initial Balance - {balance}</p> : ""}
                {contractInfo !== null ? <p>Contract Info - {contractInfo}</p> : "" }
                {contractInfo === null?
                <Form.Group className="mb-3" controlId="formBasicUniversityCode">       
                        <Form.Label>Enter University Code</Form.Label>
                        
                        <Form.Control type="text" placeholder="University Code" value={universityCode}
                            onChange={(e) => {setUniversityCode(e.target.value)}} />
                    </Form.Group> 
                    : "Waiting For Requester"}

                    {contractInfo === null? <Button onClick={() => { setIsLoading(true);  startWaiting()}} variant="primary">Start</Button>
                    : ""}
                   {isLoading? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> : ""}
                    </fieldset>
            </Form>;
}

export default University;