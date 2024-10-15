# Introdução ao React e JSX

## Objetivo
Se introduzir ao mundo do React, aprendendo a criar um projeto React utilizando o `create-react-app` e a construir componentes funcionais simples utilizando o JSX e TSX.

## Tópicos
- [O que é React?](#o-que-é-react)
- [O que é JSX?](#o-que-é-jsx)
- [Como criar um projeto com `create-react-app`](#como-criar-um-projeto-com-create-react-app)
- [Componentes Funcionais](#componentes-funcionais)
- [O que é TSX?](#o-que-é-tsx)
- [Exercício da Semana](#exercício-da-semana)
---

### O que é React?
React é uma biblioteca JavaScript criada pelo Facebook em 2013, projetada para construir interfaces de usuário (UI) de maneira eficiente e escalável. Ele permite criar aplicativos web dinâmicos e interativos com facilidade, reutilizando componentes e otimizando o desempenho. A principal característica do React é sua abordagem declarativa, onde você descreve como a interface deve parecer em diferentes estados e o React se encarrega de atualizar a tela quando o estado muda.
Vantagens do React:
- **Reutilização de componentes**: Permite a criação de interfaces complexas através da composição de componentes reutilizáveis.
- **Virtual DOM**: React utiliza uma representação virtual da interface (DOM virtual) para otimizar as atualizações na interface de usuário, resultando em melhor desempenho.
- **Comunidade ativa**: Possui uma comunidade grande e uma vasta coleção de bibliotecas e ferramentas que ajudam no desenvolvimento.

### O que é JSX?
JSX (JavaScript XML) é uma extensão de sintaxe do JavaScript usada no React. Ele permite escrever HTML dentro do código JavaScript de forma mais legível e intuitiva. Em vez de usar funções JavaScript convencionais para criar elementos HTML, com JSX você pode combinar as duas linguagens.
Exemplo de JSX:
```jsx
const element = <h1>Hello world!</h1>;
```
No código acima, o JSX se parece com HTML, mas é convertido para JavaScript puro durante a execução. A vantagem é que você pode misturar lógica JavaScript diretamente dentro da estrutura HTML.

### Como criar um projeto com `create-react-app`:

Dado que você já instalou o `nvm` e já pode utilizar o `node` e `npm`, você criará o seu primeiro (ou não) projeto de React! Para criá-lo, existem algumas formas diferentes. Aqui, vamos testar o `create-react-app`, que é uma ferramenta de linha de comando que configura automaticamente um projeto React com tudo o que você precisa para começar a programar sem se preocupar com configurações complicadas de build ou dependências.

Passos para criar um novo projeto:
1. Abra o terminal.
2. Execute o seguinte comando para criar o projeto:
```
npx create-react-app meu-app --template typescript
```
3. Navegue até o diretório do projeto:
```
cd meu-app
```
4. Inicie o servidor de desenvolvimento:
```
npm start
```

Isso abrirá o aplicativo em `http://localhost:3000`, onde você poderá ver a página inicial do React.

### Componentes Funcionais
No React, um componente é uma parte da interface do usuário. Componentes funcionais são a maneira mais simples de criar componentes no React, usando funções JavaScript. Com componentes, conseguimos modularizar e reutilizar melhor o código, aumentando a escalabilidade e facilitando o entendimento do código.

#### Estrutura básica de um componente funcional:
```jsx
function MyComponent() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}
```
Neste exemplo, `MyComponent` é um componente funcional simples que retorna uma árvore de JSX (similar a HTML). Este componente pode ser reutilizado em outros lugares da aplicação.

#### Props em Componentes Funcionais:
Os componentes funcionais podem receber dados externos, conhecidos como "props", que são passados para eles como argumentos. Isso permite que os componentes sejam reutilizados com diferentes informações.
```jsx
function Welcome(props) {
  return <h1>Olá, {props.nome}!</h1>;
}
```

### O que é TSX?
TSX é a versão do JSX usada em projetos React com TypeScript. Assim como o JSX, ele permite escrever HTML dentro do JavaScript, mas com a vantagem de contar com tipagem estática fornecida pelo TypeScript. Isso ajuda a prevenir erros, garantindo que as propriedades e tipos de dados sejam verificados em tempo de compilação.
Exemplo de TSX:
```tsx
interface WelcomeProps {
  nome: string;
};

function Welcome(props: WelcomeProps) {
  return <h1>Olá, { props.nome }!</h1>;
}
```
Você também pode reescrever o código acima, sem diferença alguma (note a diferença no argumento da função!). Você pode optar por qualquer uma das formas.

```tsx
interface WelcomeProps {
  nome: string;
};

function Welcome({ nome }: WelcomeProps) {
  return <h1>Olá, {nome}!</h1>;
}
```
Nesse exemplo, o TypeScript define o tipo do prop nome como uma string, e qualquer uso incorreto será detectado. TSX é ideal para projetos maiores e mais complexos, pois melhora a manutenção e a robustez do código.

### Exercício da Semana
- Criar um componente funcional `App` que exiba "Hello, World!" no navegador.
- Personalizar o componente `App` para exibir uma mensagem de boas-vindas dinâmica, como "Olá, [nome]!" usando props em TypeScript.

#### Desafios
1. Criar múltiplos componentes, como um `Header` e um `Footer`, e importá-los no componente principal `App`.
2. Alterar o conteúdo exibido dinamicamente utilizando props nos componentes filhos.
