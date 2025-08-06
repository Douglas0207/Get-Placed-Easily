import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Code, Clock, CheckCircle, Circle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DSA = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  
  // TODO: Connect to backend for real DSA questions and progress tracking
  const dsaQuestions = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array",
      description: "Given an array of integers and a target sum, return indices of two numbers that add up to target.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      completed: true,
      tags: ["Array", "Hash Table"]
    },
    {
      id: 2,
      title: "Reverse Linked List",
      difficulty: "Easy",
      category: "Linked List",
      description: "Reverse a singly linked list iteratively or recursively.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      completed: true,
      tags: ["Linked List", "Recursion"]
    },
    {
      id: 3,
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "Stack",
      description: "Given a string containing just parentheses, determine if the input string is valid.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      completed: false,
      tags: ["Stack", "String"]
    },
    {
      id: 4,
      title: "Binary Tree Inorder Traversal",
      difficulty: "Medium",
      category: "Tree",
      description: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      completed: false,
      tags: ["Tree", "Recursion", "Stack"]
    },
    {
      id: 5,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      category: "String",
      description: "Find the length of the longest substring without repeating characters.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(min(m,n))",
      completed: false,
      tags: ["String", "Hash Table", "Sliding Window"]
    },
    {
      id: 6,
      title: "Add Two Numbers",
      difficulty: "Medium",
      category: "Linked List",
      description: "Add two numbers represented as linked lists and return the sum as a linked list.",
      timeComplexity: "O(max(m,n))",
      spaceComplexity: "O(max(m,n))",
      completed: false,
      tags: ["Linked List", "Math"]
    },
    {
      id: 7,
      title: "3Sum",
      difficulty: "Medium",
      category: "Array",
      description: "Given an integer array, return all unique triplets that sum to zero.",
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
      completed: false,
      tags: ["Array", "Two Pointers", "Sorting"]
    },
    {
      id: 8,
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      category: "Linked List",
      description: "Merge k sorted linked lists and return it as one sorted list.",
      timeComplexity: "O(n log k)",
      spaceComplexity: "O(1)",
      completed: false,
      tags: ["Linked List", "Divide and Conquer", "Heap"]
    },
    {
      id: 9,
      title: "Trapping Rain Water",
      difficulty: "Hard",
      category: "Array",
      description: "Given elevation map represented by array, compute how much water can be trapped.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      completed: false,
      tags: ["Array", "Two Pointers", "Dynamic Programming"]
    },
    {
      id: 10,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      category: "Array",
      description: "Find the median of two sorted arrays with overall O(log(m+n)) time complexity.",
      timeComplexity: "O(log(min(m,n)))",
      spaceComplexity: "O(1)",
      completed: false,
      tags: ["Array", "Binary Search", "Divide and Conquer"]
    }
  ];

  const difficultyColors = {
    Easy: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30',
    Medium: 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30',
    Hard: 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30'
  };

  const filteredQuestions = selectedDifficulty === 'all' 
    ? dsaQuestions 
    : dsaQuestions.filter(q => q.difficulty.toLowerCase() === selectedDifficulty);

  const handleStartProblem = (questionId) => {
    // TODO: Navigate to coding interface or open problem details
    console.log('Starting problem:', questionId);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Data Structures & Algorithms</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Master DSA concepts with curated problems ranging from easy to hard difficulty levels.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex space-x-2">
            {['all', 'easy', 'medium', 'hard'].map(difficulty => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                  selectedDifficulty === difficulty
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
                data-testid={`button-filter-${difficulty}`}
              >
                {difficulty === 'all' ? 'All Problems' : difficulty}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Completed</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white" data-testid="stat-completed">
              {dsaQuestions.filter(q => q.completed).length}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <Circle className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Remaining</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white" data-testid="stat-remaining">
              {dsaQuestions.filter(q => !q.completed).length}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Easy</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white" data-testid="stat-easy">
              {dsaQuestions.filter(q => q.difficulty === 'Easy').length}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-red-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Hard</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white" data-testid="stat-hard">
              {dsaQuestions.filter(q => q.difficulty === 'Hard').length}
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((question) => (
            <div 
              key={question.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              data-testid={`question-${question.id}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {question.completed ? (
                      <CheckCircle className="h-6 w-6 text-success" />
                    ) : (
                      <Circle className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {question.id}. {question.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[question.difficulty]}`}>
                        {question.difficulty}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                        {question.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {question.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {question.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>Time: {question.timeComplexity}</span>
                      <span>Space: {question.spaceComplexity}</span>
                    </div>
                  </div>
                </div>
                
                <Button
                  onClick={() => handleStartProblem(question.id)}
                  className={`${question.completed ? 'bg-success hover:bg-green-600' : 'bg-primary hover:bg-blue-700'}`}
                  data-testid={`button-start-${question.id}`}
                >
                  <Code className="h-4 w-4 mr-2" />
                  {question.completed ? 'Review' : 'Solve'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              <Code className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No problems found for the selected difficulty.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DSA;