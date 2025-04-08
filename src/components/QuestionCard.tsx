import React from 'react';
import { LoveLanguageOption, AttachmentStyleOption } from '../contexts/TestContext';

interface Option<T> {
  key: T;
  text: string;
}

interface QuestionCardProps<T> {
  questionNumber: number;
  question: string;
  options: Option<T>[];
  selectedOptions: T[];
  onSelectOption: (option: T) => void;
  multiSelect?: boolean;
}

const QuestionCard = <T extends string>({
  questionNumber,
  question,
  options,
  selectedOptions,
  onSelectOption,
  multiSelect = false
}: QuestionCardProps<T>) => {
  return (
    <div className="question-card">
      <h3>Question {questionNumber}</h3>
      <p className="question-text">{question}</p>
      
      <div className="options-container">
        {options.map((option) => (
          <div 
            key={option.key} 
            className={`option ${selectedOptions.includes(option.key) ? 'selected' : ''}`}
            onClick={() => onSelectOption(option.key)}
          >
            <div className="option-key">{option.key}</div>
            <div className="option-text">{option.text}</div>
          </div>
        ))}
      </div>
      
      {multiSelect && (
        <p className="selection-hint">
          You can select multiple options. Click an option again to deselect it.
        </p>
      )}
    </div>
  );
};

export default QuestionCard; 