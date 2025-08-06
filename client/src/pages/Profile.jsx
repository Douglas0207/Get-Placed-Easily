import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { User, Mail, Phone, MapPin, Calendar, Edit3, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    university: 'University of California, Berkeley',
    major: 'Computer Science',
    graduationYear: '2024',
    bio: 'Passionate computer science student with interests in web development, machine learning, and software engineering. Looking forward to starting my career in tech.',
    skills: 'JavaScript, Python, React, Node.js, SQL, Git'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // TODO: Connect to backend API to save profile data
    console.log('Saving profile data:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // TODO: Revert to original data from backend
    setIsEditing(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Profile</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Manage your personal information and preferences
              </p>
            </div>
            
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-primary hover:bg-blue-700"
                data-testid="button-edit-profile"
              >
                <Edit3 className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex space-x-2">
                <Button
                  onClick={handleSave}
                  className="bg-success hover:bg-green-600"
                  data-testid="button-save-profile"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  data-testid="button-cancel-edit"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Avatar and Basic Info */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="h-16 w-16 text-white" />
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2" data-testid="text-profile-name">
                    {formData.fullName}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {formData.major} • {formData.graduationYear}
                  </p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Mail className="h-4 w-4" />
                      <span>{formData.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Phone className="h-4 w-4" />
                      <span>{formData.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4" />
                      <span>{formData.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Tests Completed</span>
                    <span className="font-semibold text-gray-900 dark:text-white">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">DSA Problems Solved</span>
                    <span className="font-semibold text-gray-900 dark:text-white">45</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Certifications Earned</span>
                    <span className="font-semibold text-gray-900 dark:text-white">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Current Streak</span>
                    <span className="font-semibold text-primary">7 days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Detailed Information */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Personal Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    {isEditing ? (
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        data-testid="input-full-name"
                      />
                    ) : (
                      <div className="mt-1 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white">
                        {formData.fullName}
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        data-testid="input-email"
                      />
                    ) : (
                      <div className="mt-1 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white">
                        {formData.email}
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        data-testid="input-phone"
                      />
                    ) : (
                      <div className="mt-1 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white">
                        {formData.phone}
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    {isEditing ? (
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        data-testid="input-location"
                      />
                    ) : (
                      <div className="mt-1 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white">
                        {formData.location}
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="university">University</Label>
                    {isEditing ? (
                      <Input
                        id="university"
                        value={formData.university}
                        onChange={(e) => handleInputChange('university', e.target.value)}
                        data-testid="input-university"
                      />
                    ) : (
                      <div className="mt-1 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white">
                        {formData.university}
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="major">Major</Label>
                    {isEditing ? (
                      <Input
                        id="major"
                        value={formData.major}
                        onChange={(e) => handleInputChange('major', e.target.value)}
                        data-testid="input-major"
                      />
                    ) : (
                      <div className="mt-1 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white">
                        {formData.major}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    {isEditing ? (
                      <Textarea
                        id="bio"
                        rows={3}
                        value={formData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        data-testid="textarea-bio"
                      />
                    ) : (
                      <div className="mt-1 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white min-h-[80px]">
                        {formData.bio}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="skills">Skills</Label>
                    {isEditing ? (
                      <Textarea
                        id="skills"
                        rows={2}
                        value={formData.skills}
                        onChange={(e) => handleInputChange('skills', e.target.value)}
                        placeholder="Separate skills with commas"
                        data-testid="textarea-skills"
                      />
                    ) : (
                      <div className="mt-1 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white">
                        {formData.skills}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;