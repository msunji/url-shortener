import './styles/main.scss';
import './styles/_reset.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Statistics />
      <Cta />
      <Footer />
    </main>
  );
}

export default App;
