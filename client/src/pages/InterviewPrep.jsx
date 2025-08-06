import React from 'react';
import { Link } from 'wouter';
import { GraduationCap, Search, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InterviewPrep = () => {
  const handleStartPractice = (type) => {
    // TODO: Implement navigation to practice sessions
    console.log('Starting practice for:', type);
    // This would navigate to specific practice modules
  };

  const handleGetFeedback = (type) => {
    // TODO: Connect to AI feedback service
    console.log('Getting feedback for:', type);
    // This would integrate with AI service for interview feedback
  };

  const handleStartCoding = (type) => {
    // TODO: Navigate to coding practice interface
    console.log('Starting coding practice:', type);
    // This would open the coding practice environment
  };

  const handleSubmitCode = (type) => {
    // TODO: Implement code submission for AI review
    console.log('Submitting code for review:', type);
    // This would submit code to AI review service
  };

  const handleExploreCompanies = (type) => {
    // TODO: Navigate to company-specific insights
    console.log('Exploring companies:', type);
    // This would show company-specific interview experiences
  };

  const handleViewQuestions = (type) => {
    // TODO: Show company-specific question sets
    console.log('Viewing questions for:', type);
    // This would display company-specific question banks
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">CampusConnect</span>
        </div>
        
        <nav className="flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            data-testid="link-home"
          >
            Home
          </Link>
          <Link 
            href="/courses" 
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            data-testid="link-courses"
          >
            Courses
          </Link>
          <Link 
            href="/practice" 
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            data-testid="link-practice"
          >
            Practice
          </Link>
          <Link 
            href="/resume-builder" 
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            data-testid="link-resume-builder"
          >
            Resume Builder
          </Link>
          <Link 
            href="/interview-prep" 
            className="bg-primary text-white px-4 py-2 rounded-lg"
            data-testid="link-interview-prep"
          >
            Interview Prep
          </Link>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search" 
                className="w-32 pl-10 pr-4 py-2 text-xs bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg"
                data-testid="input-search"
              />
            </div>
            <Bell className="h-5 w-5 text-gray-400" />
            <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
          </div>
        </nav>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Interview Prep</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Ace your interviews with our comprehensive resources and AI-powered tools.
        </p>
      </div>

      {/* HR Interview Questions Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">HR Interview Questions</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Common HR Questions</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Prepare for behavioral and situational questions with our curated list of common HR interview questions.
            </p>
            <Button 
              onClick={() => handleStartPractice('hr-questions')}
              className="bg-primary hover:bg-blue-700"
              data-testid="button-start-hr-practice"
            >
              Start Practice
            </Button>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-300">Professional Environment</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="flex justify-center items-center">
            <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-300">AI Technology</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI-Powered Feedback</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get instant feedback on your interview responses using our AI-powered review tool. Improve your delivery and content.
            </p>
            <Button 
              onClick={() => handleGetFeedback('ai-review')}
              className="bg-primary hover:bg-blue-700"
              data-testid="button-get-ai-feedback"
            >
              Get Feedback
            </Button>
          </div>
        </div>
      </div>

      {/* Coding Challenges Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Coding Challenges</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Practice Coding Questions</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Sharpen your coding skills with a wide range of practice questions covering various data structures and algorithms.
            </p>
            <Button 
              onClick={() => handleStartCoding('practice')}
              className="bg-primary hover:bg-blue-700"
              data-testid="button-start-coding"
            >
              Start Coding
            </Button>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="w-full h-64 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-2xl flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-300">Coding Environment</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="flex justify-center items-center">
            <div className="w-full h-64 bg-gradient-to-br from-teal-100 to-green-100 dark:from-teal-900 dark:to-green-900 rounded-2xl flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-300">Code Review Interface</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI Code Review</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Submit your code for review and receive AI-generated feedback on efficiency, style, and potential improvements.
            </p>
            <Button 
              onClick={() => handleSubmitCode('ai-code')}
              className="bg-primary hover:bg-blue-700"
              data-testid="button-submit-code"
            >
              Submit Code
            </Button>
          </div>
        </div>
      </div>

      {/* Company-Specific Insights Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Company-Specific Insights</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Company Interview Experiences</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Read interview experiences and insights shared by other students for specific companies. Learn what to expect.
            </p>
            <Button 
              onClick={() => handleExploreCompanies('experiences')}
              className="bg-primary hover:bg-blue-700"
              data-testid="button-explore-companies"
            >
              Explore Companies
            </Button>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 rounded-2xl flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-300">Meeting Room</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="flex justify-center items-center">
            <div className="w-full h-64 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900 dark:to-blue-900 rounded-2xl flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-300">Documents & Checklist</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Company-Specific Question Sets</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Access question sets tailored to specific companies, helping you prepare for the unique challenges of each interview.
            </p>
            <Button 
              onClick={() => handleViewQuestions('company-specific')}
              className="bg-primary hover:bg-blue-700"
              data-testid="button-view-questions"
            >
              View Questions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
