import { useState } from "react";

function Input() {
    const [valorDoInput, setValorDoInput] = useState('');
    const [listaDeInputs, setListaDeInputs] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValorDoInput(event.target.value);
    }

    const handleClick = () => {
      setListaDeInputs([...listaDeInputs, valorDoInput]);
    }
    
    return (
      <>
        <input type='text' value={valorDoInput} onChange={handleInputChange}></input>
        <button onClick={() => {
          handleClick();
          // varias funcoes
        }}>Adicionar</button>
        {listaDeInputs.map((input, index) => {
            return <div onClick={() => console.log(input)} key={index}>{input}</div>
        })}
      </>
    );
}

export default Input;