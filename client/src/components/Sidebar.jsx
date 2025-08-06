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
  FileText
} from 'lucide-react';

const Sidebar = ({ brandName = "CampusReady" }) => {
  const [location] = useLocation();

  const sidebarItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/practice', label: 'Practice', icon: BookOpen },
    { path: '/tests', label: 'Tests', icon: ClipboardList },
    { path: '/interview-prep', label: 'Interview Prep', icon: Mic },
    { path: '/spoken-english', label: 'Spoken English', icon: Mic },
    { path: '/resume-builder', label: 'Resume Builder', icon: FileText },
    { path: '/progress', label: 'Progress', icon: BarChart3 },
    { path: '/certifications', label: 'Certifications', icon: GraduationCap },
    { path: '/resources', label: 'Resources', icon: Folder },
    { path: '/profile', label: 'Profile', icon: User }
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">{brandName}</span>
        </div>
        
        <nav className="space-y-2">
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
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
