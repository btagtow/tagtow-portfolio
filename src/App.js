import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import linkedin from './images/social/linkedin.png'
import mail from './images/social/mail.png'
import medium from './images/social/medium.png'
import github from './images/social/github.png'
import ProfessionalNav from './components/professional/ProfessionalNav'
import Intro from './components/Intro'
import Gallery from './components/Gallery'

import './App.css';

class App extends React.Component {
  state = {
    display: "intro"
  }

  contentSelector = (event) => {
    this.updateState(event)

    for (let el of document.getElementsByClassName("active")){
      el.className = "nav-item clickable hover"
    }
    if (!event.target.className.includes("active")){
      return event.target.className = event.target.className + " active"
    } 
  }

  updateState = (event) => {
    return this.setState({
      display: event.target.getAttribute("value")
    })
  }

  updateContent = () => {
    switch (this.state.display){
      case "professional" : 
          return (
            <ProfessionalNav />
          )

      case "intro" : 
        return (
          <Intro />
        )
      case "life" : 
        return (
          <Gallery />
        )
      default : 
          return "Select something"
    }
  }


  render() {

    return (
      <Router>      
        <div className="App">
          <div className="banner">
            <div className="banner-heading">
              <h2 className="hello-world banner-item">hello world!</h2> 
              <div className="name-container">
                <h1 className="im banner-item">i'm</h1>
                <h1 className="name banner-item"> ben tagtow</h1>
              </div>
            </div>
          </div>
          <div className="main-container">
              <div className="nav-bar">
                <Link to="/intro">
                  <h3 onClick={event => this.contentSelector(event)} className="nav-item clickable hover active" value="intro">intro</h3>
                </Link>
                <Link to="/professional">
                  <h3 onClick={event => this.contentSelector(event)} className="nav-item clickable hover" value="professional" >professional</h3>
                </Link>
                <Link to="/life">
                  <h3 onClick={event => this.contentSelector(event)} className="nav-item clickable hover" value="life">life</h3>
                </Link>
                {/* <a href="https://pdfhost.io/v/w0G8598rk_Ben_Tagtow_Resume_Portfolio_2020_pdf.pdf" target="_blank" rel="noopener noreferrer"> <h3 className="resume nav-item clickable hover">resume <img className="link-icon" src={externalLinkIcon}></img> </h3> </a>
                <h3 value="projects" className="nav-item clickable hover" onClick={event => this.updateState(event)}>projects</h3> */}
          
                {/* => projects */}
                {/* summary (including languages), snippets, links */}
                {/* <h3 className="nav-item clickable hover" value="blog">blog</h3> */}
                {/* => blog */}
                {/* medium summary, snippets,and links */}
                {/* <h3 className="nav-item clickable hover" value="life">my life & pitch</h3> */}
                {/* {"Get to know me" like interests and hobbies */}
                {/* <h3 className="nav-item clickable hover" value="history">history</h3> */}
                {/* past work experience, marketing content and links to old blogs */}
              </div>
              <div className="selected-section">
                {/* <ul><h1>THIS IS A FILLER FOR WHERE CONTENT WILL GO</h1>
                  <li>the first list item</li>
                  <li>just another list item</li>
                  <li>this one is really long becaus eit needs to fill abunch of space for testing</li>
                  <li>the final list item</li>
                </ul> */}
                {this.updateContent()}
              </div>
              <div className="social">
                <a href="https://github.com/btagtow/" target="_blank" rel="noopener noreferrer" ><img className="social-icon clickable hover" src={github} alt="Github link"></img> </a>
                <a href="https://www.linkedin.com/in/bentagtow/" target="_blank" rel="noopener noreferrer" ><img className="social-icon clickable hover" src={linkedin} alt="LinkedIn link"></img> </a>
                <a href="https://medium.com/@bentagtow" target="_blank" rel="noopener noreferrer" ><img className="social-icon clickable hover" src={medium} alt="Medium link"></img> </a>
                <a href="mailto:bentagtow@gmail.com" target="_blank" rel="noopener noreferrer" ><img className="social-icon clickable hover" src={mail} alt="Email link"></img> </a>
              </div>



              {/* <img src={image1}></img> */}
          </div>
        </div>
      </Router>
  );
}
}

export default App;
