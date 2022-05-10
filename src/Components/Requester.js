import { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
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

    const [account, setAccount] = useState(null);        
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const getUniversities = async () => {
            const universitiesFromServer = await fetchUniversities();
            setUniversities(universitiesFromServer);    
            setLoading(false);   
        }

        getUniversities();
            
      },[]);

      const checkStudent = async (event) => {
        event.preventDefault();
        const res = await fetch('http://localhost:5000/data')
        const data = await res.json();

        const filteredUniversities = data.filter(d => { return d.code === university })

        let student = filteredUniversities[0].students[studentCode];
        let found = student !== undefined

        setStudentFound(found);
        if(found){
            setupAccount();
            setTrascript(Object({name:student.name, code:studentCode, status:student.status == 1}));
          }
        
      }

      const fetchUniversities = async () => {
        const res = await fetch('http://localhost:5000/data')
        const data = await res.json();    
        return data
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        const contr = account.contract(backend, JSON.parse(contractInfo));
        setLoading(false);   
        backend.Requester(contr,Object({studentCode, transcript, sendTranscript}));
      }

      const setupAccount = async () => {
        const acc = await reach.getDefaultAccount(reach.parseCurrency(1000));
        const balAtomic = await reach.balanceOf(acc);  
        setAccount(acc);       
        const balance = await reach.formatCurrency(balAtomic, 4);
        setBalance(balance);
    }

    const sendTranscript = async(transcript) => {
      console.log(transcript);
  }

      if (isLoading) {
        return <div className="App">Loading...</div>;
      }

      return <Form>
          {(studentFound !== null && !studentFound) ? <Alert variant="danger">
            Student not found</Alert> : ""}
          {!studentFound ? 
                <Form.Group className="mb-3" controlId="formBasicUniversity">
                    <Form.Label>Select University</Form.Label>
                    <Form.Select value={university} onChange={(e) => {setUniversity(e.target.value)}}>
                        { universities !== {} &&
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
                <Button type="submit" variant="primary" onClick={checkStudent}>Check</Button>
                :""}
             {studentFound ? 
                <Form.Group className="mb-3" controlId="formBasicContractInfo">
                    <Form.Label>Enter Contract Information</Form.Label>
                    <Form.Control type="text" placeholder="Contract Inofrmation" value={contractInfo}  onChange={(e) => {setContractInfo(e.target.value)}} />
                </Form.Group>
                :""}   
                {studentFound ? 
            <Button type="submit" variant="primary" onClick={handleSubmit}>Request Transcript</Button>
            :""}
            </Form> ;   
       
}

export default Requester;