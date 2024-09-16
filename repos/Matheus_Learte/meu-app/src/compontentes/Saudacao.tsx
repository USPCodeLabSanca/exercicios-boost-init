import React, { useState } from 'react';

const Saudacao: React.FC = () => {
  const [nome, setNome] = useState<string>(''); // Estado para armazenar o nome

  // Função para lidar com a mudança de valor no input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  return (
    <div>
      <h1>Digite seu nome:</h1>
      {}
      <input
        type="text"
        value={nome}
        onChange={handleChange}
        placeholder="Seu nome"
      />
      {/* Exibe a saudação quando o nome não estiver vazio */}
      {nome && <h2>Olá, {nome}!</h2>}
    </div>
  );
};

export default Saudacao;
