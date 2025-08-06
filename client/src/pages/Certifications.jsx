import React from 'react';
import Sidebar from '../components/Sidebar';
import { Medal, Crown, Gem, Award, Star } from 'lucide-react';

const Certifications = () => {
  // TODO: Connect to backend for actual certification data and progress
  const certifications = [
    // DSA Mastery Certifications
    {
      name: 'Bronze DSA',
      requirement: '25 DSA Problems',
      status: 'Completed',
      icon: Medal,
      color: 'bg-orange-500',
      completed: true,
      category: 'DSA Mastery'
    },
    {
      name: 'Silver DSA',
      requirement: '50 DSA Problems',
      status: 'Completed',
      icon: Medal,
      color: 'bg-gray-500',
      completed: true,
      category: 'DSA Mastery'
    },
    {
      name: 'Gold DSA',
      requirement: '100 DSA Problems',
      status: 'In Progress',
      icon: Medal,
      color: 'bg-yellow-500',
      completed: false,
      category: 'DSA Mastery'
    },
    {
      name: 'Platinum DSA',
      requirement: '150 DSA Problems',
      status: 'Locked',
      icon: Medal,
      color: 'bg-gray-400',
      completed: false,
      category: 'DSA Mastery'
    },
    {
      name: 'Diamond DSA',
      requirement: '200 DSA Problems',
      status: 'Locked',
      icon: Gem,
      color: 'bg-blue-400',
      completed: false,
      category: 'DSA Mastery'
    },
    {
      name: 'DSA Conqueror',
      requirement: '250+ DSA Problems',
      status: 'Locked',
      icon: Crown,
      color: 'bg-purple-500',
      completed: false,
      category: 'DSA Mastery'
    },
    // Soft Skills Mastery Certifications
    {
      name: 'Bronze Soft Skills',
      requirement: '5 Communication Exercises',
      status: 'Completed',
      icon: Star,
      color: 'bg-orange-500',
      completed: true,
      category: 'Soft Skills Mastery'
    },
    {
      name: 'Silver Soft Skills',
      requirement: '10 Presentation Skills',
      status: 'In Progress',
      icon: Star,
      color: 'bg-gray-500',
      completed: false,
      category: 'Soft Skills Mastery'
    },
    {
      name: 'Gold Soft Skills',
      requirement: '15 Leadership Activities',
      status: 'Locked',
      icon: Star,
      color: 'bg-yellow-500',
      completed: false,
      category: 'Soft Skills Mastery'
    },
    {
      name: 'Platinum Soft Skills',
      requirement: '20 Team Collaborations',
      status: 'Locked',
      icon: Award,
      color: 'bg-gray-400',
      completed: false,
      category: 'Soft Skills Mastery'
    },
    {
      name: 'Soft Skills Conqueror',
      requirement: '25+ Complete Modules',
      status: 'Locked',
      icon: Crown,
      color: 'bg-purple-500',
      completed: false,
      category: 'Soft Skills Mastery'
    },
    // Aptitude Mastery Certifications
    {
      name: 'Bronze Aptitude',
      requirement: '50 Aptitude Questions',
      status: 'In Progress',
      icon: Medal,
      color: 'bg-orange-500',
      completed: false,
      category: 'Aptitude Mastery'
    },
    {
      name: 'Silver Aptitude',
      requirement: '100 Aptitude Questions',
      status: 'Locked',
      icon: Medal,
      color: 'bg-gray-500',
      completed: false,
      category: 'Aptitude Mastery'
    },
    {
      name: 'Gold Aptitude',
      requirement: '200 Aptitude Questions',
      status: 'Locked',
      icon: Medal,
      color: 'bg-yellow-500',
      completed: false,
      category: 'Aptitude Mastery'
    },
    {
      name: 'Aptitude Conqueror',
      requirement: '300+ Questions Mastered',
      status: 'Locked',
      icon: Crown,
      color: 'bg-purple-500',
      completed: false,
      category: 'Aptitude Mastery'
    }
  ];

  const groupedCerts = certifications.reduce((acc, cert) => {
    const category = cert.category || 'General';
    if (!acc[category]) acc[category] = [];
    acc[category].push(cert);
    return acc;
  }, {});

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Mini-Certifications</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Earn certifications by completing coding challenges and skill assessments across different domains.
          </p>
        </div>

        {Object.entries(groupedCerts).map(([category, certs]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">{category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {certs.map((cert, index) => {
                const Icon = cert.icon;
                
                return (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow"
                    data-testid={`cert-${cert.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className={`w-12 h-12 ${cert.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">{cert.requirement}</p>
                    <p className={`text-xs font-medium ${
                      cert.completed 
                        ? 'text-success' 
                        : cert.status === 'In Progress'
                        ? 'text-primary'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {cert.status}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Certifications;