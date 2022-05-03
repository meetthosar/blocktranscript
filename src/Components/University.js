import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

function University(){
    const [universityCode, setUniversityCode] = useState(null);
    const [account, setAccount] = useState(null);        
    const [balance, setBalance] = useState(null);
    const [contract, setContract] = useState(null);
    const [contractInfo, setContractInfo] = useState(null);

    function startWaiting() {     
        console.log(account);   
        setContract(account.contract(backend));
        backend.University(contract, this);
        setContractInfo(JSON.stringify( contract.getInfo(), null, 2));
    }

    useEffect(() => {
        async function setupAccount (){
            const acc =  await reach.getDefaultAccount();
            const balAtomic = await reach.balanceOf(acc);  
            setAccount(acc);       
            setBalance(reach.formatCurrency(balAtomic, 4));
        }
        setupAccount();
    },[]);

       return <Form>
           <Form.Group className="mb-3" controlId="formBasicUniversityCode">       
                <Form.Label>Enter University Code</Form.Label>
                <Form.Control type="text" placeholder="University Code" 
                    
                    onChange={(e) => {setUniversityCode(e.target.value)}} />
            </Form.Group>
            <Button variant="primary" onClick={startWaiting}>Start</Button>
       </Form>;
}

export default University;