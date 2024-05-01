import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import { Link, useLocation } from 'react-router-dom';
import 'animate.css';

import './style.css';

import logo from '../../assets/images/logo.png';

const Header = () => {
  const [currentPage, setCurrentPage] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);

    const wow = new WOW.WOW({
      animateClass: 'animated',
      offset: 50,
    });
    wow.init();
  }, [location]);

  return (
    <>
      <header
        className='header-area header-sticky wow slideInDown'
        data-wow-duration='0.75s'
        data-wow-delay='0s'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <nav className='main-nav'>
                <Link to='/' className='logo'>
                  <img className='logo-img' src={logo} alt='Logo CraftHub' />
                </Link>
                <ul className='nav'>
                  <li className={`scroll-to-section`}>
                    <Link
                      to='/'
                      style={
                        currentPage === '/'
                          ? { color: '#ff725e' }
                          : { color: '#2a2a2a' }
                      }
                    >
                      Home
                    </Link>
                  </li>
                  <li className={`scroll-to-section`}>
                    <Link
                      to='/about'
                      style={
                        currentPage === '/about'
                          ? { color: '#ff725e' }
                          : { color: '#2a2a2a' }
                      }
                    >
                      Sobre
                    </Link>
                  </li>
                  <li className={`scroll-to-section`}>
                    <Link
                      to='/services'
                      style={
                        currentPage === '/services'
                          ? { color: '#ff725e' }
                          : { color: '#2a2a2a' }
                      }
                    >
                      Serviços
                    </Link>
                  </li>
                  <li className={`scroll-to-section`}>
                    <Link
                      to='/contact'
                      style={
                        currentPage === '/contact'
                          ? { color: '#ff725e' }
                          : { color: '#2a2a2a' }
                      }
                    >
                      Contato
                    </Link>
                  </li>
                </ul>
                <Link className='menu-trigger'>
                  <span>Menu</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
