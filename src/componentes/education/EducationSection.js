import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';


import {
    Container,
    Wrapper,
    Title,
    Desc,
    TimelineSection
} from './EducationStyled';

import { education } from '../../data/Constants';
import EducationCard from '../cards/educationCard/EducationCards';



const EducationSection = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Educação</ Title>
                <Desc>
                    Minha educação tem sido uma jornada de autodescoberta e crescimento. Meus detalhes educacionais são os seguintes.
                </ Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((educationItem) => (
                            <TimelineItem key={ educationItem.id }>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={ educationItem } />
                                </ TimelineContent>
                            </ TimelineItem>
                        ))}
                    </ Timeline>
                </ TimelineSection>
            </ Wrapper>
        </ Container>
    )
}

export default EducationSection