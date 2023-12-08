import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Theme';
import { BrowserRouter as Router } from 'react-router-dom';


import './App.css';
import { Body, Wrapper } from './AppStyled.js';

import Navbar from "./componentes/navBar/NavBar";
import Footer from "./componentes/footer/Footer";

import HeroSection from "./componentes/heroSection/HeroSection";
import Skills from "./componentes/skills/SkillsSection";
import Projects from "./componentes/projects/ProjectsSection";
import Education from "./componentes/education/EducationSection";
import Contact from "./componentes/contact/ContactSection";



function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
          </ Wrapper>
          <Projects openModal={ openModal } setOpenModal={ setOpenModal } />
          <Wrapper>
            <Education />
            <Contact />
          </ Wrapper>
          <Footer />
        </ Body>
      </ Router>
    </ ThemeProvider>
  );
}


export default App;