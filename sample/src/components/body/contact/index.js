import React from 'react'
import Liner from '../../common/liner'
import Socialmedia from '../../common/social-media'
import './contact.css'

function Contact() {
    return (
        <div className='contact'>
            <Liner/>
           <label className='section-title'>Contact</label>
           <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <Socialmedia/>
                </div>
                <div className='download'>
                    <a download href={require('../../../assets/Pasindu Kavinda Gunasekara (1).pdf').default}>
                        <i class="devicon-googlecloud-plain colored"></i>
                            Download Resume
                    </a>
                </div>
           </div>
        </div>
    )
}

export default Contact
