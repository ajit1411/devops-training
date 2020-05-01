import React from 'react';
import logo from './logo.svg';
import './App.css';
import devops from './Resources/images/devops-gif.gif'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={devops} className="App-logo" alt="logo" />
        <p>
          DevOps Testing
        </p>
        <a
          className="App-link"
          href="https://edureka.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn DevOps from Edureka
        </a>
      </header>
    </div>
  );
}

export default App;
