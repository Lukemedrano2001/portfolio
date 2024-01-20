import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyled';
import ProjectCard from '../cards/projectCard/ProjectCards';
import { projects } from '../../data/Constants';



const ProjectsSection = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
        <Wrapper>
            <Title>Projetos</Title>
            <Desc>
            Veja os projetos que eu já desenvolvi e que estão em desenvolvimento.
            </Desc>
            <CardContainer>
            {toggle === 'all' &&
                projects.map((project) => (
                <ProjectCard key={project.id} project={project} setOpenModal={setOpenModal} />
                ))}
            {typeof toggle === 'string' &&
                projects
                .filter((item) => item.category === toggle)
                .map((project) => (
                    <ProjectCard key={project.id} project={project} setOpenModal={setOpenModal} />
                ))}
            </CardContainer>
        </Wrapper>
        </Container>
    )
}


export default ProjectsSection