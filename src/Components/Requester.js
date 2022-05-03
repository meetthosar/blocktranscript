import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Requester(){
    const [universities, setUniversities] = useState({});
    const [university, setUniversity] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [studentCode, setStudentCode] = useState(null);


    useEffect(() => {
        // setAcc(() => reach.getDefaultAccount());
        // setBalAtomic(() => reach.balanceOf(acc));
        // setBal(() => reach.formatCurrency(balAtomic, 4));
        
        axios.get(`http://localhost/api/universities`)
          .then(response => {
             setUniversities(response.data.data);    
             setLoading(false);   
          });    
            
      },[universities]);

      const handleSubmit = (event) => {
            event.preventDefault();
            console.log(university, studentCode);
      }

      if (isLoading) {
        return <div className="App">Loading...</div>;
      }

      return <Form>
                <Form.Group className="mb-3" controlId="formBasicUniversity">
                    <Form.Label>Select University</Form.Label>
                    <Form.Select value={university} onChange={(e) => {setUniversity(e.target.value)}}>
                        { universities !== {} &&
                            universities
                            .map(university =>
                                <option value={university.id}>{university.name} - {university.code}</option>
                            )
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicStudentCode">
                    <Form.Label>Enter Student Code</Form.Label>
                    <Form.Control type="text" placeholder="Student Code" value={studentCode}  onChange={(e) => {setStudentCode(e.target.value)}} />
                </Form.Group>
                <Button type="submit" variant="primary" onClick={handleSubmit}>Request Transcript</Button>
            </Form> ;   
       
}

export default Requester;