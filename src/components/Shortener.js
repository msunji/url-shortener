import { useEffect, useState } from 'react';
import '../styles/components/Shortener.scss';
import Button from './Button';

const Link = () => {
  return (
    <li className="link">
      <p className="link--original">
          https://www.w3schools.com/tags/ref_httpmethods.asp</p> 
      <p className="link--shortened">shrtco.de/KCveN</p>
      <Button color="cyan" shape="rounded">Copy</Button>
  </li>
  )
}

const Shortener = () => {
  const [ link, setLink ] = useState('');
  const [ shortenedLinks, setShortenedLinks ] = useState([]);

  const shortenUrl = (e) => {
    e.preventDefault();
    fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, {
            method: 'POST',
        }).then(res => res.json())
        .then((({
            result
        }) => setShortenedLinks({
            original: result.original_link,
            short: result.full_short_link
        })));
  };

  return (
      <div className="shortener">
        <div className="shortener__container">
          <form onSubmit={shortenUrl}>
            <input type="text" value={link} placeholder="Shorten a link here..." onChange={(e) => setLink(e.target.value)} required></input>
            <Button color="cyan" shape="rounded">Shorten It!</Button>
          </form>
        </div>
        <ul className="shortener__links">
          <Link />
        </ul>
      </div>
  )
}

export default Shortener;