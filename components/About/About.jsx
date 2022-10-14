import React from 'react'
import "./About.scss";
import { contentimg, facebook, instagram, linkedin } from '../../assets';

const About = () => {
  return (
    <div className='about-container'>
      <div className='content-container'>
        <h1>Hi all, I'm Rohit 👋</h1>
        <p>A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.</p>
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
        <div className='content-btn'>
          <button className='btn'>Contact me</button>
          <button className='btn'>See resume</button>
        </div>
      </div>
      <div>
        <img src={contentimg} alt="img" className='content-img'/>
      </div>
    </div>
  )
}

export default About
