import '../styles/components/Card.scss';

const Card = ({ icon, children }) => {
  return (
    <div className="card">
      <div className="card__icon">
        <div className={`card__icon-${icon}`} />
      </div>
      <div className="card__inner">
        {children}
      </div>
    </div>
  )
}

export default Card;