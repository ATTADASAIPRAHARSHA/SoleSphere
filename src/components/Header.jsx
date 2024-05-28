import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const ref = useRef();
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      if (window.scrollY > 0) {
        ref.current.classList.add('borderradius');
      } else {
        ref.current.classList.remove('borderradius');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleHamburger = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <>
      <div ref={ref} className="navbar">
        <div className="logo">
          <img src="logo1.png" width={70} height={50} alt="IMG" />
        </div>

        <div className="navlist gender">
          <ul>
            <li><NavLink className='Link' to="/SoleSphere/mens-footwear" activeClassName="active">Men</NavLink></li>
            <li><NavLink className='Link' to="/SoleSphere/womens-footwear" activeClassName="active">Women</NavLink></li>
            <li><NavLink className='Link' to="/SoleSphere/kids-footwear" activeClassName="active">Kids</NavLink></li>
            <li><NavLink className='Link' to="/SoleSphere/sports-footwear" activeClassName="active">Sports</NavLink></li>
            <li><NavLink className='Link' to="/SoleSphere/specialty-footwear" activeClassName="active">Specialty</NavLink></li>
            <li><NavLink className='Link' to="/SoleSphere/seasonal-footwear" activeClassName="active">Seasonal</NavLink></li>
          </ul>
        </div>
        <div className="navlist">
          <ul>
            <li><NavLink className='Link' activeClassName="active" to="/SoleSphere"><img src="home.png" width={30} height={30} alt="" /> </NavLink></li>
            <li><NavLink className='Link' activeClassName="active" to="/SoleSphere/cart"><img src="cart.png" width={30} height={30} alt="" /> </NavLink></li>
            <li><NavLink className='Link' activeClassName="active" to="/SoleSphere/fav"><img src="heart.png" width={30} height={30} alt="" /> </NavLink></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleHamburger}>
          <img src="hamburger.png" width={20} height={20} alt="Menu" />
        </div>
      </div>
      {isHamburgerOpen && (
        <div className="hamsec">
          <ul>
            <li><NavLink className='Link black'  to="/SoleSphere/mens-footwear" activeClassName="active">Men</NavLink></li>
            <li><NavLink className='Link black' to="/SoleSphere/womens-footwear" activeClassName="active">Women</NavLink></li>
            <li><NavLink className='Link black' to="/SoleSphere/kids-footwear" activeClassName="active">Kids</NavLink></li>
            <li><NavLink className='Link black' to="/SoleSphere/sports-footwear" activeClassName="active">Sports</NavLink></li>
            <li><NavLink className='Link black' to="/SoleSphere/specialty-footwear" activeClassName="active">Specialty</NavLink></li>
            <li><NavLink className='Link black' to="/SoleSphere/seasonal-footwear" activeClassName="active">Seasonal</NavLink></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
