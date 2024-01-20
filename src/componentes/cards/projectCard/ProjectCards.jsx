import React from 'react';

import {
    Button,
    Card,
    Image,
    Tags,
    Tag,
    Details,
    Title,
    Date,
    Description,
} from './ProjectCardStyled';



const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
            <Image src={project.image} />
            <Tags>
            {project.tags?.map((tag, index) => (
                <Tag key={project.id + '-tag-' + index}>{tag}</Tag>
            ))}
            </ Tags>
            <Details>
            <Title>{project.title}</ Title>
            <Date>{project.date}</ Date>
            <Description>{project.description}</ Description>
            </ Details>
            <Button>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
                Github
            </a>
            </ Button>
        </ Card>
    );
};


export default ProjectCards;
