import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

interface AppProps {
  name: string;
}

function App(props: AppProps) {
  return (
    <>
      <Header compras='12102'/>
      <div className="App">
        <h1>Hello, World!</h1>
        <h1>Olá, {props.name}!</h1>
      </div>
      <Footer ano='2024'/>
    </>
  );
}

export default App;
