import React from 'react'
import './web.css'

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href='#work'>
                <i class="fas fa-briefcase option-icon"></i> About
                </a>
            </div>
            <div className="web-option">
                <a href='#project'>
                <i class="fas fa-tasks option-icon"></i> Project
                </a>
            </div>
            <div className="web-option">
                <a href='#skill'>
                <i class="fas fa-laptop-code option-icon"></i> Skills
                </a>
            </div>
            
            <div className="web-option">
                <a href='#contact'>
                <i class="fas fa-user-tie option-icon"></i> Contact
                </a>
            </div>
        </div>
    )
}

export default Web
