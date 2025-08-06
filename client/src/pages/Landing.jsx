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
      <section id="features" className="py-20 px-6">
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

      {/* About Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About GPE</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              GPE (Get Placed Easily) is specifically designed for students from diverse engineering streams - ECE, EEE, MECH, 
              and others who aspire to transition into software careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Built for Cross-Stream Success
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We understand that students from Electronics, Electrical, Mechanical, and other non-CS backgrounds 
                  face unique challenges when pursuing software careers. That's why GPE provides specialized guidance 
                  tailored to your journey.
                </p>
                <p>
                  Our comprehensive platform bridges the gap between your current knowledge and industry requirements, 
                  offering structured learning paths that help you confidently transition into software roles.
                </p>
                <p>
                  With extensive question banks, real company patterns, and personalized learning recommendations, 
                  we guide you on the best path to achieve your software career goals.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                What We Offer
              </h4>
              <ul className="space-y-4">
                {[
                  'Domain-specific placement preparation for non-CS students',
                  'Comprehensive DSA training from basics to advanced',
                  'Company-wise preparation strategies and question patterns',
                  'Soft skills development for technical interviews',
                  'AI-powered resume building and optimization',
                  'Progress tracking with detailed analytics'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
