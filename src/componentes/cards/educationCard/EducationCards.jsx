import React from 'react';
import { 
    Description,
    Span,
    Card,
    Top,
    Image,
    Body,
    Name,
    Curso,
    Degree,
    Date,
} from './EducationCardStyled';



const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={ education.img } />
                <Body>
                    <Name>{ education.school }</Name>
                    <Curso>{ education.curso }</Curso>
                    <Degree>{ education.degree }</Degree>
                    <Date>{ education.date }</Date>
                </Body>
            </Top>
            <Description>
                <Span>{ education.desc }</Span>
            </Description>
        </Card>
    )
}


export default EducationCard