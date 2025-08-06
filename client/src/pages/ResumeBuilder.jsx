import React, { useState } from 'react';
import { Link } from 'wouter';
import { GraduationCap, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ResumeBuilder = () => {
  const [selectedTab, setSelectedTab] = useState('contact');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    summary: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNextStep = () => {
    // TODO: Implement form validation and navigation to next tab
    console.log('Form data:', formData);
    // This would validate the current tab and move to the next one
  };

  const handleGetSuggestions = () => {
    // TODO: Connect to AI service for resume suggestions
    console.log('Getting AI suggestions for resume improvement');
    // This would call an AI API to analyze the resume and provide suggestions
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
            className="bg-primary text-white px-4 py-2 rounded-lg"
            data-testid="link-resume-builder"
          >
            Resume Builder
          </Link>
          <Link 
            href="/interview-prep" 
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            data-testid="link-interview-prep"
          >
            Interview Prep
          </Link>
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-gray-400" />
            <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
          </div>
        </nav>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Panel - Form */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Resume Builder</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Craft a standout resume with our AI-powered tool. Get personalized suggestions to highlight your skills and experience effectively.
            </p>

            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8">
              {[
                { id: 'contact', label: 'Contact' },
                { id: 'education', label: 'Education' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' }
              ].map(tab => (
                <button
                  key={tab.id}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    selectedTab === tab.id 
                      ? 'bg-primary text-white' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedTab(tab.id)}
                  data-testid={`button-tab-${tab.id}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contact Form */}
            {selectedTab === 'contact' && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    data-testid="input-full-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input
                    id="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange('linkedin', e.target.value)}
                    data-testid="input-linkedin"
                  />
                </div>
                
                <div>
                  <Label htmlFor="github">GitHub Profile</Label>
                  <Input
                    id="github"
                    type="url"
                    placeholder="https://github.com/yourusername"
                    value={formData.github}
                    onChange={(e) => handleInputChange('github', e.target.value)}
                    data-testid="input-github"
                  />
                </div>
                
                <div>
                  <Label htmlFor="summary">Summary</Label>
                  <Textarea
                    id="summary"
                    rows={4}
                    placeholder="Write a brief summary about yourself..."
                    value={formData.summary}
                    onChange={(e) => handleInputChange('summary', e.target.value)}
                    data-testid="textarea-summary"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-end mt-8">
              <Button 
                onClick={handleNextStep}
                className="bg-primary hover:bg-blue-700"
                data-testid="button-next-step"
              >
                Next
              </Button>
            </div>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Resume Preview</h3>
            
            {/* Mock Resume Preview */}
            <div className="bg-white border rounded-lg p-4 mb-6 shadow-sm" data-testid="preview-resume">
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500">Resume Preview</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1" data-testid="text-preview-name">
                  {formData.fullName || 'Your Name'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300" data-testid="text-preview-contact">
                  {formData.email || 'your.email@example.com'} | {formData.phone || '(555) 123-4567'}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Resume Strength</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300" data-testid="text-resume-strength">60%</span>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Suggestions</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Get personalized feedback to improve your resume.
                </p>
                <Button 
                  onClick={handleGetSuggestions}
                  className="w-full bg-primary hover:bg-blue-700"
                  data-testid="button-get-suggestions"
                >
                  Get Suggestions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
