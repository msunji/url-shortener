import './styles/main.scss';
import './styles/_reset.scss';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Hero />
      <Statistics />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
