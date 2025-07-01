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

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <MobileNavbar />
        <div className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Welcome Section */}
            <section className="mb-16">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  👋 Hiii! I'm <span className="text-blue-600">Hindol</span>
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A passionate <strong>MLOps Engineer</strong> building robust, modular systems that bridge cutting-edge research and real-world impact—especially in low-resource and production-grade environments.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Passionate about bridging research and production, I believe machine learning should solve <em>real problems that matter</em>. From self-healing model servers to automating LLM fine-tuning on Reddit data, I combine engineering reliability with meaningful ML.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-blue-900 mb-3">🚀 Currently focused on:</h3>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-center space-x-2">
                      <span>🔭</span>
                      <span>Reimplementing state-of-the-art ML models from scratch</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span>🔬</span>
                      <span>Exploring Graph Neural Networks and structured data learning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Mobile content continues with key sections */}
            <div className="space-y-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-4">For the complete portfolio experience</p>
                <p className="text-sm text-gray-500">Please view on desktop or tablet for the full layout with detailed sections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;