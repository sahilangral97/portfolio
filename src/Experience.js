import React from 'react'
import './Experience.css'
import pic from './profile_pic.jpeg'

function Experience() {
    return (
        <div>
            <div className="exp_header">
            <div className="exp_cover" ></div>
              <img className="exp_avatar" src={pic} alt="avatar" />
              <h1 className="exp_fullname">Sahil Angral</h1>
              <h2 className="exp_jobtitle">Software Engineer</h2>
          </div>
          <div className="exp_main">
            <div className="edu_section">
              <h2>Education</h2>
              <div className="college_time">
                  <div className="timeline">
                      <p>2016</p>
                        <svg height="90" width="10">
                            <line x1="0" y1="3" x2="0" y2="84" style={{stroke:'#516acc', strokeWidth:'5', paddingLeft:'10px' }}/>
                        </svg>
                    <p>2020</p>
                  </div>
                  
                <p> Indraprastha Institute of Information Technology IIIT-D<br/>
                  <ul>
                    <li><span>Btech in Computer Science with minors <br/>in Computational Biology</span> </li>
                  </ul>
                </p>
              </div>
              <h2 style={{fontSize:'14px'}}>Work Experience</h2>
              <div className="work_time">
                  <div className="work_timeline">
                      <p>Jan,20</p>
                        <svg height="130" width="10">
                            <line x1="" y1="5" x2="0" y2="123" style={{stroke:'#516acc', strokeWidth:'5', paddingLeft:'10px' }}/>
                        </svg>
                    <p>Aug,20</p>
                  </div>
                  
                <p> LimeRoad<br/>
                <span className="job_title"><i>SDE Intern</i></span>
                  <ul>
                    <li><span>Worked on offer platform to automate the process of creating offers and making it live on website and app.</span> </li>
                    <li><span>Developed some API related to the user history and interest of products on our app.</span></li>
                  </ul>
                </p>
              </div>
            </div>
           
            
          </div>
            
        </div>
    )
}

export default Experience
