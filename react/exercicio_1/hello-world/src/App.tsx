import React from 'react';
import './App.css';
import Header from './Header'
import HelloWorld from './HelloWorld';
import Footer from './Footer';

const App: React.FC = () => {
  const name = "Camila";
  const title = "Bem-Vindo ao Meu Site";
  const year = new Date().getFullYear(); // ano atual para o footer

  return (
    <div className="App">
      <Header title={title} />
      <HelloWorld name={name} />
      <Footer year={year} />
    </div>
  );
}

export default App;