import { useState } from 'react';
import Button from './Button';
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import '../styles/components/Navbar.scss';

const Navbar = () => {
  const [ open, setOpen ] = useState(false);
  console.log(open);
  return (
    <nav>
      <div className="nav__container">
        <Logo className="nav__logo" />
        <div className="mobile-toggle" onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </div>
        <div className={`nav__links ${open ? 'open' : ''}`}>
          <div className="nav__links--left">
            <span>Features</span>
            <span>Pricing</span>
            <span>Resources</span>
          </div>
          <hr className="nav__links__divider" />
          <div className="nav__links--right">
            <span>Login</span>
            <Button color="cyan" shape="pill">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;