import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';

const SpokenEnglish = () => {
  const [isRecording, setIsRecording] = useState(false);

  // TODO: Implement Web Audio API for speech recording
  const handleStartRecording = async () => {
    try {
      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsRecording(true);
      
      // TODO: Implement actual recording logic with MediaRecorder API
      console.log('Started recording...');
      
      // TODO: Process audio and send to AI service for analysis
      
      // Auto-stop after demonstration (in real app, user would control this)
      setTimeout(() => {
        setIsRecording(false);
        stream.getTracks().forEach(track => track.stop());
        console.log('Recording stopped');
      }, 3000);
      
    } catch (error) {
      console.error('Error accessing microphone:', error);
      // TODO: Show user-friendly error message
    }
  };

  // Mock feedback data - in real app this would come from AI analysis
  const feedbackMetrics = [
    { category: 'Fluency', score: 85, change: '+5%' },
    { category: 'Grammar', score: 92, change: '+3%' },
    { category: 'Confidence', score: 78, change: '+2%' }
  ];

  const detailedFeedback = [
    {
      category: 'Fluency',
      comment: 'Your speech was clear and easy to understand. Maintain this level of clarity in future recordings.',
      type: 'positive'
    },
    {
      category: 'Grammar',
      comment: 'Minor grammatical errors were detected. Focus on sentence structure and verb agreement.',
      type: 'improvement'
    },
    {
      category: 'Confidence',
      comment: 'You spoke with confidence and enthusiasm. Keep up the positive attitude!',
      type: 'positive'
    }
  ];

  const improvementTips = [
    'Practice speaking regularly to improve fluency.',
    'Review basic grammar rules to avoid common errors.',
    'Maintain eye contact and smile to project confidence.'
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Soft Skills Training</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Improve your communication, presentation, and interpersonal skills for better placement outcomes.
          </p>
        </div>

        {/* Practice Session */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Practice Session</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recording Interface */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg mb-6 flex items-center justify-center">
                {isRecording ? (
                  <MicOff className="h-16 w-16 text-red-500" />
                ) : (
                  <Mic className="h-16 w-16 text-primary" />
                )}
              </div>
              <div className={`text-sm mb-4 ${isRecording ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
                {isRecording ? 'Recording in progress...' : 'Ready to record'}
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Record Your Speech</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Click the button below to start recording your speech. Speak clearly and naturally.
              </p>
              <Button 
                onClick={handleStartRecording}
                disabled={isRecording}
                className={`w-full ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-blue-700'}`}
                data-testid="button-start-recording"
              >
                {isRecording ? 'Recording...' : 'Start Recording'}
              </Button>
            </div>
          </div>
        </div>

        {/* Feedback Summary */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Feedback Summary</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {feedbackMetrics.map((metric, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center"
                data-testid={`metric-${metric.category.toLowerCase()}`}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{metric.category}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{metric.score}%</div>
                <p className="text-sm text-success">{metric.change}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Feedback */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Detailed Feedback</h2>
          
          <div className="space-y-6">
            {detailedFeedback.map((feedback, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                data-testid={`feedback-${feedback.category.toLowerCase()}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  feedback.type === 'positive' ? 'bg-green-100' : 'bg-yellow-100'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    feedback.type === 'positive' ? 'bg-green-600' : 'bg-yellow-600'
                  }`}></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feedback.category}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feedback.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips for Improvement */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tips for Improvement</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <ul className="space-y-4">
              {improvementTips.map((tip, index) => (
                <li key={index} className="flex items-start space-x-3" data-testid={`tip-${index}`}>
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SpokenEnglish;
