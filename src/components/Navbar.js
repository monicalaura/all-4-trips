import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            All4TRIPS
            <span className="logo-icon"><i class="fas fa-route"></i></span>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <LinkScroll
               to='hero'
               smooth={true}
               spy={true}
               duration={700} 
               className='nav-links' 
                onClick={closeMobileMenu}>
                Home
              </LinkScroll>
            </li>
            <li className='nav-item'>
              <LinkScroll
                to='destinations'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Destinations
              </LinkScroll>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li> */}

            <li>
              <LinkScroll
                to='contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact us
              </LinkScroll>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONTACT US</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
