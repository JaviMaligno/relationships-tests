import React, { useState } from 'react';
import { useTest } from '../contexts/TestContext';
import { loveLanguagesQuestions, loveLanguagesCategories, loveLanguageDescriptions } from '../data/loveLanguagesData';
import { LoveLanguageOption } from '../contexts/TestContext';
import QuestionCard from './QuestionCard';
import TestNavigation from './TestNavigation';
import ResultsChart from './ResultsChart';

const LoveLanguageTest: React.FC = () => {
  const { 
    loveLanguageAnswers, 
    setLoveLanguageAnswer, 
    resetLoveLanguageAnswers,
    calculateLoveLanguageResults 
  } = useTest();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const currentQuestion = loveLanguagesQuestions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  const totalQuestions = loveLanguagesQuestions.length;
  
  const handleSelectOption = (option: LoveLanguageOption) => {
    const currentAnswers = loveLanguageAnswers[currentQuestion.id] || [];
    let newAnswers: LoveLanguageOption[];
    
    if (currentAnswers.includes(option)) {
      // Remove the option if it's already selected
      newAnswers = currentAnswers.filter(answer => answer !== option);
    } else {
      // Add the option if it's not already selected
      newAnswers = [...currentAnswers, option];
    }
    
    setLoveLanguageAnswer(currentQuestion.id, newAnswers);
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
    resetLoveLanguageAnswers();
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };
  
  const canGoBack = currentQuestionIndex > 0;
  const canGoForward = loveLanguageAnswers[currentQuestion.id]?.length > 0;
  
  // Prepare options for the current question
  const options = Object.entries(currentQuestion.options).map(([key, text]) => ({
    key: key as LoveLanguageOption,
    text
  }));
  
  // Results processing
  if (showResults) {
    const results = calculateLoveLanguageResults();
    
    // Process results for expressing love
    const expressData = Object.entries(results.express).map(([key, value]) => ({
      name: loveLanguagesCategories[key as keyof typeof loveLanguagesCategories],
      value,
      description: loveLanguageDescriptions[key as keyof typeof loveLanguageDescriptions]
    }));
    
    // Find the highest value for expressing love
    const highestExpressEntry = Object.entries(results.express).reduce(
      (max, [key, value]) => (value > max.value ? { key, value } : max),
      { key: '', value: 0 }
    );
    
    // Process results for receiving love
    const receiveData = Object.entries(results.receive).map(([key, value]) => ({
      name: loveLanguagesCategories[key as keyof typeof loveLanguagesCategories],
      value,
      description: loveLanguageDescriptions[key as keyof typeof loveLanguageDescriptions]
    }));
    
    // Find the highest value for receiving love
    const highestReceiveEntry = Object.entries(results.receive).reduce(
      (max, [key, value]) => (value > max.value ? { key, value } : max),
      { key: '', value: 0 }
    );
    
    // Maximum value for chart scaling (to keep both charts consistent)
    const maxValue = Math.max(
      ...Object.values(results.express),
      ...Object.values(results.receive)
    );
    
    return (
      <div className="test-results">
        <h2>Your Love Language Results</h2>
        
        <div className="results-section">
          <h3>How You Express Love</h3>
          <ResultsChart 
            data={expressData} 
            maxValue={maxValue} 
            highestKey={loveLanguagesCategories[highestExpressEntry.key as keyof typeof loveLanguagesCategories]} 
          />
          
          <div className="results-summary">
            <h4>Your primary way of expressing love is:</h4>
            <div className="primary-result">
              {loveLanguagesCategories[highestExpressEntry.key as keyof typeof loveLanguagesCategories]}
            </div>
            <p>{loveLanguageDescriptions[highestExpressEntry.key as keyof typeof loveLanguageDescriptions]}</p>
          </div>
        </div>
        
        <div className="results-section">
          <h3>How You Prefer to Receive Love</h3>
          <ResultsChart 
            data={receiveData} 
            maxValue={maxValue} 
            highestKey={loveLanguagesCategories[highestReceiveEntry.key as keyof typeof loveLanguagesCategories]} 
          />
          
          <div className="results-summary">
            <h4>Your primary way of receiving love is:</h4>
            <div className="primary-result">
              {loveLanguagesCategories[highestReceiveEntry.key as keyof typeof loveLanguagesCategories]}
            </div>
            <p>{loveLanguageDescriptions[highestReceiveEntry.key as keyof typeof loveLanguageDescriptions]}</p>
          </div>
        </div>
        
        <button className="restart-button" onClick={handleRestartTest}>
          Restart Test
        </button>
      </div>
    );
  }
  
  return (
    <div className="love-language-test">
      <h2>Love Languages Test</h2>
      <h3 className="test-section">
        {currentQuestion.section === 'express' 
          ? 'Section A: How You Express Love' 
          : 'Section B: How You Prefer to Receive Love'}
      </h3>
      
      <QuestionCard<LoveLanguageOption>
        questionNumber={questionNumber}
        question={currentQuestion.question}
        options={options}
        selectedOptions={loveLanguageAnswers[currentQuestion.id] || []}
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

export default LoveLanguageTest; 