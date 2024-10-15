# Semana 5: Listas, Condicionais e Formulários em React

## Objetivo  
Nesta semana, vamos abordar como trabalhar com listas e condicionais no React, além de explorar formulários e o controle de inputs. Esses são conceitos fundamentais para desenvolver interfaces dinâmicas e interativas.

## Tópicos
- [Trabalhando com Listas em React](#trabalhando-com-listas-em-react)
- [Condicionais em React](#condicionais-em-react)
- [Trabalhando com Formulários em React](#trabalhando-com-formulários-em-react)
- [Eventos em Formulários](#eventos-em-formulários)
---

### Trabalhando com Listas em React

No React, renderizar listas é algo muito comum quando queremos exibir dados repetitivos, como listas de itens ou resultados de busca. Para isso, usamos o método `.map()` de arrays, que nos permite iterar sobre uma coleção de dados e retornar um componente JSX para cada item.

#### Exemplo Simples: Renderizando uma Lista

Imagine que temos uma lista de tarefas, e queremos renderizá-la como uma lista ordenada.

```jsx
function ListaDeTarefas() {
  const tarefas = ['Estudar React', 'Fazer exercícios', 'Assistir aula'];

  return (
    <ol>
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
      ))}
    </ol>
  );
}

export default ListaDeTarefas;
```

#### Explicação:
- **`.map()`**: Usamos o método `.map()` para iterar sobre o array `tarefas`, e para cada item, retornamos um elemento `<li>`.
- **`key`**: O React exige que cada item de uma lista tenha uma prop `key` única. Isso ajuda o React a identificar os itens individualmente para otimizá-los ao atualizar a lista.
  - Aqui, estamos usando o `index` (posição no array) como chave, mas em cenários reais, é melhor usar um identificador único (como um ID).

#### Exemplo: Renderizando uma Lista de Objetos

Agora, vamos renderizar uma lista mais complexa, onde cada tarefa tem um nome e uma descrição.

```jsx
function ListaDeTarefas() {
  const tarefas = [
    { id: 1, nome: 'Estudar React', descricao: 'Focar nos hooks e componentes' },
    { id: 2, nome: 'Fazer exercícios', descricao: 'Resolver problemas de lógica' },
    { id: 3, nome: 'Assistir aula', descricao: 'Acompanhar o curso online' }
  ];

  return (
    <ul>
      {tarefas.map(tarefa => (
        <li key={tarefa.id}>
          <h3>{tarefa.nome}</h3>
          <p>{tarefa.descricao}</p>
        </li>
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
```

#### Explicação:
- Cada item agora tem um campo `id`, que é usado como `key` para garantir que cada item tenha uma chave única.
- A lista exibe tanto o nome quanto a descrição da tarefa.

---

### Condicionais em React

Em React, podemos usar condicionais para renderizar componentes de maneira dinâmica, exibindo ou ocultando elementos com base em condições.

#### Operador Ternário para Renderização Condicional

O operador ternário é a maneira mais comum de fazer renderizações condicionais em JSX.

```jsx
function Saudacao({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Bem-vindo de volta!</h1> : <h1>Por favor, faça login.</h1>}
    </div>
  );
}
```

#### Explicação:
- O operador ternário `{condição ? true : false}` é usado para renderizar um elemento diferente dependendo do valor de `isLoggedIn`.
- Se `isLoggedIn` for `true`, será exibida a mensagem "Bem-vindo de volta!". Caso contrário, será exibida a mensagem "Por favor, faça login."

#### Renderização Condicional com `&&`

Outra forma comum de condicional é usar o operador lógico `&&` para renderizar algo apenas quando uma condição for verdadeira.

```jsx
function Aviso({ hasWarning }) {
  return (
    <div>
      {hasWarning && <p>Aviso: Por favor, verifique suas informações!</p>}
    </div>
  );
}
```

#### Explicação:
- Se `hasWarning` for `true`, a mensagem de aviso será exibida. Se for `false`, nada será exibido.

---

### Trabalhando com Formulários em React

O controle de formulários é essencial para criar interfaces interativas, e o React oferece uma maneira declarativa de trabalhar com inputs e controlar seu estado.

#### Exemplo Simples: Controlando Inputs

Em React, um **componente controlado** é aquele cujo valor de input é mantido no estado do componente, permitindo total controle sobre os dados do formulário.

```jsx
import { useState } from 'react';

function FormularioSimples() {
  const [nome, setNome] = useState('');

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    alert('Nome enviado: ' + nome);
  };

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
```

#### Explicação:
- **`useState`**: O estado `nome` armazena o valor atual do input.
- **`onChange`**: Toda vez que o valor do input muda, a função `handleChange` atualiza o estado com o novo valor.
- **Componente Controlado**: O valor do input (`value={nome}`) é controlado pelo estado do componente. O React é quem define o valor exibido no campo, não o navegador.

#### Vários Campos no Formulário

Quando o formulário contém vários inputs, é possível usar um estado para cada campo, ou manter todos os campos em um único estado usando um objeto.

```jsx
function FormularioCompleto() {
  const [formData, setFormData] = useState({
    nome: '',
    email: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
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
```

#### Explicação:
- **Vários campos**: `formData` armazena os valores de todos os inputs no formulário.
- **Campo `name`**: Usamos o atributo `name` nos inputs para identificar qual campo está sendo atualizado. O valor correspondente no estado é atualizado usando `[name]: value`.
- **`...formData`**: Usamos o spread operator para garantir que os campos não alterados mantenham seus valores.

---

### Eventos em Formulários

Além do evento `onChange` usado para controlar inputs, há outros eventos importantes em formulários:

1. **`onSubmit`**: Disparado quando o formulário é enviado (geralmente associado ao botão de envio).
2. **`onBlur`**: Ocorre quando o input perde o foco, útil para validações de campo.
3. **`onFocus`**: Ocorre quando o input ganha o foco, geralmente usado para exibir mensagens de ajuda ou dicas.

---

### Desafios da Semana

1. **Lista Dinâmica**: Crie um componente onde o usuário possa adicionar novos itens a uma lista. Use um input controlado e o método `.map()` para renderizar os itens da lista.
   - **Desafio adicional**: Adicione uma opção para remover itens da lista.

2. **Formulário de Contato**: Crie um formulário completo de contato com campos de nome, email, e mensagem. Controle os valores dos inputs usando o estado e exiba os dados enviados em um alerta ao submeter o formulário.

3. **Renderização Condicional**: Implemente um formulário que, ao submeter, exibe uma mensagem de "Obrigado por enviar!" e, depois de 5 segundos, esconde a mensagem automaticamente.

---

### Resumo dos Conceitos

- **Listas**: Use o método `.map()` para renderizar arrays de dados e forneça uma chave única (`key`) para cada item da lista.
- **Condicionais**: Use operadores ternários e `&&` para renderização condicional.
- **Formulários**: Trabalhe com componentes controlados, gerenciando o valor dos inputs no estado do componente.
- **Eventos**: Use eventos como `onChange`, `onSubmit` e `onClick` para controlar a interação do usuário com formulários e inputs.

Esses conceitos são essenciais para criar interfaces de usuário dinâmicas e interativas em React.