import React, { useRef } from 'react';
import { useTest } from '../contexts/TestContext';
import { attachmentQuestions, attachmentStyleCategories, attachmentStyleDescriptions } from '../data/attachmentStyleData';
import { AttachmentStyleOption } from '../contexts/TestContext';
import QuestionCard from './QuestionCard';
import TestNavigation from './TestNavigation';
import ResultsChart from './ResultsChart';
import { downloadElementAsImage } from '../utils/downloadUtils';
import { SEO, StructuredData, createQuizSchema } from './SEO';
import { useTestRunner } from '../hooks/useTestRunner';

const AttachmentStyleTest: React.FC = () => {
  const { 
    attachmentStyleAnswers, 
    setAttachmentStyleAnswer, 
    resetAttachmentStyleAnswers,
    calculateAttachmentStyleResults 
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
  } = useTestRunner<AttachmentStyleOption, number>({
    questions: attachmentQuestions,
    answers: attachmentStyleAnswers,
    setAnswer: setAttachmentStyleAnswer,
    resetAnswers: resetAttachmentStyleAnswers,
  });

  // Results processing
  if (showResults) {
    const results = calculateAttachmentStyleResults();
    
    // Process results for chart display
    const resultsData = Object.entries(results).map(([key, value]) => ({
      name: attachmentStyleCategories[key as keyof typeof attachmentStyleCategories],
      value,
      description: attachmentStyleDescriptions[key as keyof typeof attachmentStyleDescriptions].title
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
                {attachmentStyleDescriptions[highestEntry.key as keyof typeof attachmentStyleDescriptions].title}
              </div>
              <p><strong>Description:</strong> {attachmentStyleDescriptions[highestEntry.key as keyof typeof attachmentStyleDescriptions].description}</p>
              <p><strong>Implications:</strong> {attachmentStyleDescriptions[highestEntry.key as keyof typeof attachmentStyleDescriptions].implications}</p>
              <p><strong>Tips for Growth:</strong> {attachmentStyleDescriptions[highestEntry.key as keyof typeof attachmentStyleDescriptions].tips}</p>
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
      <SEO
        title="Attachment Style Test | Discover Your Relationship Patterns"
        description="Take our free Attachment Style test to understand your relationship patterns and emotional bonds. Based on John Bowlby and Mary Ainsworth's attachment theory."
        keywords="attachment style test, attachment theory, John Bowlby, Mary Ainsworth, secure attachment, anxious attachment, avoidant attachment, disorganized attachment"
        canonical="https://relationships-tests.vercel.app/attachment-styles"
        ogType="website"
      />
      
      <StructuredData
        schema={createQuizSchema(
          'Attachment Style Test',
          'Discover your attachment style and understand your relationship patterns based on attachment theory developed by John Bowlby and Mary Ainsworth.',
          'Attachment Theory and Relationship Psychology'
        )}
      />
      
      <div className="test-introduction">
        <h3>Understanding Attachment Styles</h3>
        <p>
          Attachment theory, originally developed by John Bowlby and later expanded by Mary Ainsworth, describes the different ways people form emotional bonds and connect with others, particularly in close relationships. Our early experiences with caregivers shape our attachment patterns, influencing how we perceive intimacy, handle conflict, and seek or avoid closeness as adults. Common styles include Secure, Anxious (Preoccupied), Avoidant (Dismissive), and Disorganized (Fearful). Understanding your own attachment style can provide valuable insights into your relationship dynamics and help foster healthier connections. This test aims to identify your predominant attachment style based on your responses.
        </p>
      </div>
      <h2>Attachment Style Test</h2>
      
      <QuestionCard<AttachmentStyleOption>
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

export default AttachmentStyleTest; 