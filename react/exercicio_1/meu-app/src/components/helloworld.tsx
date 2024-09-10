import 'helloworld.css';

interface MyComponentProps {
    name: string;
    age?: number;
}

function MyComponent({ name, age }: MyComponentProps) {
  return (
    <div>
        <h1 className='hello'>Hello, { name }!</h1>
    </div>
  );
}

export default MyComponent;