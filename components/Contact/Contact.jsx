import React from 'react'
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
      <h1>Contact me</h1>
      <div className='contact-form'>
        <div className='contact-field'>
          <input type="text" placeholder='Enter your name' />
          <input type="text" placeholder='Enter your email' />
          <input type="text" placeholder='Enter your number' />
        </div>
          <textarea name="Enter your message" id="messagecontainer" cols="50" rows="12"
          placeholder='Enter your message'></textarea>
      </div>
          <button className='btnsubmit'>Submit</button>
    </div>
  )
}

export default Contact
