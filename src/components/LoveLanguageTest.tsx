import React, { useRef } from 'react';
import { useTest } from '../contexts/TestContext';
import { loveLanguagesQuestions, loveLanguagesCategories, loveLanguageDescriptions } from '../data/loveLanguagesData';
import { LoveLanguageOption } from '../contexts/TestContext';
import QuestionCard from './QuestionCard';
import TestNavigation from './TestNavigation';
import ResultsChart from './ResultsChart';
import { downloadElementAsImage } from '../utils/downloadUtils';
import { SEO, StructuredData, createQuizSchema, createWebSiteSchema } from './SEO';
import { useTestRunner } from '../hooks/useTestRunner';

const LoveLanguageTest: React.FC = () => {
  const { 
    loveLanguageAnswers, 
    setLoveLanguageAnswer, 
    resetLoveLanguageAnswers,
    calculateLoveLanguageResults 
  } = useTest();
  
  const resultsRef = useRef<HTMLDivElement>(null);

  const {
    currentQuestion,
    questionNumber,
    showResults,
    options,
    handleRestartTest,
    getSelectedDisplayedOptions,
    handleSelectOptionMapped,
    navigationProps,
  } = useTestRunner<LoveLanguageOption, number>({
    questions: loveLanguagesQuestions,
    answers: loveLanguageAnswers,
    setAnswer: setLoveLanguageAnswer,
    resetAnswers: resetLoveLanguageAnswers,
  });
  
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
      description: loveLanguageDescriptions[key as keyof typeof loveLanguageDescriptions].title
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
      description: loveLanguageDescriptions[key as keyof typeof loveLanguageDescriptions].title
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
              {loveLanguageDescriptions[highestExpressEntry.key as keyof typeof loveLanguageDescriptions].title}
            </div>
            <p>{loveLanguageDescriptions[highestExpressEntry.key as keyof typeof loveLanguageDescriptions].description}</p>
            <p><strong>Implications:</strong> {loveLanguageDescriptions[highestExpressEntry.key as keyof typeof loveLanguageDescriptions].expressing.implications}</p>
            <div className="tips-section">
              <h5>Tips for Expressing This Language:</h5>
              <p>{loveLanguageDescriptions[highestExpressEntry.key as keyof typeof loveLanguageDescriptions].expressing.tips}</p>
            </div>
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
              {loveLanguageDescriptions[highestReceiveEntry.key as keyof typeof loveLanguageDescriptions].title}
            </div>
            <p>{loveLanguageDescriptions[highestReceiveEntry.key as keyof typeof loveLanguageDescriptions].description}</p>
            <p><strong>Implications:</strong> {loveLanguageDescriptions[highestReceiveEntry.key as keyof typeof loveLanguageDescriptions].receiving.implications}</p>
            <div className="tips-section">
              <h5>Tips for Receiving This Language:</h5>
              <p>{loveLanguageDescriptions[highestReceiveEntry.key as keyof typeof loveLanguageDescriptions].receiving.tips}</p>
            </div>
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
      <SEO
        title="Love Languages Test | Discover How You Give & Receive Love"
        description="Take our free Love Languages test to discover your primary way of expressing and receiving love. Based on Dr. Gary Chapman's 5 Love Languages theory."
        keywords="love languages test, five love languages, Dr Gary Chapman, words of affirmation, quality time, physical touch, acts of service, receiving gifts"
        canonical="https://relationships-tests.vercel.app/"
        ogType="website"
      />
      
      <StructuredData
        schema={createWebSiteSchema(
          'Relationship Self-Assessment Tests',
          'https://relationships-tests.vercel.app',
          'Free interactive tests to understand and improve your relationships. Discover your Love Language and Attachment Style.'
        )}
      />
      
      <StructuredData
        schema={createQuizSchema(
          'Love Languages Test',
          'Discover your primary love language for expressing and receiving love based on Dr. Gary Chapman\'s Five Love Languages theory.',
          'Love Languages and Relationship Communication'
        )}
      />
      
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
        selectedOptions={getSelectedDisplayedOptions()}
        onSelectOption={handleSelectOptionMapped}
        multiSelect={true}
      />
      
      <TestNavigation
        {...navigationProps}
      />
    </div>
  );
};

export default LoveLanguageTest; 