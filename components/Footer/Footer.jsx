import React from 'react'
import "./Footer.scss";
import { facebook, instagram, linkedin } from '../../assets';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='div-upper'>
        <div>Rohit</div>
        <div className='icon-container'>
          <a href="#">
          <img src={facebook} alt="" className='footericons'/>
          </a>
          <a href="#">
          <img src={instagram} alt="" className='footericons'/>
          </a>
          <a href="#">
          <img src={linkedin} alt="" className='footericons'/>
          </a>
        </div>
      </div>
      <hr />
      <div className='div-upper'>
        <div>
        {['home', 'about', 'project', 'item2', 'item2'].map((item) => (
            <li className='mobile-footer-link' key={item}><a href={item}>{item}</a></li>
          ))}
        </div>
        <div>
        {['item1', 'item2', 'item2', 'item2', 'item2'].map((item) => (
            <li className='mobile-footer-link' key={item}><a href={item}>{item}</a></li>
          ))}
        </div>
        <div>
        {['item1', 'item2', 'item2', 'item2', 'item2'].map((item) => (
            <li className='mobile-footer-link' key={item}><a href={item}>{item}</a></li>
          ))}
        </div>
        <div className='footer-email'>
          <input type="text" placeholder='Email' />
          <button className='btnsubmit'>Subscribe</button>
        </div>
      </div>
      <div className='copyright-section'>
        <p>Copyright</p>
        <p>Terms & conditions</p>
      </div>
    </div>
  )
}

export default Footer
