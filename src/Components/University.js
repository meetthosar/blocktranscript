import axios from 'axios';
import { useEffect, useState } from 'react';

function University(){
    const [universities, setUniversities] = useState({});

    useEffect(() => {
        // setAcc(() => reach.getDefaultAccount());
        // setBalAtomic(() => reach.balanceOf(acc));
        // setBal(() => reach.formatCurrency(balAtomic, 4));
    
        axios.get(`http://localhost/api/universities`)
          .then(response => {
             setUniversities(response.data.data);       
          });    
            
      },[]);

      return <div>University List
                <select>
                    {
                        universities
                        .map(university =>
                            <option key={university.id}>{university.name} - {university.code}</option>
                        )
                    }
                    </select>
                <button>Request Transcript</button>
            </div>;
}

export default University;