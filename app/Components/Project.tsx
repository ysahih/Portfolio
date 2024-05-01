
import React from 'react';
import { Section } from './ui/section';
import { RESUME_DATA } from '../data/resume-data';
import { ProjectCard } from './project-card';

const Project = () => {
  return (

    <div className='projects'>
       <div className="sectionHeader">
         <h1>PROJECTS</h1>
         <hr />
        </div>
        <Section className="container print-force-new-page scroll-mb-16">
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>  
    </div>
  );
}

export default Project;