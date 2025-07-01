import React, { useState } from 'react';
import { FileText, Folder, Mail } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-80 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-10">
      <div className="px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-sm font-medium transition-colors flex items-center space-x-1 ${
                activeSection === 'projects' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Folder size={16} />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium transition-colors flex items-center space-x-1 ${
                activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Mail size={16} />
              <span>Contact</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://drive.google.com/file/d/1u3DI2AntAGpIdzJyrtGs1eVQquXImjh2/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
            >
              <FileText size={16} />
              <span className="font-medium">CV</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;