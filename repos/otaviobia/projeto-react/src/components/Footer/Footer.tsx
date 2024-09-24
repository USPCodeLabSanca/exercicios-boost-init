import React from 'react';
import './Footer.css';

interface FooterProps {
  ano: string;
}

function Footer(props: FooterProps) {
  return (
    <div className="Footer">
      <p>Copyright © {props.ano} - Fulano Corp.</p>
      <div className='Links'>
        <a className='Link' href="#">Ajuda</a>
        <a className='Link' href="#">Termos</a>
        <a className='Link' href="#">Sobre</a>
      </div>
    </div>
  );
}

export default Footer;
