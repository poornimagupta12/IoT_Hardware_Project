import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import Dashboard from './components/Dashboard';
import TutorialsSection from './components/TutorialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <ProjectsSection />;
      case 'dashboard':
        return <Dashboard />;
      case 'tutorials':
        return <TutorialsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <Hero />
            <ProjectsSection />
            <Dashboard />
            <TutorialsSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;