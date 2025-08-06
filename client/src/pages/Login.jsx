import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { GraduationCap, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple validation for testing - TODO: Connect to real authentication system
    if (formData.username === 'admin' && formData.password === 'admin123') {
      // Successful login - set auth state and redirect to dashboard
      login();
      setLocation('/dashboard');
    } else {
      setError('Invalid username or password. Try admin/admin123');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="h-10 w-10 text-primary" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">GPE</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h1>
          <p className="text-gray-600 dark:text-gray-300">Sign in to your account to continue</p>
        </div>

        {/* Login Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username Field */}
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                data-testid="input-username"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  data-testid="input-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  data-testid="button-toggle-password"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg" data-testid="error-message">
                {error}
              </div>
            )}

            {/* Login Button */}
            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-blue-700"
              data-testid="button-login"
            >
              Sign In
            </Button>
          </form>

          {/* Test Credentials Info */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300 font-medium mb-1">Test Credentials:</p>
            <p className="text-sm text-blue-600 dark:text-blue-400">Username: admin</p>
            <p className="text-sm text-blue-600 dark:text-blue-400">Password: admin123</p>
          </div>

          {/* Back to Home Link */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setLocation('/')}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
              data-testid="link-back-home"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;