import React, { useState } from 'react';
import { Play, Clock, User, ChevronRight, Download, Code } from 'lucide-react';

const TutorialsSection: React.FC = () => {
  const [selectedTutorial, setSelectedTutorial] = useState<number | null>(null);

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with Arduino & Sensors',
      description: 'Complete beginner guide to connecting and reading sensor data with Arduino.',
      duration: '45 min',
      difficulty: 'Beginner',
      image: 'https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg?auto=compress&cs=tinysrgb&w=400',
      steps: [
        'Setting up Arduino IDE',
        'Understanding sensor connections',
        'Writing your first sensor code',
        'Serial communication basics',
        'Troubleshooting common issues'
      ],
      resources: ['Arduino Uno starter kit', 'DHT22 sensor', 'Breadboard', 'Jumper wires']
    },
    {
      id: 2,
      title: 'WiFi Connectivity with ESP8266',
      description: 'Learn to connect your projects to the internet using ESP8266 WiFi module.',
      duration: '60 min',
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
      steps: [
        'ESP8266 module overview',
        'Setting up WiFi connection',
        'Creating a web server',
        'Handling HTTP requests',
        'Building a simple web interface'
      ],
      resources: ['ESP8266 module', 'Arduino IDE', 'WiFi network', 'Basic HTML knowledge']
    },
    {
      id: 3,
      title: 'MQTT Communication Protocol',
      description: 'Implement efficient IoT communication using MQTT protocol for real-time data exchange.',
      duration: '90 min',
      difficulty: 'Advanced',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
      steps: [
        'Understanding MQTT protocol',
        'Setting up MQTT broker',
        'Publishing sensor data',
        'Subscribing to topics',
        'Building dashboard integration'
      ],
      resources: ['NodeMCU board', 'MQTT broker access', 'Sensors', 'Network connection']
    }
  ];

  return (
    <section id="tutorials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Step-by-Step Tutorials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn IoT development through comprehensive, hands-on tutorials designed for every skill level.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tutorial List */}
          <div className="lg:col-span-1 space-y-6">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                onClick={() => setSelectedTutorial(tutorial.id)}
                className={`bg-white rounded-xl border-2 p-6 cursor-pointer transition-all ${
                  selectedTutorial === tutorial.id
                    ? 'border-blue-500 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tutorial.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>

          {/* Tutorial Content */}
          <div className="lg:col-span-2">
            {selectedTutorial ? (
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="relative">
                  <img
                    src={tutorials.find(t => t.id === selectedTutorial)?.image}
                    alt="Tutorial"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button 
                      onClick={() => {
                        alert(`Playing tutorial video: ${tutorials.find(t => t.id === selectedTutorial)?.title}`);
                        // In a real app, this would start video playback
                      }}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all"
                    >
                      <Play className="h-8 w-8" />
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {tutorials.find(t => t.id === selectedTutorial)?.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Tutorial Steps:</h4>
                    <div className="space-y-3">
                      {tutorials.find(t => t.id === selectedTutorial)?.steps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Required Components:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tutorials.find(t => t.id === selectedTutorial)?.resources.map((resource, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="text-sm">{resource}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => {
                        alert(`Starting tutorial: ${tutorials.find(t => t.id === selectedTutorial)?.title}`);
                        // In a real app, this would navigate to the tutorial page
                      }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <Play className="h-4 w-4" />
                      <span>Start Tutorial</span>
                    </button>
                    <button 
                      onClick={() => window.open(`https://github.com/iotlab/tutorials/${tutorials.find(t => t.id === selectedTutorial)?.title.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                      className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <Code className="h-4 w-4" />
                      <span>View Code</span>
                    </button>
                    <button 
                      onClick={() => {
                        const tutorial = tutorials.find(t => t.id === selectedTutorial);
                        const link = document.createElement('a');
                        link.href = `data:text/plain;charset=utf-8,Tutorial: ${tutorial?.title}\n\nSteps:\n${tutorial?.steps.join('\n')}\n\nResources:\n${tutorial?.resources.join('\n')}`;
                        link.download = `${tutorial?.title.toLowerCase().replace(/\s+/g, '-')}-tutorial.txt`;
                        link.click();
                      }}
                      className="border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a Tutorial</h3>
                <p className="text-gray-600">Choose a tutorial from the list to view detailed instructions and resources.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;