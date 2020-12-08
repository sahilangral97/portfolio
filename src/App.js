import { useState } from 'react';
import About from './About';
import Experience from './Experience';
import Contact from './Contact'
import Project from './Project'
import './App.css';


function App() {
  
  const[page,setPage] = useState("about");

  const but = {
    width: '85px',
    fontSize: '10px',
    fontWeight: 'bolder',
    border:'none',
    paddingLeft: '10px',
    textAlign: 'center',
    lineHeight: '50px',
    borderBottom: '0px solid transparent',
    backgroundColor: 'white',
    "&:hover": {
      borderBottom: '0px solid #8a84ff',
      background: 'linear-gradient(to bottom, rgba(207, 204, 255, 0.2) 0%, rgba(211, 226, 255, 0.4) 44%,rgba(138, 132, 255, 1) 100%)'
    },
  };

  const but_hover={
    borderBottom: '0px solid #8a84ff',
    background: 'linear-gradient(to bottom, rgba(207, 204, 255, 0.2) 0%, rgba(211, 226, 255, 0.4) 44%,rgba(138, 132, 255, 1) 100%)'
  }
  
  
  return (
    <div className="App">
      <div className="body">
        <div className="card">
          { page==='about' ? <About />
            : page==='experience' ? <Experience />
              : page==='project' ? <Project /> 
                : <Contact />}

          <div className="footer">
              <button style={page==='about' ? but_hover : but} onClick={() => setPage('about')}>About</button>
              <button onClick={() => setPage('experience')}>Experience</button>
              <button onClick={() => setPage('project')}>Project</button>
              <button  onClick={() => setPage('contact')}>Contact</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
