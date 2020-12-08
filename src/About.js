import './About.css'
import React from 'react'
import pic from './profile_pic.jpeg';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function About() {
    return (
        <div className="aboutsection">
            <div className="card_header">
            <div className="card_cover" ></div>
              <img className="card_avatar" src={pic} alt="avatar" />
              <h1 className="card_fullname">Sahil Angral</h1>
              <h2 className="card_jobtitle">Software Engineer</h2>
          </div>
          <div className="card_main">
            <div className="about_section">
              <div className="about">
                <div className="aboutt"> ABOUT</div>
                <p>I am Full Stack Developer and software engineer currently living in Jammu. I have done Btech in CSE from IIIT-D. I am very passionate and constantly work to become a better version of myself.</p>
              </div>
              <div className="social_media">
                <InstagramIcon onClick={event => window.open('https://www.instagram.com/_alivesince97_/','_blank')}/>
                <FacebookIcon  onClick={event => window.open('https://www.facebook.com/alivesince97/','_blank') } />
                <LinkedInIcon onClick={event => window.open('https://www.linkedin.com/in/sahilangral97/','_blank') }/>
                <GitHubIcon onClick={event => window.open('https://github.com/sahilangral97','_blank') }/>
                
              </div>
            </div>
            <div className='skills_section'>
              <h1>Skills</h1>
              <div className="skills">
                <div>JAVA</div>
                <div>PYTHON</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>REACT</div>
                <div>GIT</div>
                <div>DOCKER</div>
                <div>FIREBASE</div>
                <div>MySQL</div>
                <div>MongoDB</div>
                <div>LINUX</div>
              </div>
            </div>
            <a style={ {textDecoration:'none'}} href='https://drive.google.com/uc?export=download&id=1L4phnA8N0lOQW_HvOuaYN46ly2iZv9nG' target='_blank'>
                <p style={{marginTop:'0px', marginBottom:'0px', marginLeft:'28px', fontSize:'13px',fontWeight: '700',
                            color:'#2b2c48', fontFamily: 'jost sans-serif'}}>
                  Get Resume
                </p>
           </a>
          </div>
        </div>
    )
}

export default About
