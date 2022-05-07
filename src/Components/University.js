import { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

function University(){
    const [universityCode, setUniversityCode] = useState(null);
    const [account, setAccount] = useState(null);        
    const [balance, setBalance] = useState(null);
    const [contract, setContract] = useState(null);
    const [contractInfo, setContractInfo] = useState(null);
    const [deadline, setDeadline] = useState(null);
    const [foundUniversity, setFoundUniversity] = useState(null);

    function startWaiting() {  
        checkUniversity();
        if(foundUniversity){
            const contr = account.contract(backend);
            setContract(contr);
            setDeadline({ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]);
            
            backend.University(contr,Object({universityCode, deadline}));
            setContractInfo(JSON.stringify( contract.getInfo(), null, 2));
        }
    }

    const checkUniversity = async () => {
        const res = await fetch('http://localhost:5000/data')
        const data = await res.json();
        const universities = data.filter(d => { return d.code === universityCode })

        if(universities.length > 0) {setFoundUniversity(true); setupAccount();}
        else setFoundUniversity(false);
    }

    const setupAccount = async () => {
        const acc = await reach.getDefaultAccount(reach.parseCurrency(1000));
        const balAtomic = await reach.balanceOf(acc);  
        setAccount(acc);       
        const balance = await reach.formatCurrency(balAtomic, 4);
        setBalance(balance);
    }

    useEffect(() => {
       
    },[]);

       return <Form>
           {!foundUniversity && foundUniversity!==null ? <Alert variant="danger">
            Univeristy not found</Alert> : ""}
           {balance !== null? <p>Initial Balance - {balance}</p> : ""}
           {contractInfo !== null ? <p>Contract Info - {contractInfo}</p> : "" }
           {contractInfo === null?
           <Form.Group className="mb-3" controlId="formBasicUniversityCode">       
                <Form.Label>Enter University Code</Form.Label>
                
                <Form.Control type="text" placeholder="University Code" 
                    onChange={(e) => {setUniversityCode(e.target.value)}} />
            </Form.Group> 
            : "Waiting For Requester"}

            {contractInfo === null? <Button variant="primary" onClick={startWaiting}>Start</Button>
            : ""}
            
       </Form>;
}

export default University;