import React from 'react';
import { Link, useLocation } from 'wouter';
import { GraduationCap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [location] = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/resources', label: 'Resources' }
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">GPE</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <Link 
              key={item.path}
              href={item.path}
              className={`transition-colors ${
                location === item.path 
                  ? 'text-primary font-medium' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary'
              }`}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <Link 
            href="/dashboard"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            data-testid="button-get-started"
          >
            Get Started
          </Link>
          <Link 
            href="/dashboard"
            className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
            data-testid="button-try-demo"
          >
            Try Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
