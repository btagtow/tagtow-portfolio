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
          return ""
    }
  }

  bannerClicker = () => {
    for (let el of document.getElementsByClassName("nav-item")){
      el.getAttribute("value").includes("intro") ? 
        el.className = "nav-item clickable hover active" : 
      el.className = "nav-item clickable hover" 
    }
    return this.setState({display: "intro"})
  }
  render() {

    return (
      <Router>      
        <div className="App">
          <div className="banner">
            <Link to="/intro">
              <div value="intro" className="banner-heading" onClick={() => this.bannerClicker()}>
                <h2 className="hello-world banner-item">hello world!</h2> 
                <div className="name-container">
                  <h1 className="im banner-item">i'm</h1>
                  <h1 className="name banner-item"> ben tagtow</h1>
                </div>
              </div>
            </Link>
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
              </div>
              <div className="selected-section">
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
