import { useEffect, useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import ExportPdfComponent from '../export-pdf.component.js';
const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

function Requester(){
    const [universities, setUniversities] = useState({});
    const [university, setUniversity] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [studentCode, setStudentCode] = useState(null);
    const [studentFound, setStudentFound] = useState(null);
    const [contractInfo,setContractInfo] = useState(null);
    const [transcript, setTrascript] = useState(null);

    // const [account, setAccount] = useState(null);        
    const [balance, setBalance] = useState(null);
    const [serving, setServing] = useState(false);

    useEffect(() => {
        const getUniversities = async () => {
            const universitiesFromServer = await fetchUniversities();
            setUniversities(universitiesFromServer);    
            setLoading(false);   
        }

        getUniversities();
            
      },[]);
      

      const fetchUniversities = async () => {
        const res = await fetch('http://localhost:5000/data')
        const data = await res.json();    
        return data
      }

      const handleSubmit = async () => {
        // event.preventDefault();
        // console.log("In Handle Submit");
        // const [student, found] = await checkStudent();
        if(studentFound){
          const account = await setupAccount();
          console.log(account);
          const contr = account.contract(backend, JSON.parse(contractInfo));
          backend.Requester(contr,Object({university, studentCode, isServing, sendTranscript}));
        }
      }

      const setupAccount = async () => {
        const acc = await reach.getDefaultAccount(reach.parseCurrency(1000));
        const balAtomic = await reach.balanceOf(acc);  
        // setAccount(acc);       
        const balance = await reach.formatCurrency(balAtomic, 4);
        setBalance(balance);
        return acc;
    }

    const sendTranscript = async(transcript) => {
      console.log(transcript);
      setTrascript(transcript);
      setLoading(false);
      setServing(null);
    }

    const isServing = async (status) => {
      setServing(status);        
    }

    const resetParameters = () => {
      
    }
      // if (isLoading) {
      //   return <div className="App">Loading...</div>;
      // }

      return <Form>
        <fieldset disabled={isLoading}>
          {(studentFound !== null && !studentFound) ? <Alert variant="danger">
            Student not found</Alert> : ""}
          {serving ? <Alert variant="info">
              Waiting for response from Univeristy</Alert> : ""}
          {!studentFound ? 
                <Form.Group className="mb-3" controlId="formBasicUniversity">
                    <Form.Label>Select University</Form.Label>
                    <Form.Select value={university} onChange={(e) => {setUniversity(e.target.value)}}>
                        { !isLoading && universities !== {} &&
                            universities
                            .map(university =>
                                <option value={university.code}>{university.name} - {university.code}</option>
                            )
                        }
                    </Form.Select>
                </Form.Group>
            :""}
            {!studentFound ? 
                <Form.Group className="mb-3" controlId="formBasicStudentCode">
                    <Form.Label>Enter Student Code</Form.Label>
                    <Form.Control type="text" placeholder="Student Code" value={studentCode}  onChange={(e) => {setStudentCode(e.target.value)}} />
                </Form.Group>
                :""}
            {!studentFound ? 
                <Button type="submit" variant="primary" onClick={() => { setStudentFound(true) }}>Check</Button>
                :""}
             {studentFound ? 
                <Form.Group className="mb-3" controlId="formBasicContractInfo">
                    <Form.Label>Enter Contract Information</Form.Label>
                    <Form.Control type="text" placeholder="Contract Inofrmation" value={contractInfo} disabled={transcript !== null}  onChange={(e) => {setContractInfo(e.target.value)}} />
                </Form.Group>
                :""}   
                {studentFound && transcript === null  ? 
            <Button variant="primary" onClick={() =>{ setLoading(true); handleSubmit();}}>Request Transcript</Button>
            :""}
            {transcript !== null ? <ExportPdfComponent transcript={transcript}/> : "" }
            {isLoading? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> : ""}
            </fieldset>
            </Form> ;   
       
}

export default Requester;