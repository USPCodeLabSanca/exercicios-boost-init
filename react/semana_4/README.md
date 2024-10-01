# Semana 4: Introdução ao `useEffect`, Escopo e Outros Hooks

## Objetivo  
Nesta semana, vamos explorar o hook `useEffect`, que permite a execução de efeitos colaterais em componentes React. Vamos aprender a usá-lo para interagir com APIs, manipular o DOM, e executar lógica após o render. Além disso, discutiremos o escopo em componentes React e faremos uma introdução breve a outros hooks importantes.

## Tópicos
- O que é o `useEffect`?
- Escopo em Componentes React
- Outros Hooks do React
---

### O que é o `useEffect`?

O `useEffect` é um hook que lida com **efeitos colaterais** em componentes funcionais. Em React, efeitos colaterais são ações que acontecem **fora do ciclo de renderização** de um componente, como buscar dados de uma API, assinar eventos, manipular diretamente o DOM, ou registrar logs.

#### Sintaxe Básica:
```jsx
useEffect(() => {
  // Código que será executado após o render
}, [dependencias]);
```

- **Primeiro argumento**: uma função que será executada depois que o componente for renderizado.
- **Segundo argumento** (dependências): uma lista de variáveis que o React vai observar. Se qualquer uma dessas variáveis mudar, o `useEffect` será executado novamente. Se o array de dependências estiver vazio (`[]`), o efeito será executado apenas uma vez, após a primeira renderização.

#### Exemplo Simples com `useEffect`: 

Vamos criar um componente que muda o título da página toda vez que o valor de um contador é alterado.

```jsx
import { useState, useEffect } from 'react';

function ContadorComTitulo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]); // O efeito é disparado sempre que 'count' muda

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default ContadorComTitulo;
```

**Explicação do código:**
- **`useEffect`**: Toda vez que o `count` mudar, o `useEffect` atualiza o título da página. O array `[count]` define que o efeito deve ser reexecutado apenas quando o valor de `count` mudar.
- **Primeira Renderização**: Quando o componente é montado, o efeito é executado logo após a renderização inicial.
- **Subsequentes Renderizações**: Se o valor de `count` mudar, o efeito é executado novamente.

#### Uso do `useEffect` para Buscas de API

Outro caso comum para `useEffect` é a busca de dados em APIs. O efeito será disparado após o componente ser renderizado, e podemos usar isso para fazer chamadas assíncronas a APIs e armazenar os dados no estado.

**Exemplo com API:**

```jsx
import { useState, useEffect } from 'react';

function Usuarios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []); // Executa o efeito apenas na primeira renderização

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
```

**Explicação:**
- O `useEffect` executa uma busca na API "https://jsonplaceholder.typicode.com/users" apenas uma vez, após a primeira renderização (porque o array de dependências está vazio).
- Quando a resposta é recebida, o estado `users` é atualizado com os dados, e o componente é re-renderizado para exibir a lista de usuários.

---

### Escopo em Componentes React

Entender o escopo em componentes React é importante, especialmente ao lidar com hooks como `useEffect`. Quando usamos hooks, estamos lidando com o ciclo de vida de um componente funcional.

- **Escopo do Componente**: Cada componente tem seu próprio escopo, e toda vez que ele é re-renderizado, os hooks são reavaliados. Por isso, é importante entender que, em cada render, uma **nova versão do estado** e das funções é criada.
  
  Exemplo de como o escopo afeta o `useEffect`:
  
  ```jsx
  useEffect(() => {
    console.log('O valor atual do estado:', count);
  }, [count]); // Sempre pega o valor atualizado de 'count'
  ```

- **Dependências do `useEffect`**: Quando usamos variáveis dentro do `useEffect`, precisamos adicioná-las ao array de dependências. Se não fizermos isso, o `useEffect` pode estar usando uma versão **desatualizada** dessas variáveis.

---

### Outros Hooks do React

Além do `useState` e `useEffect`, React oferece vários outros hooks poderosos para diferentes finalidades. Vamos ver alguns dos mais importantes:

#### 1. **`useContext`**
Usado para compartilhar dados globalmente entre componentes, sem precisar passar props manualmente por cada nível da árvore de componentes. Ideal para temas, autenticação, etc.

**Exemplo:**
```jsx
const ThemeContext = React.createContext('light');

function ComponenteFilho() {
  const theme = useContext(ThemeContext);
  return <div>{theme}</div>;
}
```

#### 2. **`useReducer`**
Permite gerenciar estados mais complexos, semelhante ao `useState`, mas com lógica centralizada em um **reducer** (um padrão usado no Redux, por exemplo). Útil quando várias mudanças de estado dependem umas das outras.

**Exemplo básico:**
```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Contador() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Contagem: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

#### 3. **`useMemo`**
Memoriza o resultado de uma função cara para evitar recalculá-lo a cada render, a menos que as dependências mudem. Muito útil para otimizar o desempenho.

**Exemplo:**
```jsx
const resultadoMemorizado = useMemo(() => {
  return calculoDemorado(input);
}, [input]); // Só recalcula se 'input' mudar
```

#### 4. **`useRef`**
Fornece uma maneira de acessar diretamente elementos do DOM ou armazenar valores persistentes entre renders, sem causar uma nova renderização quando alterado.

**Exemplo:**
```jsx
const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();
};

return <input ref={inputRef} />;
```

---

### Desafios da Semana

1. **Fazer uma Requisição de API com `useEffect`:**
   - Crie um componente que faz uma busca em uma API e exibe os dados recebidos.
   - Desafio: Adicionar um botão de "Atualizar" que faz uma nova requisição ao clicar.

2. **Criar um Temporizador com `useEffect`**
   - Implemente um temporizador que inicia automaticamente quando o componente é renderizado e conta os segundos.
   - Desafio: Adicionar um botão "Parar" que limpa o temporizador.

---

### Resumo dos Conceitos
- **`useEffect`**: Usado para efeitos colaterais, como buscar dados de API, manipular o DOM ou sincronizar dados externos.
- **Escopo**: Cada render tem seu próprio escopo, e devemos garantir que variáveis usadas em hooks como `useEffect` estejam atualizadas.
- **Outros Hooks**: `useContext` para compartilhar dados globais, `useReducer` para lógica complexa de estado, `useMemo` para otimizações de desempenho e `useRef` para acessar diretamente o DOM.

Esses conceitos são essenciais para criar componentes React mais robustos e interativos, com a capacidade de interagir com o mundo exterior e gerenciar estados mais complexos.