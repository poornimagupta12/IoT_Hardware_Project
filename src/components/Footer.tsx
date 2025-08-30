import React from 'react';
import { Cpu, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Cpu className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">IoTLab</span>
            </div>
            <p className="text-gray-400 mb-4">
              Passionate about creating innovative IoT solutions that bridge the physical and digital worlds.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open('https://github.com/iotlab', '_blank')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </button>
              <button 
                onClick={() => window.open('https://linkedin.com/in/iotlab', '_blank')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:hello@iothub.dev'}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">About</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">Projects</button></li>
              <li><button onClick={() => window.open('https://blog.iotlab.dev', '_blank')} className="text-gray-400 hover:text-white transition-colors">Blog</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2">
              <li><button onClick={() => window.open('https://arduino.cc', '_blank')} className="text-gray-400 hover:text-white transition-colors">Arduino</button></li>
              <li><button onClick={() => window.open('https://espressif.com', '_blank')} className="text-gray-400 hover:text-white transition-colors">ESP8266/ESP32</button></li>
              <li><button onClick={() => window.open('https://raspberrypi.org', '_blank')} className="text-gray-400 hover:text-white transition-colors">Raspberry Pi</button></li>
              <li><button onClick={() => window.open('https://mqtt.org', '_blank')} className="text-gray-400 hover:text-white transition-colors">MQTT</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><button onClick={() => document.getElementById('tutorials')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">Tutorials</button></li>
              <li><button onClick={() => window.open('https://github.com/iotlab/examples', '_blank')} className="text-gray-400 hover:text-white transition-colors">Code Examples</button></li>
              <li><button onClick={() => window.open('https://docs.iotlab.dev', '_blank')} className="text-gray-400 hover:text-white transition-colors">Documentation</button></li>
              <li><button onClick={() => window.open('https://community.iotlab.dev', '_blank')} className="text-gray-400 hover:text-white transition-colors">Community</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for the IoT community</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 IoTLab. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;