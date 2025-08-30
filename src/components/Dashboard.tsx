import React, { useState, useEffect } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Thermometer, Droplets, Wind, Zap, Wifi, WifiOff } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard: React.FC = () => {
  const [sensorData, setSensorData] = useState({
    temperature: 23.5,
    humidity: 65.2,
    pressure: 1013.25,
    lightLevel: 350
  });

  const [isConnected, setIsConnected] = useState(true);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeLabel = now.toLocaleTimeString();
      
      setSensorData(prev => ({
        temperature: Math.round((prev.temperature + (Math.random() - 0.5) * 2) * 10) / 10,
        humidity: Math.round((prev.humidity + (Math.random() - 0.5) * 5) * 10) / 10,
        pressure: Math.round((prev.pressure + (Math.random() - 0.5) * 0.5) * 100) / 100,
        lightLevel: Math.round(prev.lightLevel + (Math.random() - 0.5) * 50)
      }));

      setChartData(prev => {
        const newLabels = [...(prev.labels || []), timeLabel].slice(-10);
        const newTempData = [...(prev.datasets[0]?.data || []), sensorData.temperature].slice(-10);
        const newHumidityData = [...(prev.datasets[1]?.data || []), sensorData.humidity].slice(-10);

        return {
          labels: newLabels,
          datasets: [
            {
              label: 'Temperature (°C)',
              data: newTempData,
              borderColor: 'rgb(239, 68, 68)',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              tension: 0.4,
            },
            {
              label: 'Humidity (%)',
              data: newHumidityData,
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              tension: 0.4,
            }
          ]
        };
      });

      // Simulate occasional disconnection
      setIsConnected(Math.random() > 0.05);
    }, 2000);

    return () => clearInterval(interval);
  }, [sensorData.temperature, sensorData.humidity]);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Real-time Sensor Data',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  const statusData = {
    labels: ['Online', 'Offline'],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ['#10B981', '#EF4444'],
        borderWidth: 0,
      },
    ],
  };

  const sensors = [
    {
      name: 'Temperature',
      value: sensorData.temperature,
      unit: '°C',
      icon: Thermometer,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      name: 'Humidity',
      value: sensorData.humidity,
      unit: '%',
      icon: Droplets,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Pressure',
      value: sensorData.pressure,
      unit: 'hPa',
      icon: Wind,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Light Level',
      value: sensorData.lightLevel,
      unit: 'lux',
      icon: Zap,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
  ];

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Live Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time monitoring of IoT sensors and devices with interactive data visualization.
          </p>
        </div>

        {/* Connection Status */}
        <div className="mb-8 flex items-center justify-center">
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
            isConnected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {isConnected ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
            <span className="font-medium">
              {isConnected ? 'Connected to IoT Network' : 'Connection Lost'}
            </span>
          </div>
        </div>

        {/* Sensor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sensors.map((sensor) => {
            const Icon = sensor.icon;
            return (
              <div
                key={sensor.name}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${sensor.bgColor}`}>
                    <Icon className={`h-6 w-6 ${sensor.color}`} />
                  </div>
                  <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
                </div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">{sensor.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl font-bold text-gray-900">{sensor.value}</span>
                  <span className="text-sm text-gray-500">{sensor.unit}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Historical Data</h3>
              <div className="h-80">
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Status</h3>
              <div className="h-48">
                <Doughnut 
                  data={statusData} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'bottom',
                      },
                    },
                  }}
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">System Health</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>CPU Usage</span>
                  <span className="font-semibold">23%</span>
                </div>
                <div className="w-full bg-blue-500/30 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-1/4"></div>
                </div>
                <div className="flex justify-between">
                  <span>Memory</span>
                  <span className="font-semibold">1.2GB</span>
                </div>
                <div className="w-full bg-blue-500/30 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-3/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;