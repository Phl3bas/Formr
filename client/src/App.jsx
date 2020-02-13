import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <nav>
        <a href='/auth/google'>Sign In With Google</a>
        <a href='/api/user/current'>Who are you?</a>
        <a href='/api/user/logout'>logout</a>
      </nav>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Formr</h1>
      </header>
    </div>
  );
}

export default App;
