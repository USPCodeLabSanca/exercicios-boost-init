import './Card.css';
import FormularioSimples from '../../Form/Form';

interface CardProps {
  title: string;
  content: string;
  image?: string;
  valorInicial: string;
}

function Card({ title, content, image, valorInicial }: CardProps) {
  return (
    <>
      <div className='card--container'>
        <div className='card'>
          <h2 className='card--title'>{title}</h2>
          <p className='card--content'>{content}</p>
          <FormularioSimples valorInicial={valorInicial} />
          {image && <img className='card--img' src={image} alt={title} />}
        </div>
      </div>
    </>
  )
}

export default Card;