import React from 'react';
import { PreTitle, MainTitle, SubTitle, Rule } from '../AppElements';
import { ProjectContainer, ProjectCards, ProjectCard, ProjectImg, ProjectTitle, ProjectDescription, ProjectLinkText, ProjectLink  } from './ProjectElements';
import { projects } from './projectList';

const Projects = () => {
    return (
        <>
          <ProjectContainer id="projects">
              <PreTitle>Projects</PreTitle>
              <MainTitle>Recent Projects</MainTitle>
              <SubTitle>Here are some of the projects I have worked on recently</SubTitle>
              <Rule></Rule>
              <ProjectCards>
                  {projects.map(project => {
                      return (
                        <ProjectCard key={project.title}>
                        <ProjectImg src={project.img}/>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDescription>{project.description}</ProjectDescription>
                        <ProjectLink href={project.link}>
                            <ProjectLinkText>Visit Site</ProjectLinkText>
                        </ProjectLink>
                        </ProjectCard>
                      )
                  })}
              </ProjectCards>
            
          </ProjectContainer>    
        </>
    )
}

export default Projects;
