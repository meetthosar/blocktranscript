import logo from './logo.svg';
import './App.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { useEffect, useState } from 'react';
import University from './Components/University'
const reach = loadStdlib(process.env);


function App() {
  const [acc, setAcc] = useState(null);
  const [balAtomic, setBalAtomic] = useState(null);
  const [bal, setBal] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
      <University />
      </header>
    </div>
  );
}

export default App;
