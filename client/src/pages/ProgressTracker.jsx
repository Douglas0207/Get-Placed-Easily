import React from 'react';
import Sidebar from '../components/Sidebar';
import { TrendingUp, Target, Calendar } from 'lucide-react';

const ProgressTracker = () => {
  // TODO: Connect to backend analytics API for real progress data
  const keyMetrics = [
    { label: 'Total Questions Solved', value: '245', icon: Target },
    { label: 'Average Accuracy', value: '78%', icon: TrendingUp },
    { label: 'Current Streak', value: '5 days', icon: Calendar }
  ];

  const topicAccuracy = [
    { name: 'Data Structures', accuracy: 85 },
    { name: 'Algorithms', accuracy: 72 },
    { name: 'System Design', accuracy: 65 },
    { name: 'Behavioral', accuracy: 58 }
  ];

  const topicMastery = [
    { name: 'Data Structures', level: 'Mastered', progress: 90, color: 'bg-success' },
    { name: 'Algorithms', level: 'Proficient', progress: 75, color: 'bg-primary' },
    { name: 'System Design', level: 'Intermediate', progress: 60, color: 'bg-accent' },
    { name: 'Behavioral', level: 'Beginner', progress: 35, color: 'bg-red-500' }
  ];

  // Mock chart data for weekly progress
  const weeklyData = [
    { day: 'Mon', value: 20 },
    { day: 'Tue', value: 16 },
    { day: 'Wed', value: 24 },
    { day: 'Thu', value: 18 },
    { day: 'Fri', value: 22 },
    { day: 'Sat', value: 28 },
    { day: 'Sun', value: 32 }
  ];

  const maxValue = Math.max(...weeklyData.map(d => d.value));

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar brandName="CampusPrep" />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Progress Tracker</h1>
          <p className="text-gray-600 dark:text-gray-300">Track your progress and identify areas for improvement.</p>
        </div>

        {/* Analytics Dashboard */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Analytics Dashboard</h2>
          
          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                  data-testid={`metric-${metric.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                      {metric.label}
                    </h3>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
                </div>
              );
            })}
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Progress Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Questions Solved Over Time</h3>
              <div className="mb-4">
                <p className="text-2xl font-bold text-success">+15% from last week</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Last 7 Days +15%</p>
              </div>
              {/* Chart Visualization */}
              <div className="h-48 flex items-end justify-between space-x-2" data-testid="chart-weekly-progress">
                {weeklyData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center space-y-1">
                    <div 
                      className="bg-primary rounded-t w-8 transition-all duration-500"
                      style={{ height: `${(item.value / maxValue) * 160}px` }}
                    ></div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accuracy by Topic */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Accuracy by Topic</h3>
              <div className="mb-4">
                <p className="text-2xl font-bold text-primary">78%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Last 30 Days +2%</p>
              </div>
              <div className="space-y-4">
                {topicAccuracy.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between" data-testid={`accuracy-${topic.name.toLowerCase().replace(' ', '-')}`}>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{topic.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${topic.accuracy}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300 w-8">{topic.accuracy}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Topic Mastery */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Topic Mastery</h2>
          
          <div className="space-y-6">
            {topicMastery.map((topic, index) => {
              const badgeColors = {
                'Mastered': 'bg-green-100 text-green-800',
                'Proficient': 'bg-blue-100 text-blue-800',
                'Intermediate': 'bg-yellow-100 text-yellow-800',
                'Beginner': 'bg-red-100 text-red-800'
              };

              return (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                  data-testid={`mastery-${topic.name.toLowerCase().replace(' ', '-')}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{topic.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColors[topic.level]}`}>
                      {topic.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                    <div 
                      className={`${topic.color} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${topic.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{topic.progress}% complete</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgressTracker;
