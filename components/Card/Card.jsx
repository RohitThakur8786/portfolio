import React from 'react'
import './Card.scss';

const Card = () => {
  return (
    <div className='card'>
       <div className="repo-name">
       <h1>developerFolio</h1>
       </div>
       <div className="repo-desc">
        <p>Software Developer Portfolio Template that helps you showcase you </p>
       </div>
       <div className="repo-footer">
        <div>left icon</div>
        <div>Right icon</div>
       </div>
    </div>
  )
}

export default Card
