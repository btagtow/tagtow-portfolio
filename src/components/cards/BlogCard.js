import React from 'react'
import externalLinkIcon from '../../images/symbols/external-link.png'

export default function ProjectCard({ title, teaser, date, link }) {
    return (
        <div className="card" href={link}>
            <a href={`${link}`} target="_blank" rel="noopener noreferrer" >
                <h2 className="title blog">{title}</h2>
                <h4 className="card-description blogs">{teaser}</h4>
                <div className="card-footer">
                    {date}
                    <img className="link-icon" src={externalLinkIcon} alt="external link icon"></img>
                </div>
            </a>
            
        </div>
    )
}
