import React from 'react';
import './Header.css';

interface HeaderProps {
  compras: string;
}

function Header(props: HeaderProps) {
  return (
    <div className="Header">
      <div className='Logo'>
        <h1>Fulano Store</h1>
        <p>{props.compras} clientes satisfeitos e contando!</p>
      </div>
      <div className='Pages'>
        <a className='PageButton' href="#">Sobre</a>
        <a className='PageButton' href="#">Categorias</a>
        <a className='PageButton' href="#">Carrinho</a>
      </div>
    </div>
  );
}

export default Header;
