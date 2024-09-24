import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
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
        <div className='Products'>
          <Product imagem='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sports_T-Shirt.png/640px-Sports_T-Shirt.png' nome='Camiseta Esportiva' valor='64,70'/>
          <Product imagem='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nike_Terminator.jpg/640px-Nike_Terminator.jpg' nome='Tênis Nike Terminator' valor='750,00' promocional={true} valorpromocional='599,99'/>
        </div>
      </div>
      <Footer ano='2024'/>
    </>
  );
}

export default App;
