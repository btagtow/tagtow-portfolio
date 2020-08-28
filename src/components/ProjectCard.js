import React from 'react'

export default function ProjectCard({ title, description, frontEndLanguages, backEndLanguages, github, url }) {
    return (
        <div className="project-card">
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h5>Front-End: {frontEndLanguages}</h5>
            {backEndLanguages !== "" ? <h5>Back: ${backEndLanguages} </h5> : null}
        </div>
    )
}
