import React, { useState } from 'react';
import { Github, ExternalLink, Thermometer, Wifi, Camera, Lightbulb } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Smart Weather Station',
      description: 'Arduino-based weather monitoring system with WiFi connectivity and real-time data logging.',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Arduino',
      technologies: ['Arduino', 'ESP8266', 'DHT22', 'OLED'],
      status: 'Completed',
      icon: Thermometer,
      features: ['Real-time weather data', 'Web dashboard', 'Historical data storage']
    },
    {
      id: 2,
      title: 'IoT Home Security',
      description: 'NodeMCU-powered security system with motion detection, camera integration, and mobile alerts.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'NodeMCU',
      technologies: ['NodeMCU', 'PIR Sensor', 'ESP32-CAM', 'MQTT'],
      status: 'In Progress',
      icon: Camera,
      features: ['Motion detection', 'Live streaming', 'Push notifications']
    },
    {
      id: 3,
      title: 'Smart Irrigation System',
      description: 'Automated plant watering system using soil moisture sensors and weather data integration.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Arduino',
      technologies: ['Arduino', 'Soil Sensor', 'Relay Module', 'WiFi'],
      status: 'Completed',
      icon: Wifi,
      features: ['Automatic watering', 'Weather integration', 'Mobile control']
    },
    {
      id: 4,
      title: 'Smart LED Controller',
      description: 'WiFi-controlled RGB LED strip system with music synchronization and custom patterns.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'ESP32',
      technologies: ['ESP32', 'WS2812B', 'FastLED', 'Web Server'],
      status: 'Completed',
      icon: Lightbulb,
      features: ['Music sync', 'Custom patterns', 'Voice control']
    }
  ];

  const filters = ['all', 'Arduino', 'NodeMCU', 'ESP32'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my collection of IoT and hardware projects, from simple sensors to complex automation systems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="h-8 w-8 text-white bg-black/30 backdrop-blur-sm rounded-lg p-1.5" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <button 
                      onClick={() => window.open(`https://github.com/iotlab/${project.title.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-1"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </button>
                    <button 
                      onClick={() => window.open(`https://demo.iotlab.dev/${project.title.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                      className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;