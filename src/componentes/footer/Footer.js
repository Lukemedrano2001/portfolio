import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { DiGithubBadge } from "react-icons/di";

import { Bio } from '../../data/Constants';
import { 
    FooterContainer,
    FooterWrapper,
    Logo,
    Nav,
    NavLink,
    SocialMediaIcons,
    SocialMediaIcon,
    Copyright
} from './FooterStyled';




function Footer() {
    return (
        <FooterContainer>
        <FooterWrapper>
            <Logo>Guilherme Medrano</ Logo>
            <Nav>
            <NavLink href="#about">Sobre</ NavLink>
            <NavLink href="#skills">Skills</ NavLink>
            <NavLink href="#projects">Projetos</ NavLink>
            <NavLink href="#education">Educação</ NavLink>
            </ Nav>
            <SocialMediaIcons>
                <SocialMediaIcon href={ Bio.linkedin } target="display"><LinkedInIcon /></ SocialMediaIcon>
                <SocialMediaIcon href={ Bio.github } target="display"><DiGithubBadge /></ SocialMediaIcon>
            </ SocialMediaIcons>
            <Copyright>
                &copy; 2023 Guilherme Medrano. All rights reserved.
            </ Copyright>
        </ FooterWrapper>
        </ FooterContainer>
    );
}

export default Footer;