import React from 'react';
import REact from 'react';
import { DefaultSerializer } from 'v8';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return(
        <header>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;