import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (

    <div>
      <img src='/images/bg-stars.png' className='stars-background' />
      <div className='page-section'>
        <div className='page-heading-section'>
          <div className='page-title-font'>About Us</div>
          <div className='page-title-blurb'>A Full Stack Web Developer with a passion for creating.</div>
        </div>

        <div className='selfie-row'>

          <div className='selfcard'>
            <img className='pic' src='/icons/emily-about.png' />
            <h3>Emily Parkes</h3>
            <div className='icons'>
              <a href='https://github.com/emilyparkes' target='_blank' rel="noopener noreferrer">
                <img className='icon' src='/icons/github-icon.png' height='40px' />
              </a>
              <a href='https://www.linkedin.com/in/emilyparkes/' target='_blank' rel="noopener noreferrer">
                <img className='icon' src='/icons/linkedin-icon.png' height='40px' />
              </a>
            </div>
          </div>

        </div>

      </div>
      <div>
        <Link to='/'>
          <button className='previous-button'>Home</button>
        </Link>
      </div>
    </div>
  )
}

export default About
