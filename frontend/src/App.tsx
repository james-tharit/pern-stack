import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GreetingService from './services/greeting';

function App() : JSX.Element {
  const greetingService = new GreetingService()
  const [greetingMessage, setGreetingMessage]  = useState<string>("Click Me!")
  
const getGreeting = async () => {
  greetingService.getGreetingMessage()
  .then( data => {
    setGreetingMessage(data)
  })
}

  useEffect(() => {
    getGreeting()
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {greetingMessage}
        </a>
      </header>
    </div>
  );
}

export default App;
