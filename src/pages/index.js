import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection/';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/> 
      <HomeSection /> 
      <AboutSection /> 
      <ProjectSection />
      <ContactSection />
      <Footer />         
    </>
  )
};

export default HomePage;
