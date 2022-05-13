import { ReactComponent as Logo } from '../assets/img/logo.svg';
import { ReactComponent as FBIcon } from '../assets/img/icon-facebook.svg';
import { ReactComponent as IGIcon } from '../assets/img/icon-instagram.svg';
import { ReactComponent as TWIcon } from '../assets/img/icon-twitter.svg';
import { ReactComponent as PinIcon } from '../assets/img/icon-pinterest.svg';
import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-container">
          <Logo className="logo" />
        </div>
        <div className="link-container">
          <h3>Features</h3>
          <span>Link Shortening</span>
          <span>Branded Links</span>
          <span>Analytics</span>
        </div>
        <div className="link-container">
          <h3>Resources</h3>
          <span>Blog</span>
          <span>Developers</span>
          <span>Support</span>
        </div>
        <div className="link-container">
          <h3>Company</h3>
          <span>About</span>
          <span>Our Team</span>
          <span>Careers</span>
          <span>Contact</span>
        </div>
        <div className="icon-container">
          <FBIcon />
          <TWIcon />
          <PinIcon />
          <IGIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
