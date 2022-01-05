import '../styles/components/Cta.scss';
import Button from './Button';

const Cta = () => {
  return (
    <section>
      <div className="container">
        <h2>Boost your links today</h2>
        <Button color="cyan" shape="pill">Get Started</Button>
      </div>
    </section>
  )
}

export default Cta;