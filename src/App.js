import logo from './logo.svg';
import './App.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { useEffect, useState } from 'react';
import University from './Components/University'
import OffererOrRequester from './Components/OffererOrRequester';
import Requester from './Components/Requester';
import { Container,Button } from 'react-bootstrap';
import { Toast } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


const reach = loadStdlib(process.env);

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

function App() {
  const [acc, setAcc] = useState(null);
  const [balAtomic, setBalAtomic] = useState(null);
  const [bal, setBal] = useState(null);
  const [isUniversity, setIsUniversity] = useState(0);
  const [isRequester, setIsRequester] = useState(0);

  const iAmUniversity = () => {
    setIsUniversity(1);
  }
  
  const iAmRequester = () => {
    setIsRequester(1);
  }


  return <Container className="p-3">
    <Card>
      <Card.Header><h1 className="header">Welcome To BlockTranscript</h1></Card.Header>
      <Card.Body>
          {isUniversity === 1 ? <University/> : ""}
          {isRequester === 1 ? <Requester/> : ""}
          {isUniversity === 0 && isRequester === 0 ? <OffererOrRequester iAmUniversity={iAmUniversity} iAmRequester={iAmRequester} /> : ""}
      </Card.Body>
    </Card>

</Container>;
}

export default App;
