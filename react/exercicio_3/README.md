# Introdução ao `useState` e Manipulação de Eventos

## Objetivo  
Nesta semana, vamos mergulhar no hook `useState`, que é fundamental para gerenciar o estado em componentes funcionais do React. Também exploraremos como trabalhar com eventos, como cliques de botões e entradas de texto, para criar interfaces dinâmicas e interativas.

## Tópicos
- O que é o `useState`?
- Exemplo Simples com `useState`: Contador
- Eventos em Componentes React
- Exemplo de Manipulação de Eventos com `onChange`: Campo de Texto

### O que é o `useState`?

O `useState` é um hook do React que permite adicionar estado a componentes funcionais. Antes dos hooks, o estado só era possível em componentes de classe, mas agora qualquer componente funcional pode armazenar e atualizar dados internamente.

Quando usamos `useState`, ele retorna dois valores:
1. **O estado atual**.
2. **Uma função para atualizar esse estado**.

Cada vez que o estado é atualizado, o React re-renderiza o componente para refletir as mudanças na interface do usuário.

**Sintaxe básica do `useState`:**
```jsx
const [state, setState] = useState(initialValue);
```

- `state`: o valor atual do estado.
- `setState`: uma função para atualizar o estado.
- `initialValue`: o valor inicial que o estado terá ao renderizar o componente pela primeira vez.

### Exemplo Simples com `useState`: Contador

Aqui está um exemplo de como usar o `useState` para criar um simples contador. O componente exibirá um número na tela e um botão para incrementar esse número.

```jsx
import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

**Explicação do código:**
1. **`useState(0)`**: Inicializamos o estado `count` com o valor 0. O valor atual do contador é armazenado em `count`, e a função `setCount` é usada para atualizar esse valor.
2. **Função `increment`**: Criamos uma função que usa `setCount` para aumentar o valor do estado `count` em 1 sempre que o botão é clicado.
3. **Evento `onClick`**: No JSX, adicionamos o evento `onClick` ao botão para chamar a função `increment` quando o usuário clicar.

### Eventos em Componentes React

Os eventos em React são semelhantes aos eventos do DOM padrão, mas com algumas diferenças na sintaxe. Em vez de usar nomes em minúsculas como `onclick`, usamos **camelCase** para declarar eventos, como `onClick`.

Alguns dos eventos mais comuns incluem:
- `onClick`: Disparado quando um elemento é clicado.
- `onChange`: Usado para capturar mudanças em elementos de formulário, como campos de texto.
- `onSubmit`: Disparado ao submeter um formulário.

### Exemplo de Manipulação de Eventos com `onChange`: Campo de Texto

Agora, vamos criar um exemplo onde usamos o evento `onChange` para capturar o valor de um campo de texto e atualizar o estado em tempo real.

```jsx
import { useState } from 'react';

function InputTexto() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} placeholder="Digite algo..." />
      <p>Você digitou: {text}</p>
    </div>
  );
}

export default InputTexto;
```

**Explicação do código:**
1. **`useState('')`**: Inicializamos o estado `text` como uma string vazia. O valor digitado será armazenado nesse estado.
2. **Função `handleChange`**: Essa função é chamada sempre que o conteúdo do campo de texto muda. Usamos `setText` para atualizar o estado com o valor digitado pelo usuário, acessível via `event.target.value`.
3. **Evento `onChange`**: No JSX, vinculamos o evento `onChange` ao input, para que o estado seja atualizado a cada mudança no campo de texto.

### Desafios da Semana

1. **Criar um Componente de "To-Do List" Simples:**
   - Use o `useState` para gerenciar uma lista de tarefas.
   - O usuário deve poder digitar o nome de uma tarefa em um campo de texto e, ao clicar em um botão "Adicionar", a tarefa deve ser exibida em uma lista abaixo.
   - Desafio: Permitir que o usuário remova tarefas da lista.

   **Exemplo de Estrutura:**
   ```jsx
   function TodoList() {
     const [tasks, setTasks] = useState([]);
     const [newTask, setNewTask] = useState('');

     const addTask = () => {
       setTasks([...tasks, newTask]);
       setNewTask(''); // Limpa o input após adicionar
     };

     return (
       <div>
         <input
           type="text"
           value={newTask}
           onChange={(e) => setNewTask(e.target.value)}
           placeholder="Digite uma tarefa..."
         />
         <button onClick={addTask}>Adicionar Tarefa</button>

         <ul>
           {tasks.map((task, index) => (
             <li key={index}>{task}</li>
           ))}
         </ul>
       </div>
     );
   }
   ```

2. **Criar um Componente de "Likes":**
   - Crie um botão "Curtir" e um contador que aumenta toda vez que o botão for clicado.
   - Desafio: Adicionar uma lógica para que o usuário possa "descurtir" se clicar novamente no botão.

---

#### Resumo dos Conceitos:
- O **`useState`** é usado para armazenar e atualizar o estado em componentes funcionais.
- Estados são imutáveis, ou seja, para atualizá-los, usamos funções como `setState` (por exemplo, `setCount`).
- Eventos como **`onClick`** e **`onChange`** permitem a interação do usuário com a interface, capturando ações como cliques e alterações de texto.
- A combinação de `useState` com eventos possibilita a criação de interfaces dinâmicas e reativas no React.
