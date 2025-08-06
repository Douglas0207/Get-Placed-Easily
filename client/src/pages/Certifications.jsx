import React from 'react';
import { Medal, Crown, Gem } from 'lucide-react';

const Certifications = () => {
  // TODO: Connect to backend for actual certification data and progress
  const certifications = [
    {
      name: 'Bronze LeetCode',
      requirement: '25 Problems',
      status: 'Completed',
      icon: Medal,
      color: 'bg-orange-500',
      completed: true
    },
    {
      name: 'Silver LeetCode',
      requirement: '50 Problems',
      status: 'Completed',
      icon: Medal,
      color: 'bg-gray-500',
      completed: true
    },
    {
      name: 'Gold LeetCode',
      requirement: '100 Problems',
      status: 'Completed',
      icon: Medal,
      color: 'bg-yellow-500',
      completed: true
    },
    {
      name: 'Platinum LeetCode',
      requirement: '150 Problems',
      status: 'Completed',
      icon: Medal,
      color: 'bg-gray-400',
      completed: true
    },
    {
      name: 'Diamond LeetCode',
      requirement: '200 Problems',
      status: 'Completed',
      icon: Gem,
      color: 'bg-blue-400',
      completed: true
    },
    {
      name: 'Conqueror of LeetCode',
      requirement: '250+ Problems',
      status: 'Completed',
      icon: Crown,
      color: 'bg-purple-500',
      completed: true
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Mini-Certifications</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Earn certifications by completing coding challenges and assessments
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          
          return (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow"
              data-testid={`cert-${cert.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`w-16 h-16 ${cert.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{cert.requirement}</p>
              <p className={`text-xs font-medium ${
                cert.completed ? 'text-success' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {cert.status}
              </p>
              
              {cert.completed && (
                <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-success h-2 rounded-full w-full"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Achievement Stats */}
      <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Achievement Summary</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-total-certs">6</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Total Certifications</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2" data-testid="stat-completed-certs">6</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-completion-rate">100%</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Completion Rate</p>
          </div>
        </div>
      </div>

      {/* Next Goals */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What's Next?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Congratulations on completing all available certifications! Stay tuned for more challenging certification programs.
        </p>
        <div className="flex space-x-4">
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" data-testid="button-explore-more">
            Explore More Challenges
          </button>
          <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors" data-testid="button-share-achievements">
            Share Achievements
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
