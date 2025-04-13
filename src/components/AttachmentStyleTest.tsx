import React, { useState, useRef } from 'react';
import { useTest } from '../contexts/TestContext';
import { attachmentQuestions, attachmentStyleCategories, attachmentStyleDescriptions } from '../data/attachmentStyleData';
import { AttachmentStyleOption } from '../contexts/TestContext';
import QuestionCard from './QuestionCard';
import TestNavigation from './TestNavigation';
import ResultsChart from './ResultsChart';
import { downloadElementAsImage } from '../utils/downloadUtils';

const AttachmentStyleTest: React.FC = () => {
  const { 
    attachmentStyleAnswers, 
    setAttachmentStyleAnswer, 
    resetAttachmentStyleAnswers,
    calculateAttachmentStyleResults 
  } = useTest();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const currentQuestion = attachmentQuestions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  const totalQuestions = attachmentQuestions.length;
  
  const handleSelectOption = (option: AttachmentStyleOption) => {
    const currentAnswers = attachmentStyleAnswers[currentQuestion.id] || [];
    let newAnswers: AttachmentStyleOption[];
    
    if (currentAnswers.includes(option)) {
      // Remove the option if it's already selected
      newAnswers = currentAnswers.filter(answer => answer !== option);
    } else {
      // Add the option if it's not already selected
      newAnswers = [...currentAnswers, option];
    }
    
    setAttachmentStyleAnswer(currentQuestion.id, newAnswers);
  };
  
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };
  
  const handleSubmit = () => {
    setShowResults(true);
  };
  
  const handleRestartTest = () => {
    resetAttachmentStyleAnswers();
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };
  
  const canGoBack = currentQuestionIndex > 0;
  const canGoForward = attachmentStyleAnswers[currentQuestion.id]?.length > 0;
  
  // Prepare options for the current question
  const options = Object.entries(currentQuestion.options).map(([key, text]) => ({
    key: key as AttachmentStyleOption,
    text
  }));
  
  // Results processing
  if (showResults) {
    const results = calculateAttachmentStyleResults();
    
    // Process results for chart display
    const resultsData = Object.entries(results).map(([key, value]) => ({
      name: attachmentStyleCategories[key as keyof typeof attachmentStyleCategories],
      value,
      description: attachmentStyleDescriptions[key as keyof typeof attachmentStyleDescriptions]
    }));
    
    // Find the highest value
    const highestEntry = Object.entries(results).reduce(
      (max, [key, value]) => (value > max.value ? { key, value } : max),
      { key: '', value: 0 }
    );
    
    // Maximum value for chart scaling
    const maxValue = Math.max(...Object.values(results));

    return (
      <>
        <div className="test-results" ref={resultsRef}>
          <h2>Your Attachment Style Results</h2>
          
          <div className="results-section">
            <ResultsChart 
              data={resultsData} 
              maxValue={maxValue} 
              highestKey={attachmentStyleCategories[highestEntry.key as keyof typeof attachmentStyleCategories]} 
            />
            
            <div className="results-summary">
              <h4>Your primary attachment style is:</h4>
              <div className="primary-result">
                {attachmentStyleCategories[highestEntry.key as keyof typeof attachmentStyleCategories]}
              </div>
              <p>{attachmentStyleDescriptions[highestEntry.key as keyof typeof attachmentStyleDescriptions]}</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center' }}> 
          <button className="download-button" onClick={() => downloadElementAsImage(resultsRef, 'attachment-style-results.png')}>
              Download Results
          </button>
          <button className="restart-button" onClick={handleRestartTest} style={{ marginTop: '10px' }}>
            Restart Test
          </button>
        </div>
      </>
    );
  }
  
  return (
    <div className="attachment-style-test">
      <h2>Attachment Style Test</h2>
      
      <QuestionCard<AttachmentStyleOption>
        questionNumber={questionNumber}
        question={currentQuestion.question}
        options={options}
        selectedOptions={attachmentStyleAnswers[currentQuestion.id] || []}
        onSelectOption={handleSelectOption}
        multiSelect={true}
      />
      
      <TestNavigation
        currentQuestion={questionNumber}
        totalQuestions={totalQuestions}
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        onBack={handleBack}
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AttachmentStyleTest; 