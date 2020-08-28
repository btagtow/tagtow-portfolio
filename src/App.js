import React from 'react';
import linkedin from './images/social/linkedin.png'
import mail from './images/social/mail.png'
import medium from './images/social/medium.png'
import github from './images/social/github.png'
import Projects from './projectslist'
import ProjectCard from './components/ProjectCard'

import './App.css';

class App extends React.Component {
  state = {
    display: "idk"
  }

  updateState = (event) => {
    return this.setState({
      display: event.target.getAttribute("value")
    })
  }

  updateContent = () => {
    switch (this.state.display){
      case "projects" : 
          return Projects.map(proj => {
            let { title, description, frontEndLanguages, backEndLanguages, github, url } = proj
            return  <ProjectCard 
                      title={title} 
                      description={description}
                      frontEndLanguages={frontEndLanguages}
                      backEndLanguages={backEndLanguages}
                      github={github}
                      url={url}
                      >
                    </ProjectCard>
          })
      default : 
          return "HEY"
    }
  }

  render() {

    return (
      <div className="App">
        <div className="banner">
          <div className="banner-heading">
            <h2 className="hello-world banner-item">hello world!</h2> 
            <div className="name-container">
              <h1 className="im banner-item">i'm</h1>
              <h1 className="name banner-item"> ben tagtow</h1>
            </div>
          </div>
          <div className="banner-social">
              <a href="https://github.com/btagtow/" target="_blank" rel="noopener noreferrer"><img className="social-icon clickable hover" src={github} alt="Github link"></img> </a>
              <a href="https://www.linkedin.com/in/bentagtow/" target="_blank" rel="noopener noreferrer"><img className="social-icon clickable hover" src={linkedin} alt="LinkedIn link"></img> </a>
              <a href="https://medium.com/@bentagtow" target="_blank" rel="noopener noreferrer"><img className="social-icon clickable hover" src={medium} alt="Medium link"></img> </a>
              <a href="mailto:bentagtow@gmail.com" target="_blank" rel="noopener noreferrer"><img className="social-icon clickable hover" src={mail} alt="Email link"></img> </a>
          </div>
          
        </div>
        <div className="main-container">
            <div className="nav-bar">
              <a href="https://pdfhost.io/v/w0G8598rk_Ben_Tagtow_Resume_Portfolio_2020_pdf.pdf" target="_blank" rel="noopener noreferrer"> <h3 className="nav-item clickable hover">resume</h3> </a>
              <h3 value="projects" className="nav-item clickable hover" onClick={event => this.updateState(event)}>projects</h3>
              {/* => projects */}
              {/* summary (including languages), snippets, links */}
              <h3 className="nav-item clickable hover" value="blog">blog</h3>
              {/* => blog */}
              {/* medium summary, snippets,and links */}
              <h3 className="nav-item clickable hover" value="life">my life & pitch</h3>
              {/* {"Get to know me" like interests and hobbies */}
              <h3 className="nav-item clickable hover" value="history">history</h3>
              {/* past work experience, marketing content and links to old blogs */}
            </div>
            <div className="selected-content">
              {/* <ul><h1>THIS IS A FILLER FOR WHERE CONTENT WILL GO</h1>
                <li>the first list item</li>
                <li>just another list item</li>
                <li>this one is really long becaus eit needs to fill abunch of space for testing</li>
                <li>the final list item</li>
              </ul> */}
              {this.updateContent()}
            </div>

        </div>
      </div>
  );
}
}

export default App;
