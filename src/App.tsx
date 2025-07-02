import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <Sidebar />
        <Navbar />
        <MainContent />
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        <MobileNavbar />
        <div className="pt-20">
          <MainContent isMobile={true} />
        </div>
      </div>
    </div>
  );
}

export default App;