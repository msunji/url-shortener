import { useEffect, useState } from 'react';
import '../styles/components/Shortener.scss';
import Button from './Button';

const Link = ({ id, original, shortened }) => {
  return (
    <li key={id} className="link">
      <p className="link--original">{original}</p> 
      <p className="link--shortened">{shortened}</p>
      <Button color="cyan" shape="rounded">Copy</Button>
  </li>
  )
}

const Shortener = () => {
  const [origUrl, setOrigUrl] = useState('');
  const [shortenedUrls, setShortenedUrls ] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setOrigUrl(e.target.value);
  }

  const handleShortening = (result) => {
    setShortenedUrls([...shortenedUrls, {
      id: new Date().getTime(), 
      original: origUrl,
      shortened: result.full_short_link
    }]);
    setIsLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (origUrl) {
      setIsLoading(true);
      fetch(`https://api.shrtco.de/v2/shorten?url=${origUrl}`, {
              method: 'POST'
          }).then(res => res.json())
          .then(({
              result
          }) => handleShortening(result))
    }
    if (origUrl === '') {
      setErr(true);
    }
  }

  return (
      <div className="shortener">
        <div className="shortener__container">
          <form onSubmit={handleSubmit}>
            <div className="form__input">
              <input className={`${err ? 'error' : ''}`} type="text" value={origUrl} placeholder="Shorten a link here..." onChange={handleChange} />
              <p className={`error-msg ${err ? 'active' : ''}`}>Please add a link</p>
            </div>
            <Button color="cyan" shape="rounded">{ isLoading ? 'Loading...' : 'Shorten It!'}</Button>
          </form>

        </div>
        <ul className="shortener__links">
          { shortenedUrls.map(({ id, original, shortened }) => (<Link key={id} original={original} shortened={shortened} />))}
        </ul>
      </div>
  )
}

export default Shortener;