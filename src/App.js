import { useState } from 'react';
import About from './About';
import Experience from './Experience';
import Contact from './Contact'
import Project from './Project'
import './App.css';

function App() {
  
  const[page,setPage] = useState("about");


  return (
    <div className="App">
      <div className="body">
        <div className="card">
          { page==='about' ? <About />
            : page==='experience' ? <Experience />
              : page==='project' ? <Project /> 
                : <Contact />}

          <div className="footer">
              <button onClick={() => setPage('about')}>About</button>
              <button onClick={() => setPage('experience')}>Experience</button>
              <button onClick={() => setPage('project')}>Project</button>
              <button onClick={() => setPage('contact')}>Contact</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
