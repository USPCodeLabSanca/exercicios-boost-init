import { SetStateAction, useEffect, useState } from 'react';

function FormularioSimples({ valorInicial } : { valorInicial: string }) {
  const [nome, setNome] = useState(valorInicial);

  const handleChange = (event: any) => {
    console.log('rodei handleChange');
    setNome(event.target.value);
  };

  const handleSubmit = (event : any) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    alert('Nome enviado: ' + nome);
  };

  useEffect(() => {
    console.log('nome: ', nome);
  }, [nome])

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioSimples;