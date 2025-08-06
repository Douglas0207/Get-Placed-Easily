import React from 'react';
import Sidebar from '../components/Sidebar';
import { BookOpen, Clock, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AptitudeTraining = () => {
  // TODO: Connect to backend for aptitude training content and progress tracking
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Aptitude Training</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Master quantitative aptitude, logical reasoning, and verbal ability for placement success.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 border border-gray-200 dark:border-gray-700 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full mx-auto mb-6 flex items-center justify-center">
            <BookOpen className="h-12 w-12 text-primary" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Aptitude Training Coming Soon!
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We're building an extensive aptitude training module that will include quantitative aptitude, 
            logical reasoning, verbal ability, and company-specific question patterns. Stay tuned for updates!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Timed Practice</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Practice with real exam timings to improve speed and accuracy
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <Target className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Targeted Learning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Focus on weak areas with personalized question recommendations
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <TrendingUp className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Progress Analytics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Track your improvement with detailed performance analytics
              </p>
            </div>
          </div>

          <Button 
            className="bg-primary hover:bg-blue-700"
            data-testid="button-notify-updates"
          >
            Notify Me When Available
          </Button>
        </div>

        {/* Placeholder for Future Features */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quantitative Aptitude</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Master arithmetic, algebra, geometry, and data interpretation with step-by-step solutions.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Logical Reasoning</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Develop critical thinking with puzzles, patterns, and logical deduction problems.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Verbal Ability</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Improve reading comprehension, grammar, and vocabulary for better communication.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Company Patterns</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Practice with real question patterns from top companies like TCS, Infosys, and more.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AptitudeTraining;