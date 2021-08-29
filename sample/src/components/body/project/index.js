import React from 'react'
import Liner from '../../common/liner';
import { ProjectData } from '../../data/projects'
import ProjectCard from './project-card';
import './project.css'

function Project() {
    const data = ProjectData;
    return (
        <div className='projects'>
            <Liner/>
            <label className='section-title'>Projects</label>
            <div>
                {data.map((project)=>{
                    return <ProjectCard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Project
