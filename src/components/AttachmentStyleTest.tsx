import React, { useState, useRef, useMemo } from 'react';
import { useTest } from '../contexts/TestContext';
import { attachmentQuestions, attachmentStyleCategories, attachmentStyleDescriptions } from '../data/attachmentStyleData';
import { AttachmentStyleOption } from '../contexts/TestContext';
import QuestionCard from './QuestionCard';
import TestNavigation from './TestNavigation';
import ResultsChart from './ResultsChart';
import { downloadElementAsImage } from '../utils/downloadUtils';
import { shuffleArray } from '../utils/arrayUtils';
import { SEO, StructuredData, createQuizSchema } from './SEO';

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
  
  // Prepare options for the current question with shuffled content but ordered letters
  const { options, optionMapping } = useMemo(() => {
    // Get the original options and shuffle their texts
    const originalEntries = Object.entries(currentQuestion.options);
    const shuffledTexts = shuffleArray(originalEntries.map(([_, text]) => text));
    
    // Create new options with letters A-D but shuffled text content
    const letters: AttachmentStyleOption[] = ['A', 'B', 'C', 'D'];
    const newOptions = letters.map((letter, index) => ({
      key: letter,
      text: shuffledTexts[index]
    }));
    
    // Create mapping from display letter to original option key
    const mapping: Record<AttachmentStyleOption, AttachmentStyleOption> = {} as Record<AttachmentStyleOption, AttachmentStyleOption>;
    letters.forEach((letter, index) => {
      const originalText = shuffledTexts[index];
      const originalKey = originalEntries.find(([_, text]) => text === originalText)?.[0] as AttachmentStyleOption;
      mapping[letter] = originalKey;
    });
    
    return { options: newOptions, optionMapping: mapping };
  }, [currentQuestion.options]);
  
  // Modified handleSelectOption to use the mapping
  const handleSelectOptionMapped = (displayedOption: AttachmentStyleOption) => {
    const originalOption = optionMapping[displayedOption];
    const currentAnswers = attachmentStyleAnswers[currentQuestion.id] || [];
    let newAnswers: AttachmentStyleOption[];
    
    if (currentAnswers.includes(originalOption)) {
      // Remove the option if it's already selected
      newAnswers = currentAnswers.filter(answer => answer !== originalOption);
    } else {
      // Add the option if it's not already selected
      newAnswers = [...currentAnswers, originalOption];
    }
    
    setAttachmentStyleAnswer(currentQuestion.id, newAnswers);
  };
  
  // Get currently selected displayed options (reverse mapping)
  const getSelectedDisplayedOptions = () => {
    const originalAnswers = attachmentStyleAnswers[currentQuestion.id] || [];
    const reverseMapping: Record<AttachmentStyleOption, AttachmentStyleOption> = {} as Record<AttachmentStyleOption, AttachmentStyleOption>;
    Object.entries(optionMapping).forEach(([displayed, original]) => {
      reverseMapping[original as AttachmentStyleOption] = displayed as AttachmentStyleOption;
    });
    return originalAnswers.map(original => reverseMapping[original]).filter(Boolean);
  };
  
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