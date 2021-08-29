/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Liner from '../../common/liner'
import './work.css'

function Works() {
    return (
        <div className="aboutme">
           <Liner/>
           <label className='section-title'>About</label>
           <div className="myleft">
                <img src={require('../../../assets/profile2.jpg').default} className='profile2' />
            <div className='myright'>
                <ul>
                    <li>I'm Undergraduate Software Engineer</li>
                    <li>Based On java Programe Language</li>
                    <li>I did My Internship and Now working as self-employeer</li>
                    <li>I would Like to interact new Peoples and network with them</li>
                    <li>Traveler and Campling</li>
                    <li>Freethinker and Great Listner</li>
                    <li>ATHEIST Life</li>

                </ul>
            </div>   
           </div>
        </div>
    )
}

export default Works
