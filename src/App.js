import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(
      "https://n8n.melior.ai/api/v1/workflows?active=true&tags=test,production&limit=100",
      {
        headers: {
          "X-N8n-Api-Key": process.env.REACT_APP_N8N_API_KEY,
        },
      }
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
