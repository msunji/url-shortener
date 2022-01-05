import { ReactComponent as Logo } from '../assets/img/logo.svg'; 
import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-container">
          <Logo className="logo" />
        </div>
        <div className="link-container">
          <h4>Features</h4>
          <span>Link Shortening</span>
          <span>Branded Links</span>
          <span>Analytics</span>
        </div>
        <div className="link-container">
          <h4>Resources</h4>
          <span>Blog</span>
          <span>Developers</span>
          <span>Support</span>
        </div>
        <div className="link-container">
          <h4>Company</h4>
          <span>Link Shortening</span>
          <span>Branded Links</span>
          <span>Analytics</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;