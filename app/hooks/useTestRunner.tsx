import { useState, useMemo, useEffect } from 'react';
import { shuffleArray } from '../utils/arrayUtils';

type Option = string;

interface Question<ID> {
  id: ID;
  question: string;
  options: Record<string, string>;
  section?: string;
}

interface UseTestRunnerProps<T extends Option, ID> {
  questions: Question<ID>[];
  answers: Record<string, T[]>;
  setAnswer: (questionId: ID, answers: T[]) => void;
  resetAnswers: () => void;
}

export const useTestRunner = <T extends Option, ID>({
  questions,
  answers,
  setAnswer,
  resetAnswers,
}: UseTestRunnerProps<T, ID>) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  const totalQuestions = questions.length;

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRestartTest = () => {
    resetAnswers();
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  const canGoBack = currentQuestionIndex > 0;
  const canGoForward = !!answers[currentQuestion.id as any]?.length;

  const [shuffledData, setShuffledData] = useState<{ options: { key: T; text: string }[]; optionMapping: Record<string, T> } | null>(null);

  useEffect(() => {
    const originalEntries = Object.entries(currentQuestion.options);
    const shuffledTexts = shuffleArray(originalEntries.map(([, text]) => text));
    
    const letters = Object.keys(currentQuestion.options) as T[];
    const newOptions = letters.map((letter, index) => ({
      key: letter,
      text: shuffledTexts[index],
    }));

    const mapping: Record<string, T> = {};
    letters.forEach((letter, index) => {
      const originalText = shuffledTexts[index];
      const originalKey = originalEntries.find(
        ([, text]) => text === originalText
      )?.[0] as T;
      mapping[letter] = originalKey;
    });

    setShuffledData({ options: newOptions, optionMapping: mapping });
  }, [currentQuestion]);

  const handleSelectOptionMapped = (displayedOption: T) => {
    if (!shuffledData) return;
    const originalOption = shuffledData.optionMapping[displayedOption];
    const currentAnswers = answers[currentQuestion.id as any] || [];
    let newAnswers: T[];

    if (currentAnswers.includes(originalOption)) {
      newAnswers = currentAnswers.filter((answer) => answer !== originalOption);
    } else {
      newAnswers = [...currentAnswers, originalOption];
    }

    setAnswer(currentQuestion.id, newAnswers);
  };

  const getSelectedDisplayedOptions = () => {
    if (!shuffledData) return [];
    const originalAnswers = answers[currentQuestion.id as any] || [];
    const reverseMapping: Record<string, T> = {};
    Object.entries(shuffledData.optionMapping).forEach(([displayed, original]) => {
      reverseMapping[original as T] = displayed as T;
    });
    return originalAnswers.map((original) => reverseMapping[original]).filter(Boolean);
  };

  return {
    currentQuestion,
    currentQuestionIndex,
    questionNumber,
    totalQuestions,
    showResults,
    options: shuffledData ? shuffledData.options : [],
    handleRestartTest,
    getSelectedDisplayedOptions,
    handleSelectOptionMapped,
    navigationProps: {
      currentQuestion: questionNumber,
      totalQuestions,
      canGoBack,
      canGoForward,
      onBack: handleBack,
      onNext: handleNext,
      onSubmit: handleSubmit,
    },
  };
}; 