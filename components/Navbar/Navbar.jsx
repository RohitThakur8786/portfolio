import React, { useState } from 'react'
import "./Navbar.scss";
import {menu} from '../../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='navbar'>
        <h1>
          Logo
        </h1>      
        <ul className='nav-item-list'>
          {['home', 'project', 'about', 'portfolio', 'testimonial'].map((item) => (
            <li key={item}><a className='nav-item' href={`#${item}`}>{item}</a></li>
          ))}
        </ul>
        <button className='hireme-btn'>
          hire me
        </button>
        <div className='nav-menu'>
          <img src={menu} alt="Menu" width={20} height={20} onClick={() => toggle ? setToggle(false) : setToggle(true)}/> 
        {toggle &&
          <ul className='mobile-menu'>
            {['home', 'contact', 'about', 'portfolio', 'testimonial'].map((item) => (
              <li key={item}><a className='mobile-nav' href={`#${item}`}>{item}</a></li>
            ))}
          </ul>
        }
        </div>
    </nav>
  )
}

export default Navbar
