import React from 'react';

interface TestNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  canGoBack: boolean;
  canGoForward: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

const TestNavigation: React.FC<TestNavigationProps> = ({
  currentQuestion,
  totalQuestions,
  canGoBack,
  canGoForward,
  onBack,
  onNext,
  onSubmit
}) => {
  const isLastQuestion = currentQuestion === totalQuestions;

  return (
    <div className="test-navigation">
      <div className="navigation-progress">
        <div className="progress-text">
          Question {currentQuestion} of {totalQuestions}
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="navigation-buttons">
        <button 
          className="back-button" 
          onClick={onBack} 
          disabled={!canGoBack}
        >
          Back
        </button>
        
        {isLastQuestion ? (
          <button 
            className="submit-button" 
            onClick={onSubmit} 
            disabled={!canGoForward}
          >
            Submit
          </button>
        ) : (
          <button 
            className="next-button" 
            onClick={onNext} 
            disabled={!canGoForward}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default TestNavigation; 