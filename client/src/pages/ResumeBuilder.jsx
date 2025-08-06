import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FileText, Download, Eye, Sparkles } from 'lucide-react';
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

  const handleGetSuggestions = () => {
    // TODO: Connect to AI service for resume suggestions
    console.log('Getting AI suggestions for resume improvement');
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Resume Builder</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Create a professional resume with AI-powered suggestions and multiple templates.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Build Your Resume</h2>
                <Button
                  onClick={handleGetSuggestions}
                  className="bg-primary hover:bg-blue-700"
                  data-testid="button-get-suggestions"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Get AI Suggestions
                </Button>
              </div>

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
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedTab(tab.id)}
                    data-testid={`tab-${tab.id}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Contact Tab */}
              {selectedTab === 'contact' && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                        data-testid="input-full-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        value={formData.linkedin}
                        onChange={(e) => handleInputChange('linkedin', e.target.value)}
                        placeholder="linkedin.com/in/yourprofile"
                        data-testid="input-linkedin"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Textarea
                      id="summary"
                      rows={4}
                      value={formData.summary}
                      onChange={(e) => handleInputChange('summary', e.target.value)}
                      placeholder="Write a brief professional summary highlighting your key skills and experience..."
                      data-testid="textarea-summary"
                    />
                  </div>
                </div>
              )}

              {/* Other tabs content */}
              {selectedTab === 'education' && (
                <div className="text-center py-12">
                  <div className="text-gray-500 dark:text-gray-400">
                    <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Education section coming soon!</p>
                    <p className="text-sm">Add your educational background and achievements.</p>
                  </div>
                </div>
              )}

              {selectedTab === 'experience' && (
                <div className="text-center py-12">
                  <div className="text-gray-500 dark:text-gray-400">
                    <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Experience section coming soon!</p>
                    <p className="text-sm">Add your work experience and projects.</p>
                  </div>
                </div>
              )}

              {selectedTab === 'skills' && (
                <div className="text-center py-12">
                  <div className="text-gray-500 dark:text-gray-400">
                    <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Skills section coming soon!</p>
                    <p className="text-sm">Add your technical and soft skills.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 sticky top-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Resume Preview</h3>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" data-testid="button-preview">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" data-testid="button-download">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Resume Preview */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 min-h-[400px] border-2 border-dashed border-gray-300 dark:border-gray-600">
                <div className="text-center text-gray-500 dark:text-gray-400 py-16">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="font-medium">Resume Preview</p>
                  <p className="text-sm">Fill out the form to see your resume preview</p>
                </div>
              </div>

              {/* Template Selection */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Choose Template</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button className="h-16 bg-primary/10 border border-primary rounded-lg hover:bg-primary/20 transition-colors" data-testid="template-modern">
                    <span className="text-xs text-primary font-medium">Modern</span>
                  </button>
                  <button className="h-16 bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors" data-testid="template-classic">
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">Classic</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumeBuilder;