import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        console.log(data);
        const names = data.map(country => country.name);
        console.log(names);

      })
  }, [])
  return (
    <div className="App">
      <h1>Country Loaded:{countries.length}</h1>
      <ul>
        {countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)}
      </ul>

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
