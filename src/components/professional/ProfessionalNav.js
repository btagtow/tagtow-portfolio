import React, { Component } from 'react'
import Projects from '../../data/projects-list'
import ProjectCard from '../cards/ProjectCard'
import Blogs from '../../data/blogs-list'
import BlogCard from '../cards/BlogCard'
import externalLinkIcon from '../../images/external-link.png'


export default class ProfessionalNav extends Component {
    state = {display: ""}

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
                    let { title, description, frontEndLanguages, backEndLanguages, github, url } = proj
                    return  <ProjectCard 
                            key={title}
                            title={title} 
                            description={description}
                            frontEndLanguages={frontEndLanguages}
                            backEndLanguages={backEndLanguages}
                            github={github}
                            url={url}
                            >
                            </ProjectCard>
                })
            case "pitch" : 
                return (
                    <p>

                        Hi! Thanks for visiting my website. I'm Ben Tagtow. 
                        I'm a web developer with a diverse background that includes marketing, communications, 
                        project management, and leadership. I am dedicated to my role in cultivating positive 
                        environments that embrace challenge and change while fostering growth and development.  
                        I am known by colleagues and peers for my forward-thinking, 
                        determined, and optimistic mindset.


                    </p>
                )
            case "blog" : 
                return Blogs.reverse().map(blog => {
                    let { title, teaser, date } = blog
                    return <BlogCard 
                        key={title}
                        title={title}
                        teaser={teaser}
                        date={date}
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
                    <h3 value="pitch" className="content-button clickable hover" onClick={event => this.contentSelector(event)}>elevator pitch</h3>
                    <a value="resume" href="https://pdfhost.io/v/w0G8598rk_Ben_Tagtow_Resume_Portfolio_2020_pdf.pdf" target="_blank" rel="noopener noreferrer"> <h3 className="content-button clickable hover">resume <img className="link-icon" src={externalLinkIcon} alt="external link icon"></img> </h3> </a>
                    <h3 value="projects" className="content-button clickable hover" onClick={event => this.contentSelector(event)}>projects</h3>
                    <h3 value="blog" className="content-button clickable hover" onClick={event => this.contentSelector(event)}>blog</h3>
                </div>
                <div className="selected-content">
                    {this.content()}
                </div>
            </div>
        )
    }
}
