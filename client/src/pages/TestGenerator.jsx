import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TestGenerator = () => {
  const [selectedTab, setSelectedTab] = useState('company');
  const [selectedCompany, setSelectedCompany] = useState('');

  // TODO: Connect to backend API for test generation and score history
  const companies = [
    { value: 'tcs', label: 'TCS' },
    { value: 'infosys', label: 'Infosys' },
    { value: 'wipro', label: 'Wipro' },
    { value: 'accenture', label: 'Accenture' }
  ];

  const scoreHistory = [
    { testName: 'TCS Mock Test 1', score: '85/100', date: '2024-01-15', status: 'Completed' },
    { testName: 'Infosys Mock Test 2', score: '78/100', date: '2024-01-20', status: 'Completed' },
    { testName: 'Wipro Mock Test 1', score: '92/100', date: '2024-01-25', status: 'Completed' }
  ];

  const handleGenerateTest = () => {
    // TODO: Implement test generation logic with backend integration
    console.log('Generating test for:', selectedCompany);
    // This would call an API endpoint to generate a test based on criteria
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar brandName="CampusPrep" />
      
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Test Generator</h1>

        {/* Generate Test Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Generate Test</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-8">
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-6">
              <button 
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedTab === 'company' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setSelectedTab('company')}
                data-testid="button-tab-company"
              >
                By Company
              </button>
              <button 
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedTab === 'difficulty' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setSelectedTab('difficulty')}
                data-testid="button-tab-difficulty"
              >
                By Difficulty
              </button>
            </div>

            {/* Company Selection */}
            {selectedTab === 'company' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Select Company
                </label>
                <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                  <SelectTrigger className="w-full" data-testid="select-company">
                    <SelectValue placeholder="Select a company" />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map(company => (
                      <SelectItem key={company.value} value={company.value}>
                        {company.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="flex justify-end">
              <Button 
                onClick={handleGenerateTest}
                className="bg-primary hover:bg-blue-700"
                data-testid="button-generate-test"
              >
                Generate Test
              </Button>
            </div>
          </div>
        </div>

        {/* Score History Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Score History</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wider">
                      Test Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wider">
                      Score
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {scoreHistory.map((score, index) => (
                    <tr key={index} data-testid={`row-score-${index}`}>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{score.testName}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{score.score}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{score.date}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          {score.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TestGenerator;
