import React, { useState } from 'react';
import { Menu, X, FileText, Mail, MapPin, Github, Linkedin, Twitter, Folder, User, Briefcase, GraduationCap, Brain } from 'lucide-react';

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src="/67415065.jpeg" 
                alt="Hindol Roy Choudhury"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-sm">Hindol Roy Choudhury</h1>
              <p className="text-xs text-blue-600">MLOps Engineer</p>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection('home')}
                  className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-blue-600 flex items-center space-x-2"
                >
                  <User size={18} />
                  <span>About</span>
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-blue-600 flex items-center space-x-2"
                >
                  <Folder size={18} />
                  <span>Projects</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-blue-600 flex items-center space-x-2"
                >
                  <Mail size={18} />
                  <span>Contact</span>
                </button>
              </div>

              <a 
                href="https://drive.google.com/file/d/1u3DI2AntAGpIdzJyrtGs1eVQquXImjh2/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText size={20} />
                <span className="font-medium">Download CV</span>
              </a>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin size={18} />
                    <span className="text-sm">Tripura, India</span>
                  </div>
                  
                  <a 
                    href="mailto:roychoudhuryhindol@gmail.com"
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Mail size={18} />
                    <span className="text-sm break-all">roychoudhuryhindol@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Connect</h3>
                <div className="space-y-3">
                  <a 
                    href="https://github.com/Hindolch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/hindol-choudhury/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>

                  <a 
                    href="https://x.com/Hindollllll" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Twitter size={20} />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;