import React, {useState} from 'react';

interface CardProps {
    title: string;
    description: string;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, onClick}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                ...styles.card,
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}    
        >
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.description}>{description}</p>
        </div>
    );
};


const styles = {
    card: {
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        margin: '20px',
        cursor:'pointer',
        transition: 'transform 0.3s ease',
    },
    title: {
        margin: '0 0 8px 0',
        fontSize: '14px',
    },
    description: {
        fontSize: '12px'
    },
};

export default Card;