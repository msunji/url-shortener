import { useState } from 'react';
import '../styles/components/Shortener.scss';
import Button from './Button';

const Link = ({ id, original, shortened }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
  }
  return (
    <li key={id} className="link">
      <p className="link--original">{original}</p> 
      <p className="link--shortened">{shortened}</p>
      <div className="copy-button-container" onClick={() => handleCopy(shortened)}>
        <Button color="cyan" shape="rounded" copied={`${isCopied ? 'copied' : null}`}>{isCopied ? 'Copied!' : 'Copy'}</Button>
      </div>
    </li>
  )
}

const Shortener = () => {
  const [origUrl, setOrigUrl] = useState("");
  const [shortenedUrls, setShortenedUrls ] = useState(() => {
    const storageData = localStorage.getItem("urls");
    const initData = JSON.parse(storageData);
    return initData || [];
  });
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setOrigUrl(e.target.value);
  }

  const handleShortening = (result) => {
    setShortenedUrls((prevUrls) => {
      const urls = [...shortenedUrls, { 
        id: new Date().getTime(),
        original: origUrl,
        shortened: result.full_short_link
      }];
      if (localStorage) {
        localStorage.setItem("urls", JSON.stringify(urls));
      }
      return urls;
    });
    setOrigUrl('');
    setIsLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      setErr(true);
    } else {
      setIsLoading(true);
      fetch(`https://api.shrtco.de/v2/shorten?url=${origUrl}`, {
              method: 'POST'
          }).then(res => res.json())
          .then(({
              result
          }) => handleShortening(result))
    }
  }

  return (
      <div className="shortener">
        <div className="shortener__container">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-input">
              <input id="input-url" className={`${err ? 'error' : ''}`} type="url" value={origUrl} placeholder="Shorten a link here..." onChange={handleChange} required />
              <p className={`error-msg ${err ? 'active' : ''}`}>Please add a valid link</p>
            </div>
            <Button color="cyan" shape="rounded">{ isLoading ? 'Loading...' : 'Shorten It!'}</Button>
          </form>

        </div>
        <ul className="shortener__links">
          { shortenedUrls ? shortenedUrls.map(({ id, original, shortened }) => (<Link key={id} original={original} shortened={shortened} />)) : null}
        </ul>
      </div>
  )
}

export default Shortener;