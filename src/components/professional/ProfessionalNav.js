import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

import Projects from '../../data/projects-list'
import ProjectCard from '../cards/ProjectCard'
import Blogs from '../../data/blogs-list'
import BlogCard from '../cards/BlogCard'
import externalLinkIcon from '../../images/symbols/external-link.png'


export default class ProfessionalNav extends Component {
    state = {display: "projects"}

    updateState = event => {
        return this.setState({display: event.target.getAttribute("value")})
    }
    contentSelector = (event) => {
        this.updateState(event)
    
        for (let el of document.getElementsByClassName("active-2")){
          el.className = "content-button clickable hover"
        }
        if (!event.target.className.includes("active-2")){
          return event.target.className = event.target.className + " active-2"
        } 
      }

    content = () => {
        switch (this.state.display) {
            case "resume" : 
                return null
            case "projects" : 
                return Projects.map(proj => {
                    console.log(proj)
                    let { title, description, frontEndLanguages, backEndLanguages, githubFront, githubBack, url } = proj
                    return  <ProjectCard 
                            key={title}
                            title={title} 
                            description={description}
                            frontEndLanguages={frontEndLanguages}
                            backEndLanguages={backEndLanguages}
                            githubFront={githubFront}
                            githubBack={githubBack}
                            url={url}
                            >
                            </ProjectCard>
                })
            case "blog" : 
                return Blogs.reverse().map(blog => {
                    let { title, teaser, date, link } = blog
                    return <BlogCard 
                        key={title}
                        title={title}
                        teaser={teaser}
                        date={date}
                        link={link}
                    />
                })
            default : 
                return null

        }
    }
    generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }
    render() {
        return (
            <div className="content-section">
                <div className="content-nav">
                    {/* <h3 value="pitch" className="content-button clickable hover" onClick={event => this.contentSelector(event)}>elevator pitch</h3> */}
                    <Link to="/professional/projects">
                        <h3 value="projects" className="content-button clickable hover active-2" onClick={event => this.contentSelector(event)}>projects</h3>
                    </Link>
                    <Link to="/professional/blogs">
                        <h3 value="blog" className="content-button clickable hover" onClick={event => this.contentSelector(event)}>blog</h3>
                    </Link>
                    <a value="resume" href="https://pdfhost.io/v/w0G8598rk_Ben_Tagtow_Resume_Portfolio_2020_pdf.pdf" target="_blank" rel="noopener noreferrer"> <h3 className="content-button clickable hover">resume <img className="link-icon" src={externalLinkIcon} alt="external link icon"></img> </h3> </a>
                </div>
                <div className="selected-content">
                    {this.content()}
                </div>
            </div>
        )
    }
}
