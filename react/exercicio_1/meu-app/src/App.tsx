import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/helloworld';
import MyComponent from './components/helloworld';

function App() {

  const nome = 'shogo';
  
  return (
    <div className="App">
      <MyComponent name="shogo" />
      <MyComponent name="matheus" />
      <MyComponent name="carol"/>
    </div>
  );
}

export default App;
