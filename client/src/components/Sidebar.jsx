import React from 'react';
import { Link, useLocation } from 'wouter';
import { 
  Home, 
  BookOpen, 
  ClipboardList, 
  Mic, 
  Folder, 
  User, 
  BarChart3,
  GraduationCap,
  Code,
  FileText,
  LogOut
} from 'lucide-react';

const Sidebar = ({ brandName = "CampusReady" }) => {
  const [location] = useLocation();

  const sidebarItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/mock-tests', label: 'Mock Tests', icon: ClipboardList },
    { path: '/aptitude-training', label: 'Aptitude Training', icon: BookOpen },
    { path: '/dsa', label: 'DSA', icon: Code },
    { path: '/soft-skills', label: 'Soft Skills Training', icon: Mic },
    { path: '/resume-builder', label: 'Resume Builder', icon: FileText },
    { path: '/progress', label: 'Progress', icon: BarChart3 },
    { path: '/certifications', label: 'Certifications', icon: GraduationCap },
    { path: '/profile', label: 'Profile', icon: User }
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">{brandName}</span>
        </div>
        
        <nav className="space-y-2 flex flex-col h-full">
          <div className="flex-1 space-y-2">
            {sidebarItems.map(item => {
              const Icon = item.icon;
              const isActive = location === item.path;
              
              return (
                <Link 
                  key={item.path}
                  href={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary text-white' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  data-testid={`link-sidebar-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Logout Button */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
            <button 
              onClick={() => {
                // TODO: Add proper logout logic - clear session, redirect to home
                window.location.href = '/';
              }}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 w-full"
              data-testid="button-logout"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
