import '../styles/components/Hero.scss';
import Illustration from '../assets/img/illustration-working.svg';
import Button from './Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
      <div className="hero__image">
          <img src={Illustration} alt="Illustration of a person working" />
      </div>
        <div className="hero__text">
          <h1>More than just shorter links</h1>
          <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <Button color="cyan" shape="pill">Get Started</Button>
        </div>

      </div>
    </section>
  )
}

export default Hero;