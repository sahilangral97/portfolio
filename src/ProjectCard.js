import React from 'react'
import './ProjectCard.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';

function ProjectCard({slackapp,netflix,phd,genome,armsimulator}) {
    console.log(slackapp,netflix)
    return (
        <div>
            {slackapp ? 
                (<div className="card_main">
                    <div className="project_info">
                        <h1>Slack Web App </h1>
                        <p>Built the Slack Clone which has the functionality of chatting, creating channels and user authentication. 
                            Used React, React-Router, Material Ui and Firebase for user authentication and database.
                        </p>
                    </div>
                    <div className="project_preview">
                        <VisibilityIcon onClick={event => window.open('https://slack-app-4778.web.app/','_blank') }/>
                        <GitHubIcon onClick={event => window.open('https://github.com/sahilangral97/Slack-App','_blank') }/>
                    </div>
                </div>) : netflix ? (<div className="card_main">
                    <div className="project_info">
                        <h1>Netflix Front-End </h1>
                        <p>Built a netflix front end clone with a functionality to play trailer 
                            when a particular video is clicked. Used React, Firebase and axios for data fetching.
                        </p>
                    </div>
                    <div className="project_preview">
                        <VisibilityIcon onClick={event => window.open('https://netflix-clone-4778.web.app/','_blank') }/>
                        <GitHubIcon onClick={event => window.open('https://github.com/sahilangral97/netflix-clone','_blank') }/>
                    </div>
                </div>) : phd ? (<div className="card_main">
                    <div className="project_info">
                        <h1>PhD Admission Portal </h1>
                        <p>Built a Java based admission portal in which my role was to connect front end with database. Technologies used
                            were JavaFx, MySQL and JDBC.
                        </p>
                    </div>
                    <div className="project_preview">
                        <VisibilityIcon style={{display:'none'}}/>
                        <GitHubIcon style={{display:'none'}}/>
                    </div>
                </div>) : genome ? (<div className="card_main">
                    <div className="project_info">
                        <h1>Efficiently and uniquely storing Human Genome</h1>
                        <p>Efficiently storing Human Genome with 3 billion base pairs, trying the best compression and best retrieval. Built in Python language.
                        </p>
                    </div>
                    <div className="project_preview">
                        <VisibilityIcon style={{display:'none'}} />
                        <GitHubIcon  style={{display:'none'}} />
                    </div>
                </div>) : armsimulator ? (<div className="card_main">
                    <div className="project_info">
                        <h1>Arm Simulator</h1>
                        <p>Implemented some of the functions like fetch, decode, execute, memory write-back performed by arm simulator in java. Built in Java.
                        </p>
                    </div>
                    <div className="project_preview">
                        <VisibilityIcon style={{display:'none'}}/>
                        <GitHubIcon style={{display:'none'}}/>
                    </div>
                </div>) : (<p></p>) }
        </div>
    )

}

export default ProjectCard
