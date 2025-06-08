import React, { createContext, useState, useContext, ReactNode } from 'react';

// Types for Love Language answers - now arrays of options
export type LoveLanguageOption = 'A' | 'B' | 'C' | 'D' | 'E';
type LoveLanguageAnswers = Record<number, LoveLanguageOption[]>;

// Types for Attachment Style answers - now arrays of options
export type AttachmentStyleOption = 'A' | 'B' | 'C' | 'D';
type AttachmentStyleAnswers = Record<number, AttachmentStyleOption[]>;

interface TestContextType {
  loveLanguageAnswers: LoveLanguageAnswers;
  attachmentStyleAnswers: AttachmentStyleAnswers;
  setLoveLanguageAnswer: (questionId: number, answer: LoveLanguageOption[]) => void;
  setAttachmentStyleAnswer: (questionId: number, answer: AttachmentStyleOption[]) => void;
  resetLoveLanguageAnswers: () => void;
  resetAttachmentStyleAnswers: () => void;
  calculateLoveLanguageResults: () => { express: Record<string, number>, receive: Record<string, number> };
  calculateAttachmentStyleResults: () => Record<string, number>;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

interface TestProviderProps {
  children: ReactNode;
}

export const TestProvider: React.FC<TestProviderProps> = ({ children }) => {
  const [loveLanguageAnswers, setLoveLanguageAnswers] = useState<LoveLanguageAnswers>({});
  const [attachmentStyleAnswers, setAttachmentStyleAnswers] = useState<AttachmentStyleAnswers>({});

  const setLoveLanguageAnswer = (questionId: number, answers: LoveLanguageOption[]) => {
    setLoveLanguageAnswers(prev => ({
      ...prev,
      [questionId]: answers
    }));
  };

  const setAttachmentStyleAnswer = (questionId: number, answers: AttachmentStyleOption[]) => {
    setAttachmentStyleAnswers(prev => ({
      ...prev,
      [questionId]: answers
    }));
  };

  const resetLoveLanguageAnswers = () => {
    setLoveLanguageAnswers({});
  };

  const resetAttachmentStyleAnswers = () => {
    setAttachmentStyleAnswers({});
  };

  const calculateLoveLanguageResults = () => {
    // Initialize counters for each love language option
    const expressResults: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    const receiveResults: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };

    // Count each answer based on question ID (1-10 = express, 11-20 = receive)
    Object.entries(loveLanguageAnswers).forEach(([questionId, answers]) => {
      const id = parseInt(questionId);
      answers.forEach(answer => {
        if (id >= 1 && id <= 10) {
          expressResults[answer]++;
        } else if (id >= 11 && id <= 20) {
          receiveResults[answer]++;
        }
      });
    });

    return { express: expressResults, receive: receiveResults };
  };

  const calculateAttachmentStyleResults = () => {
    // Initialize counters for each attachment style option
    const results: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

    // Count each answer
    Object.entries(attachmentStyleAnswers).forEach(([_, answers]) => {
      answers.forEach(answer => {
        results[answer]++;
      });
    });

    return results;
  };

  const value = {
    loveLanguageAnswers,
    attachmentStyleAnswers,
    setLoveLanguageAnswer,
    setAttachmentStyleAnswer,
    resetLoveLanguageAnswers,
    resetAttachmentStyleAnswers,
    calculateLoveLanguageResults,
    calculateAttachmentStyleResults
  };

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};

export const useTest = (): TestContextType => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
}; 