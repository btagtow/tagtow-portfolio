import React from 'react'
import Projects from '../../data/projects-list'
import ProjectCard from '../cards/ProjectCard'
import Blogs from '../../data/blogs-list'
import BlogCard from '../cards/BlogCard'

export default function ProfessionalContent( { display }) {
    const createBlogCards = (blog) => {
        let { title, teaser, date, link } = blog
        return (
            <BlogCard 
                key={title}
                title={title}
                teaser={teaser}
                date={date}
                link={link}
            />
        )
    }
    
    const createProjectCards = (project) => {
            let { title, description, frontEndLanguages, backEndLanguages, githubFront, githubBack, url } = project
            return (
                <ProjectCard 
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
            )
    }
    const content = () => {
        switch (display) {
            case "resume" : 
                return null
            case "projects" :
                let oneDay = Projects.filter(p => p.inADay === true)
                let fullStack = Projects.filter(p => p.inADay === false)
                return (
                    <div className="project-card-container">
                        <div className="full-stack-project">
                            <div className="projects-section-header"> 
                                <h1>Full Stack</h1>
                            </div>
                            {fullStack.map(createProjectCards)}
                        </div>
                        <div className="in-a-day-project">
                            <div className="projects-section-header"> 
                                <h1>"Apps in a day"</h1>
                                {/* <h3 className="info-button">i</h3> */}
                            </div>
                            {oneDay.map(createProjectCards)}
                        </div>
                    </div>
                    )
            case "blog" : 
                return <div className="selected-content">{Blogs.map(blog => createBlogCards(blog))}</div>
            default : 
                return null

        }
    }
    return (
        <div>
            {content()}
        </div>
    )
}
