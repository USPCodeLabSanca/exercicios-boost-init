import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/helloworld';
import MyComponent from './components/helloworld';
import Card from './components/Card/Card';

function App() {

  const nome = 'shogo';
  const handleClick = () => { 
    alert('Hello, ' + nome + '!');
  }
  
  return (
    <div className="App">
      <Card title='titulo' content='conteudo do primeiro card'></Card>
      <Card title='titulo' content='conteudo do segundo card' image={logo}></Card>
    </div>
  );
}

export default App;
