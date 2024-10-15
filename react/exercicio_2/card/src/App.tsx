import React, {useState} from 'react';
import Card from './Card';

const App: React.FC = () => {
  const handleCardClick = () => {
    alert('Card clicked');
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ backgroundColor: '#fef120', height: '100vh', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '20px' }}>
      <div>
        <h1 style={{ color: 'white' }}>My Cards</h1>
        <Card
          title='Card 1'
          description='This is a sample card.'
          onClick={handleCardClick}
        />
        <Card
          title='Card 2'
          description='Another sample card.'
          onClick={handleCardClick}
        />
      </div>
    </div>
  );
};

export default App;
