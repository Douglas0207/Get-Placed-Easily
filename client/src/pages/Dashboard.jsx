import React from 'react';
import { Link } from 'wouter';
import { Home } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  // TODO: Connect to backend API for user data and progress tracking
  const progressData = [
    { subject: 'Aptitude', percentage: 75, color: 'bg-primary' },
    { subject: 'DSA', percentage: 60, color: 'bg-primary' },
    { subject: 'Communication', percentage: 85, color: 'bg-primary' },
    { subject: 'Resume', percentage: 90, color: 'bg-success' }
  ];

  const upcomingTests = [
    { name: 'TCS Mock Test 1', dateTime: '2024-07-20, 10:00 AM', id: 1 },
    { name: 'Infosys Mock Test 2', dateTime: '2024-07-25, 2:00 PM', id: 2 }
  ];

  const aiSuggestions = [
    {
      title: 'Focus on Data Structures',
      description: 'Your DSA progress is slightly behind. Consider practicing more problems.',
      id: 1
    },
    {
      title: 'Improve Communication Skills', 
      description: 'Practice mock interviews to enhance your communication.',
      id: 2
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Top Header with Home Button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="text-welcome">
              Welcome back, Student
            </h1>
            <p className="text-gray-600 dark:text-gray-300">Continue your placement preparation journey</p>
          </div>
          <Link 
            href="/" 
            className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            data-testid="button-home"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
        </div>

        {/* Overall Progress Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Overall Progress</h2>
          <div className="space-y-6">
            {progressData.map((item, index) => (
              <div key={index} className="flex items-center justify-between" data-testid={`progress-${item.subject.toLowerCase()}`}>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">{item.subject}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className={`${item.color} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Mock Tests */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Mock Tests</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingTests.map((test) => (
              <div 
                key={test.id} 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                data-testid={`card-test-${test.id}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{test.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{test.dateTime}</p>
                  </div>
                  <div className="w-24 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Suggestions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">AI Suggestions</h2>
          <div className="space-y-6">
            {aiSuggestions.map((suggestion) => (
              <div 
                key={suggestion.id}
                className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                data-testid={`suggestion-${suggestion.id}`}
              >
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{suggestion.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{suggestion.description}</p>
                </div>
                <div className="w-32 h-20 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
