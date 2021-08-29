import React from 'react'
import Liner from '../../common/liner'
import { SkillData } from '../../data/skills'
import Skillcard from './skill-card';
import './skills.css'

function Skills() {
    const data = SkillData;
    return (
        <div className='skills'>
            <Liner/>
            <label className='section-title'>Skills</label>
            <div className='skill-container'>
                {data.map((item)=>{
                    return(
                        <div className='skill-section'>
                            <label className='skill-section-type'>{item.type}</label>
                            <div className='skill-list'>
                                {item.list.map((skill)=>{
                                    return(
                                        <Skillcard skill={skill} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
