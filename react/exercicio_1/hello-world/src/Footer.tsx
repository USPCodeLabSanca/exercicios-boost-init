import React from 'react';

interface FooterProps {
    year: number;
}

const Footer: React.FC<FooterProps> = ({year}) => {
    return(
        <footer>
            <p>© {year} Meu Site. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;