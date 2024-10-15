import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/helloworld';
import MyComponent from './components/helloworld';
import Card from './components/Card/Card';
import Input from './components/Input/Input';
import ApiFetcher from './components/ApiFetcher/ApiFetcher';

function App() {

  const handleClick = (name: string) => { 
    alert('Hello, ' + name + '!');
  }
  
  return (
    <div className="App">
      <ApiFetcher></ApiFetcher>
      <MyComponent name='shogo' onClick={() => handleClick('shogo')}></MyComponent>
      <Card title='titulo' content='conteudo do primeiro card' valorInicial='valor 1'></Card>
      <Card title='titulo' content='conteudo do segundo card' image={logo} valorInicial='valor 2'></Card>
      <Input></Input>
    </div>
  );
}

export default App;
