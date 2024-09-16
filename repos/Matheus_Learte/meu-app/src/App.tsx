import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from './compontentes/Comp'
import Saudacao from './compontentes/Saudacao'

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Comp  name="Matheus"/>   
      <Saudacao />
    </div>
  );
}

export default App;
