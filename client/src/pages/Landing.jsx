import React from 'react';
import { Link } from 'wouter';
import { CheckCircle, MessageCircle, TrendingUp, GraduationCap } from 'lucide-react';
import Navigation from '../components/Navigation';

const Landing = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Mock Tests',
      description: 'Practice with realistic mock tests that simulate the actual placement environment.'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your progress over time with visual indicators and performance reports.'
    },
    {
      icon: MessageCircle,
      title: 'Interview Preparation',
      description: 'Prepare for technical and HR interviews with comprehensive question banks.'
    },
    {
      icon: CheckCircle,
      title: 'Soft Skills Training',
      description: 'Improve your communication and presentation skills for better placement outcomes.'
    },
    {
      icon: TrendingUp,
      title: 'Resume Builder',
      description: 'Create professional resumes with AI-powered suggestions and templates.'
    },
    {
      icon: MessageCircle,
      title: 'Mini Badges for Competition',
      description: 'Earn certifications and compete with peers through coding challenges.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-3xl p-12 relative overflow-hidden">
            {/* Background pattern or image would go here */}
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Ace Your Placements with <span className="text-primary">GPE</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Your AI-powered platform for placement preparation. Get personalized guidance, practice with real tests, and track your progress.
              </p>
              
              <div className="flex justify-center">
                <Link 
                  href="/login"
                  className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                  data-testid="button-hero-get-started"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Comprehensive Preparation Tools</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              GPE offers a suite of tools designed to help you succeed in your placement journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">GPE</span>
              </div>
              <p className="text-gray-300 text-sm">
                Your AI-powered platform for placement preparation. Get personalized guidance, practice with real tests, and track your progress.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Mock Tests</li>
                <li>Interview Preparation</li>
                <li>Resume Builder</li>
                <li>Progress Tracking</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Community</li>
                <li>Contact Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Get Placed Easily (GPE). All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Follow us:</span>
              <span className="text-sm text-gray-400">Twitter</span>
              <span className="text-sm text-gray-400">LinkedIn</span>
              <span className="text-sm text-gray-400">Facebook</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
