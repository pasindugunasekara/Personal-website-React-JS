import React from 'react'
import About from './about'
import './body.css'
import Contact from './contact'
import Project from './project'
import Skills from './skills'
import Works from './work'

function Body() {
    return (
        <div className="body">
            <section id='about'>
                <About/>
            </section>
            <section id='work'>
                <Works/>
            </section>
            <section id='project'>
                <Project/>
            </section>
            <section id='skill'>
                <Skills/>
            </section>
            <section id='contact'>
                <Contact/>
            </section>
        </div>
    )
}

export default Body
