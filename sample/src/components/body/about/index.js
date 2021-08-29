/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Socialmedia from '../../common/social-media'
import './about.css'

function About() {
    return (
        <div className='about'>
          <div className='top'>
            <div className='info'>
                Hellow Welcome here,
                
                <br/>
                 <span>I'm,</span>  <br/> <span className="name">Pasindu Kavinda Gunasekara</span> 
                
            </div>
            <div className='photo'>
                <img src={require('../../../assets/profile-pic.jpg').default} className='profile' />
            </div>
          </div>
          <Socialmedia/>
        </div>
    )
}

export default About
