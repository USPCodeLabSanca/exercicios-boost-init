import { useState } from "react";

function FormularioCompleto() {
  const [formData, setFormData] = useState({
    nome: '',
    email: ''
  });

  const handleChange = (event : any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    /*
    {
      nome: valor digitado velho,
      email: valor digitado velho,

      nome: valor digitado novo,
    }
    */
  };

  const handleSubmit = (event : any) => {
    event.preventDefault();
    alert(`Nome: ${formData.nome}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioCompleto;