import React from 'react';

interface HelloWorldProps {
    name: string;
}

// componente HelloWorld
const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => {
    return (
        <div>Hello, {name}!</div>
    );
};

export default HelloWorld;