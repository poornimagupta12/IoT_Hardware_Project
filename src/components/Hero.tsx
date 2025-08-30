import React from 'react';
import { ArrowRight, Zap, Wifi, Settings, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Bringing Ideas to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                {' '}Life{' '}
              </span>
              with IoT
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Explore cutting-edge IoT projects, real-time data visualization, and comprehensive tutorials. 
              From Arduino prototypes to production-ready NodeMCU solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>View Projects</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Live Dashboard
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <Zap className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Sensors</h3>
              <p className="text-blue-100 text-sm">Real-time environmental monitoring with precision sensors</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <Wifi className="h-8 w-8 text-teal-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Wireless Control</h3>
              <p className="text-blue-100 text-sm">Remote device management through WiFi connectivity</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <Settings className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Automation</h3>
              <p className="text-blue-100 text-sm">Intelligent automation systems for smart homes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <BarChart3 className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-blue-100 text-sm">Advanced data analysis and visualization tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;