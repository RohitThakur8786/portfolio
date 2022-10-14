import React from 'react'
import './Projects.scss';
import { Card } from '../';
const Projects = () => {
  return (
    <div className='project-container' id='project'>
      <h1 className='heading-project'>Open Source Projects</h1>
      <div className='project-section-div'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <button className='more-project'>More Project</button>
      </div>
    </div>
  )
}

export default Projects
