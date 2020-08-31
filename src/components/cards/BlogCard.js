import React from 'react'

export default function ProjectCard({ title, teaser, date }) {
    return (
        <div className="card">

            <h2 className="title blog">{title}</h2>
            <h4>{teaser}</h4>
            <p>{date}</p>
            
        </div>
    )
}
