import React from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-white border-r border-gray-200 p-8 overflow-y-auto shadow-sm">
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg border-4 border-white">
          <img 
            src="/67415065.jpeg" 
            alt="Hindol Roy Choudhury"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">Hindol Roy Choudhury</h1>
        <p className="text-lg text-blue-600 font-medium text-center mb-1">MLOps Engineer</p>
        <p className="text-sm text-gray-600 text-center">Building ML systems that matter</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors">
            <MapPin size={18} className="text-gray-500" />
            <span className="text-sm">Tripura, India</span>
          </div>
          
          <a 
            href="mailto:roychoudhuryhindol@gmail.com"
            className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <Mail size={18} className="text-gray-500 group-hover:text-blue-600" />
            <span className="text-sm group-hover:underline">roychoudhuryhindol@gmail.com</span>
          </a>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Connect</h3>
          <div className="space-y-3">
            <a 
              href="https://github.com/Hindolch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <Github size={20} className="text-gray-500 group-hover:text-blue-600" />
              <span className="group-hover:underline">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/hindol-choudhury/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <Linkedin size={20} className="text-gray-500 group-hover:text-blue-600" />
              <span className="group-hover:underline">LinkedIn</span>
            </a>

            <a 
              href="https://x.com/Hindollllll" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <Twitter size={20} className="text-gray-500 group-hover:text-blue-600" />
              <span className="group-hover:underline">Twitter</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="text-xs text-gray-500 leading-relaxed">
            <p className="mb-2">Currently exploring GNNs and reimplementing SOTA models</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;