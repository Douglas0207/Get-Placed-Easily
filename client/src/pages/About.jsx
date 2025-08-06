import React from 'react';
import Navigation from '../components/Navigation';
import { GraduationCap, Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About GPE</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get Placed Easily (GPE) is your comprehensive AI-powered platform designed to help students excel in their placement preparation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To democratize placement preparation by providing accessible, high-quality resources and AI-powered guidance to every student.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Community</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join thousands of students who have successfully secured placements using our comprehensive preparation platform.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Success</h3>
            <p className="text-gray-600 dark:text-gray-300">
              With cutting-edge AI technology and proven methodologies, we help students achieve their dream job placements.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Why Choose GPE?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Comprehensive Preparation</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Mock tests tailored to company requirements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>DSA practice with difficulty progression</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Aptitude training and skill development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Soft skills and communication training</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">AI-Powered Features</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Intelligent resume builder with suggestions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Real-time progress tracking and analytics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Personalized learning recommendations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Achievement system with mini-certifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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

export default About;