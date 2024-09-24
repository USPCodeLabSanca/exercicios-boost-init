import React from 'react';

interface BoasVindasProps {
    nome: string;
    idade: number;
}

function BoasVindas(props: BoasVindasProps) {
    function handleClick() {
        alert("Idade: " + props.idade);
    }

    return (
        <div onClick={handleClick}>
            <h1>Olá, seja bem-vindo {props.nome}</h1>
        </div>
    )
}


export default BoasVindas
