import './Project.css'
import pic from './profile_pic.jpeg'
import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
    return (
        <div>
            <div>
                <div className="project_header">
                    <div className="project_cover" ></div>
                    <img className="project_avatar" src={pic} alt="avatar" />
                    <h1 className="project_fullname">Sahil Angral</h1>
                    <h2 className="project_jobtitle">Software Engineer</h2>
                </div>
                <h2 className="head" style={{fontSize:'18px', marginBottom:'5px'}}>Projects </h2>
                <div className="project_main">
                    <ProjectCard slackapp />
                    <ProjectCard netflix />
                    <ProjectCard phd/>
                    <ProjectCard genome/>
                    <ProjectCard armsimulator />
                </div>
            </div>
        </div>
    )
}

export default Project
