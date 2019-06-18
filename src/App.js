import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person'
import Clock from './components/Clock/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="50px" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Person name="Jeff"/>
          <Person name="Doe"/>
          <Person name="Lin"/>
        </div>
        <div>
          <Clock />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React...
        </a>
      </header>
    </div>
  );
}

export default App;
