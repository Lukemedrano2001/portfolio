import React from 'react';
import HeroBgAnimation from '../heroBgAnimation/HeroBgAnimation';
import Typewriter from 'typewriter-effect';


import { 
    HeroContainer, 
    HeroBg, 
    HeroLeftContainer, 
    Img, 
    HeroRightContainer, 
    HeroInnerContainer, 
    TextLoop, 
    Title, 
    Span, 
    SubTitle,
    ResumeButton 
} from './HeroStyled';

import HeroImg from '../../images/HeroImage.svg'
import { Bio } from '../../data/Constants';



const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </ HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Olá, me chamo <br/> { Bio.name }</ Title>
                        <TextLoop>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </ Span>
                        </ TextLoop>
                        <SubTitle>{ Bio.description }</ SubTitle>
                        <ResumeButton href={ Bio.resume } target='display'>Baixar Currículo</ ResumeButton>
                    </ HeroLeftContainer>
                    <HeroRightContainer id="Right">
                        <Img src={ HeroImg } alt="hero-image" />
                    </ HeroRightContainer>
                </ HeroInnerContainer>
            </ HeroContainer>
        </div>
    )
}

export default HeroSection