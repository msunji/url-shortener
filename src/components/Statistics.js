import '../styles/components/Statistics.scss';
import Shortener from './Shortener';
import Card from './Card';

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="statistics__container">
        <Shortener />
        <div className="statistics__text">
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="statistics__grid">
          <Card icon="recognition">
            <h3>Brand Recognition</h3>
            <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
          </Card>
          <Card icon="records">
            <h3>Detailed Records</h3>
            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </Card>
          <Card icon="customisable">
            <h3>Fully Customizable</h3>
            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </Card>
        </div>
      </div>
      
    </section>
  )
}

export default Statistics;