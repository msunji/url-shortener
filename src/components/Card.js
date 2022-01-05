import '../styles/components/Card.scss';

const Card = (props) => {
  return (
    <div className="card">
      <div className={`card__icon-${props.icon}`} />
      <div className="card__inner">
        { props.children }
      </div>
    </div>
  )
}

export default Card;