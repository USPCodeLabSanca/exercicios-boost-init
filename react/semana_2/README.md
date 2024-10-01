# Componentes, Props e Reutilização

## Objetivo
Criar *componentes* mais complexos e reutilizáveis no React, e entender melhor o conceito de *props*. 

## Tópicos
- O que são Props?
- Tipagem de Props com Typescript
- Eventos em Componentes: `onClick`
- Componente Completo em React e Typescript
- Exercício da Semana

### O que são Props?

`Props` (abreviação de "properties") são dados passados de um componente pai para um componente filho. Eles permitem que os componentes sejam dinâmicos e reutilizáveis, alterando seu comportamento e exibição com base nos valores recebidos. Props são imutáveis dentro do componente que os recebe, o que significa que o componente não pode modificar os valores recebidos como props.

```jsx
// exemplo em jsx
function Welcome(props) {
  return <h1>Olá, {props.nome}!</h1>;
}
```

### Tipagem de Props com Typescript

Ao criar componentes em TypeScript, a principal diferença em relação ao JavaScript está na **tipagem estática**. Isso ajuda a garantir maior segurança e clareza no código, uma vez que você define explicitamente os tipos dos props, estados e retornos de funções. Aqui estão alguns pontos importantes a serem considerados:

1. **Definição de Tipos de Props**: É recomendável tipar os props de um componente para garantir que os dados recebidos sejam do tipo esperado. Isso previne erros comuns, como passar o tipo errado para um componente e ajuda a tornar o código mais legível.

```tsx
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
};

function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
```
Aqui, definimos o tipo `CardProps` que especifica que `title`, `description` e `imageUrl` são obrigatoriamente strings. Caso outro tipo de dado seja passado, o TypeScript gerará um erro de compilação.

2. **Componentes com Props Opcionais**: Nem sempre todos os props são obrigatórios. Em TypeScript, você pode tornar certos props opcionais usando o operador `?`.

```tsx
interface CardProps {
  title: string;
  description: string;
  imageUrl?: string; // Este prop é opcional
};

function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
```
Aqui, o prop `imageUrl` é opcional. Se ele não for fornecido, o React apenas renderizará o título e a descrição.

3. **Tipagem de Funções e Eventos**: Além de props, é importante tipar funções, eventos e o retorno de funções para maior clareza e segurança. Isso é especialmente útil ao lidar com eventos como cliques de botões.

```tsx
function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  console.log('Botão clicado!', event);
}
```
Aqui, estamos tipando a função `handleClick` com o tipo de evento esperado, neste caso, um `MouseEvent` associado a um elemento de botão HTML (`HTMLButtonElement`).

### Eventos em Componentes: `onClick`

No React, os eventos são muito parecidos com os eventos nativos do DOM, mas com a vantagem de *serem declarados diretamente no JSX*. Um dos eventos mais comuns é o `onClick`, utilizado para capturar cliques de botões ou outros elementos interativos. Você pode inserir uma função de 2 formas diferentes:

- Usando `onClick` com Funções Inline
```jsx
function Button() {
  return (
    <button onClick={() => alert('Botão clicado!')}>Clique-me</button>
  );
}
```

- Usando Funções Separadas
```jsx
function Button() {
  const handleClick = () => {
    console.log('Botão clicado!');
  };

  return (
    <button onClick={handleClick}>Clique-me</button>
  );
}
```

Em Typescript, se você estiver passando funções como props, também pode tipá-las corretamente.
```tsx
interface ButtonProps {
  onClick: () => void;
};

function Button({ onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>Clique-me</button>
  );
}
```

### Componente Completo em React e Typescript

Portanto, como vimos aqui, para criar um componente de React em Typescript, precisamos: 
- Criar a função de componente
- Definir os Props e os tipos das variáveis corretamente (string, number, função, etc.)
- Escrever o jsx ou tsx corretamente (com as `{}`) para passar as variáveis
- Estilizar o seu componente com css, criando seu arquivo css no mesmo diretório e importando com `import './seu_arquivo.css'`

### Exercício da Semana
- Criar o seu componente Card, e estilizá-lo da forma que você quiser.
- Usar o onClick no seu componente para acionar uma função.
