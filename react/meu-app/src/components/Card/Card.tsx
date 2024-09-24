import './Card.css';

interface CardProps {
  title: string;
  content: string;
  image?: string;
}

function Card({ title, content, image }: CardProps) {
  return (
    <>
      <div className='card--container'>
        <div className='card'>
          <h2 className='card--title'>{title}</h2>
          <p className='card--content'>{content}</p>
          {image && <img className='card--img' src={image} alt={title} />}
        </div>
      </div>
    </>
  )
}

export default Card;