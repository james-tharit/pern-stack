import React from "react";
import { Badge } from "../components/badge";
import { useGreeting } from "../hook/useGreeting";
import "./app.css";
import logo from "./logo.svg";

export const App: React.FC = () => {
  const { greetingMessage } = useGreeting();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="Column">
          <Badge title={`CONNECTED TO API: ${greetingMessage}`} />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me!
        </a>
      </header>
    </div>
  );
};
