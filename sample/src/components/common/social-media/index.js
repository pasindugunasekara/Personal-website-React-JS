/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { SocialData } from '../../data/social-data'
import './socialmedia.css'

function Socialmedia() {
    const data = SocialData;
    return <div className='social-contact'>
            {data.map((item)=>{
                return(
                    <a href={item.link}>
                        <div className='social-icon-div'>
                        <img src={item.icon} className='social-icon' />
                        </div>
                    </a>
                )
            })}
        </div>;
}

export default Socialmedia
