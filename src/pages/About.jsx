import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutHero from './Aboutpage/AboutHero';
import PharmacyServices from './Aboutpage/PharmacyServices';
import ResearchSection from './Aboutpage/ResearchSection';
import SpansulesPage from './Aboutpage/SpansulesPage';
import TrustSection from './Aboutpage/TrustSection';
import CallToAction from './Aboutpage/CallToAction';
import Footer from '../components/Footer';
import ExpertisePage from './Aboutpage/ExpertisePage';
import RTFPelletsPage from './Aboutpage/RTFPelletsPage';
import OrganizationalChart from './Aboutpage/OrganizationalChart';

const About = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('main'); // 'main', 'expertise', or 'rtf-pellets'

  useEffect(() => {
    // Check for section query parameter in URL
    const params = new URLSearchParams(location.search);
    const section = params.get('section');

    // Check for hash parameters
    if (section === 'expertise' || location.hash === '#expertise') {
      setActiveSection('expertise');
    } else if (section === 'rtf-pellets' || location.hash === '#rtf-pellets') {
      setActiveSection('rtf-pellets');
    } else {
      setActiveSection('main');
    }

    // Scroll to section if specified
    if (section || location.hash) {
      const sectionId = section || location.hash.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // Function to handle navigation between sections
  const navigateToSection = (section) => {
    setActiveSection(section);
    // Update URL without page reload
    const url = section === 'main' ? '/about' : `/about?section=${section}`;
    window.history.pushState({}, '', url);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white shadow">
        {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ul className="flex space-x-6">
            <li>
              <button
                className={`font-medium ${
                  activeSection === 'main' ? 'text-green-600' : 'text-gray-600'
                } hover:text-green-500 transition duration-300`}
                onClick={() => navigateToSection('main')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`font-medium ${
                  activeSection === 'expertise' ? 'text-green-600' : 'text-gray-600'
                } hover:text-green-500 transition duration-300`}
                onClick={() => navigateToSection('expertise')}
              >
                Expertise
              </button>
            </li>
            <li>
              <button
                className={`font-medium ${
                  activeSection === 'rtf-pellets' ? 'text-green-600' : 'text-gray-600'
                } hover:text-green-500 transition duration-300`}
                onClick={() => navigateToSection('rtf-pellets')}
              >
                RTF Pellets
              </button>
            </li>
          </ul>
        </div> */}
      </nav>

      {activeSection === 'main' ? (
        // Main About Page Content
        <div id="main">
          <AboutHero />
          <PharmacyServices />
          <ResearchSection />
          <SpansulesPage />
          <OrganizationalChart />
          <TrustSection />
          <CallToAction />
          <Footer />
        </div>
      ) : activeSection === 'expertise' ? (
        // Expertise Page Content
        <div id="expertise">
          <ExpertisePage />
          <Footer />
        </div>
      ) : (
        // RTF Pellets Page Content
        <div id="rtf-pellets">
          <RTFPelletsPage />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default About;