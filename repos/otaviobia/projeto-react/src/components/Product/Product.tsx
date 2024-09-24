import React from 'react';
import './Product.css';

interface ProductProps {
  nome: string;
  imagem: string;
  valor: string;
  promocional?: boolean;
  valorpromocional?: string;
}

function Product(props: ProductProps) {
  const handleClick = () => {
    window.alert(props.nome + " não está disponível.");
  };

  return (
    <div className="Product">
      <div className='ImageDiv'>
        <img className='ProductImage' src={props.imagem} alt={props.nome} />
        {props.promocional && <img className='SaleIcon' src='https://i.imgur.com/50bUwiE.png' alt={props.nome} />}
      </div>
      <div className='ProductBottom'>
        <h1 className='ProductName'>{props.nome}</h1>
        <div className='PriceDiv'>
          {!props.promocional && <p className='ProductPrice'>R$ {props.valor}</p>}
          {props.promocional && <p className='PriceCut'>R$ {props.valor}</p>}
          {props.promocional && <p className='ProductPrice'>R$ {props.valorpromocional}</p>}
        </div>
        <button className='ProductBuy' onClick={handleClick}>Comprar</button>
      </div>
    </div>
  );
}

export default Product;
