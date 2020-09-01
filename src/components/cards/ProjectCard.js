import React from 'react'
import github from '../../images/social/github.png'
import externalLink from '../../images/symbols/external-link.png'

export default function ProjectCard({ title, description, frontEndLanguages, backEndLanguages, githubFront, githubBack, url }) {
    return (
        <div className="project card">

            <h2 className="title">{title}</h2>
            <h4 className="card-description project-card">{description}</h4>
            <div className="language-container project-card">
                <div className="language front">
                    <div className="project-card title">
                        <h5 className="title">Front-End</h5>
                        <a href={githubFront} target="_blank" rel="noopener noreferrer"><img className="social-icon clickable project-card github" src={github} alt="Github link"></img> </a>
                    </div>
                    <div className="language-id">
                        <h5>{frontEndLanguages}</h5>
                    </div>
                </div>
                <div className="language back">
                    <div className="project-card title">
                        <h5 className="title">Back-End</h5>
                        <a href={githubBack} target="_blank" rel="noopener noreferrer"><img className="social-icon clickable project-card github" src={github} alt="Github link"></img> </a>
                    </div>
                    <div className="language-id">
                        <h5>{backEndLanguages}</h5>
                    </div>
                </div>
            </div>
            { url !== "" ? <a target="_blank" href={url}><img className="social-icon clickable project-card external-link" src={externalLink} alt="external link symbol"></img></a> : null }
        </div>
    )
}
