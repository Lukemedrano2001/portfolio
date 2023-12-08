import React from 'react';
import { VscDebug  } from 'react-icons/vsc';
import { FaBars } from 'react-icons/fa';

import { 
    Nav, 
    NavLink, 
    NavbarContainer, 
    Span, 
    NavLogo, 
    NavItems, 
    GitHubButton, 
    ButtonContainer, 
    MobileIcon, 
    MobileMenu,
    MobileLink 
} from './NavBarStyled';

import { Bio } from '../../data/Constants';
import { useTheme } from 'styled-components';



const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme()
    return (
        <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
            <button style={{ display: "flex", alignItems: "center", marginBottom: '20', cursor: "pointer" }}>
                <VscDebug size="3rem" />
                <Span>Portifolio</ Span>
            </button>
            </ NavLogo>
            <MobileIcon>
            <FaBars onClick={() => {
                setIsOpen(!isOpen)
            }} />
            </ MobileIcon>
            <NavItems>
            <NavLink href="#about">Sobre</ NavLink>
            <NavLink href='#skills'>Skills</ NavLink>
            <NavLink href='#projects'>Projetos</ NavLink>
            <NavLink href='#education'>Educação</ NavLink>
            </ NavItems>
            <ButtonContainer>
            <GitHubButton href={ Bio.github } target="_blank">Perfil no Github</ GitHubButton>
            </ ButtonContainer>
            {
            isOpen &&
            <MobileMenu isOpen={isOpen}>
                <MobileLink href="#about" onClick={() => {
                setIsOpen(!isOpen)
                }}>Sobre</MobileLink>
                <MobileLink href='#skills' onClick={() => {
                setIsOpen(!isOpen)
                }}>Skills</ MobileLink>
                <MobileLink href='#projects' onClick={() => {
                setIsOpen(!isOpen)
                }}>Projetos</MobileLink>
                <MobileLink href='#education' onClick={() => {
                setIsOpen(!isOpen)
                }}>Educação</ MobileLink>
                <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={ Bio.github } target="_blank">Github Profile</ GitHubButton>
            </ MobileMenu>
            }
        </ NavbarContainer>
        </ Nav>
    )
}


export default Navbar