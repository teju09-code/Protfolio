import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ServicesSection } from './sections/ServicesSection';
import { ContactSection } from './sections/ContactSection';
import './styles/animations.css';

function App() {
  useEffect(() => {
    document.title = "Tejasri Gottipati - Full-Stack Developer & ML Enthusiast";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;