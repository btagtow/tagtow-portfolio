import React from 'react'
import github from '../../images/social/github.png'
import externalLink from '../../images/symbols/external-link.png'

export default function ProjectCard({ title, description, frontEndLanguages, backEndLanguages, githubFront, githubBack, url }) {
    const withBack = () => {
        return (
            <div className="language-container project-card">
                <div className="language front">
                        <div className="project-card title">
                            <a href={githubFront} target="_blank" rel="noopener noreferrer" className="project-card-link">
                                <img className="social-icon clickable project-card github" src={github} alt="Github link"></img> 
                                <h5 className="language-header">Front</h5>
                            </a>
                        </div>
                </div>
                <div className="language back">
                        <a href={githubBack} target="_blank" rel="noopener noreferrer" className="project-card-link">
                            <img className="social-icon clickable project-card github" src={github} alt="Github link"></img> 
                            <div className="project-card title project-card-link">
                                <h5 className="language-header">Back</h5>
                            </div>
                        </a>
                </div>
                { url !== "" ? <a target="_blank" href={url} rel="noopener noreferrer"><img className="social-icon clickable project-card external-link" src={externalLink} alt="external link symbol"></img></a> : null }

            </div>

        )
    }
    const withoutBack = () => {
        return (
            <div className="language-container project-card">
                <div className="project-card title">
                    <a href={githubFront} target="_blank" rel="noopener noreferrer" className="project-card-link">
                        <img className="social-icon clickable project-card github" src={github} alt="Github link"></img>
                    </a>
                </div>
                { url !== "" ? <a target="_blank" href={url} rel="noopener noreferrer"><img className="social-icon clickable project-card external-link" src={externalLink} alt="external link symbol"></img></a> : null }

            </div> 
        )
    }

    return (
        <div className="project card">

            <h2 className="title">{title}</h2>
            <h4 className="card-description project-card">{description}</h4>
                {githubBack !== "" ? withBack() : withoutBack()}
        </div>
    )
}
