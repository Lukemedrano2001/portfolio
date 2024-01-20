import React from 'react'

import { 
    Container, 
    Wrapper, 
    Title, 
    Desc, 
    SkillsContainer, 
    Skill, SkillTitle, 
    SkillList, 
    SkillItem, 
    SkillImage 
} from './SkillsStyled'

import { skills } from '../../data/Constants'



const SkillsSection = () => {
    return (
        <Container id="skills">
        <Wrapper>
            <Title>Skills</ Title>
            <Desc>
                Aqui estão algumas das minhas habilidades nas quais tenho trabalhado durante esse tempo.
            </ Desc>
            <SkillsContainer>
            {skills.map((skill) => (
                <Skill key={ skill.id }>
                <SkillTitle>{ skill.title }</ SkillTitle>
                <SkillList>
                    {skill.skills.map((item) => (
                    <SkillItem key={ item.id }>
                        <SkillImage src={ item.image }/>
                    </SkillItem>
                    ))}
                </ SkillList>
                </ Skill>
            ))}
            </ SkillsContainer>
        </ Wrapper>
        </ Container>
    )
}

export default SkillsSection