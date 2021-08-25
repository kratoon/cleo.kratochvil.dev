import React from 'react';
import cleo from './cleo.jpg';
import './App.css';

function getBirthdate(): string {
  const birthdate = new Date(2021, 5, 14);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(birthdate);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(birthdate);
  const date = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(birthdate);
  return `${month} ${date} ${year}`;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{marginTop: '2rem'}}>
          <img src={cleo} className="cleo" title="Cleo" alt="cleo" style={{ maxWidth: '20rem' }}/>
        </div>
        <p>
          <h1>
            Hey there! My name is Cleo!
          </h1>
          <div>
            I'm german shepherd living in Prague.
          </div>
          <div>
            I was born on {getBirthdate()}.
          </div>
        </p>
        <p>
          <h4>
            In case I'm lost call my owner, he's ugly crying.
          </h4>
          <div>
            <a href="tel:+420 776 036 747" style={{color: '#9c9c9c'}}>+420 776 036 747</a>
          </div>
        </p>
      </header>
    </div>
  );
}


export default App;
