import './helloworld.css';

interface MyComponentProps {
  name: string;
  age?: number;
  onClick?: () => void;
}

function MyComponent({ name, age, onClick }: MyComponentProps) {
  return (
    <div>
      <h1 className='hello' >Hello, { name }!</h1>
      {onClick && <button onClick={onClick}>Click me</button>}
    </div>
  );
}

export default MyComponent;