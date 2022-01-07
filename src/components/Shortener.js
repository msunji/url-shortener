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
  return (
      <div className="shortener">
        <div className="shortener__container">
          <form>
            <input type="text" placeholder="Shorten a link here..."></input>
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