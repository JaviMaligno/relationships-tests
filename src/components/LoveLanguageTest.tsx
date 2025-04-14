import React, { useState, useRef } from 'react';
import { useTest } from '../contexts/TestContext';
import { loveLanguagesQuestions, loveLanguagesCategories, loveLanguageDescriptions } from '../data/loveLanguagesData';
import { LoveLanguageOption } from '../contexts/TestContext';
import QuestionCard from './QuestionCard';
import TestNavigation from './TestNavigation';
import ResultsChart from './ResultsChart';
import { downloadElementAsImage } from '../utils/downloadUtils';

const LoveLanguageTest: React.FC = () => {
  const { 
    loveLanguageAnswers, 
    setLoveLanguageAnswer, 
    resetLoveLanguageAnswers,
    calculateLoveLanguageResults 
  } = useTest();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  
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
    
    // Define the desired order for chart bars
    const desiredOrder: LoveLanguageOption[] = ['B', 'D', 'A', 'E', 'C'];
    const desiredNameOrder = desiredOrder.map(key => loveLanguagesCategories[key]);

    // Helper function to sort data based on the desired order
    const sortData = (data: Array<{ name: string; value: number; description: string }>) => {
      return data.sort((a, b) => {
        const indexA = desiredNameOrder.indexOf(a.name);
        const indexB = desiredNameOrder.indexOf(b.name);
        return indexA - indexB;
      });
    };
    
    // Process results for expressing love
    const expressDataUnsorted = Object.entries(results.express).map(([key, value]) => ({
      name: loveLanguagesCategories[key as keyof typeof loveLanguagesCategories],
      value,
      description: loveLanguageDescriptions[key as keyof typeof loveLanguageDescriptions]
    }));
    const expressData = sortData(expressDataUnsorted);
    
    // Find the highest value for expressing love
    const highestExpressEntry = Object.entries(results.express).reduce(
      (max, [key, value]) => (value > max.value ? { key, value } : max),
      { key: '', value: 0 }
    );
    
    // Process results for receiving love
    const receiveDataUnsorted = Object.entries(results.receive).map(([key, value]) => ({
      name: loveLanguagesCategories[key as keyof typeof loveLanguagesCategories],
      value,
      description: loveLanguageDescriptions[key as keyof typeof loveLanguageDescriptions]
    }));
    const receiveData = sortData(receiveDataUnsorted);
    
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
      <div className="test-results" ref={resultsRef}>
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
        
        <button className="download-button" onClick={() => downloadElementAsImage(resultsRef, 'love-language-results.png')}>
          Download Results
        </button>

        <button className="restart-button" onClick={handleRestartTest} style={{ marginTop: '10px' }}>
          Restart Test
        </button>
      </div>
    );
  }
  
  return (
    <div className="love-language-test">
      <div className="test-introduction">
        <h3>Understanding Love Languages</h3>
        <p>
          Developed by Dr. Gary Chapman, the concept of the Five Love Languages helps us understand how people prefer to give and receive love. These languages—Words of Affirmation, Quality Time, Receiving Gifts, Acts of Service, and Physical Touch—represent different ways individuals express and experience affection. Identifying your primary love language, as well as your partner's, can significantly improve communication and strengthen your relationship by ensuring you both feel genuinely understood and cherished. This test will help you discover your dominant languages for both expressing and receiving love.
        </p>
      </div>
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