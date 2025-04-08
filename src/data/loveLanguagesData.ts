export interface LoveQuestion {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  section: 'express' | 'receive';
}

export const loveLanguagesCategories = {
  A: 'Words of Affirmation',
  B: 'Quality Time',
  C: 'Receiving Gifts',
  D: 'Acts of Service',
  E: 'Physical Touch'
};

export const loveLanguagesQuestions: LoveQuestion[] = [
  // Section A: How You Express Love
  {
    id: 1,
    question: 'When you want to show your partner you care, you usually...',
    options: {
      A: 'Write a heartfelt note or tell them something kind.',
      B: 'Set aside uninterrupted time for a one-on-one conversation.',
      C: 'Bring a small, thoughtful gift that reminds you of them.',
      D: 'Do a task for them (like cooking a meal or tidying up).',
      E: 'Initiate a warm hug, kiss, or gentle touch.',
    },
    section: 'express',
  },
  {
    id: 2,
    question: 'When celebrating a special occasion, you prefer to...',
    options: {
      A: 'Compose a loving message or give a sincere compliment.',
      B: 'Plan a special day together filled with activities you both enjoy.',
      C: 'Surprise them with a meaningful present.',
      D: 'Take care of errands or chores so they can relax.',
      E: 'Create an intimate moment with lots of physical affection.',
    },
    section: 'express',
  },
  {
    id: 3,
    question: 'If your partner seems down, you cheer them up by...',
    options: {
      A: 'Offering encouraging words or a loving affirmation.',
      B: 'Spending quality time with them to listen and talk.',
      C: 'Giving a small gift to brighten their day.',
      D: 'Helping them with tasks or responsibilities.',
      E: 'Comforting them with a warm embrace or cuddle.',
    },
    section: 'express',
  },
  {
    id: 4,
    question: 'In social settings, to show your affection you...',
    options: {
      A: 'Publicly compliment or praise your partner.',
      B: 'Steal a moment alone to share a quiet conversation.',
      C: 'Present a small token of affection discreetly.',
      D: 'Offer practical help or support if needed.',
      E: 'Give a reassuring touch or hold their hand.',
    },
    section: 'express',
  },
  {
    id: 5,
    question: 'When you feel grateful for your partner, you tend to...',
    options: {
      A: 'Verbally express your appreciation with heartfelt words.',
      B: 'Invite them for a special time together to celebrate.',
      C: 'Find or make a gift that symbolizes your gratitude.',
      D: 'Do something useful to lighten their load.',
      E: 'Show your affection through physical closeness.',
    },
    section: 'express',
  },
  {
    id: 6,
    question: 'When planning a surprise for your partner, you\'re most likely to...',
    options: {
      A: 'Write a love letter or record a personal message.',
      B: 'Organize a day or evening devoted solely to them.',
      C: 'Choose a unique gift that has a personal meaning.',
      D: 'Prepare something that helps solve a problem they face.',
      E: 'Arrange for an unexpected, cozy moment together.',
    },
    section: 'express',
  },
  {
    id: 7,
    question: 'On your partner\'s birthday, your ideal celebration includes...',
    options: {
      A: 'A series of sincere compliments and messages.',
      B: 'An uninterrupted, dedicated date where you talk and laugh together.',
      C: 'A carefully chosen gift that reflects their interests.',
      D: 'Doing something practical that eases their day-to-day challenges.',
      E: 'Lots of affectionate physical gestures throughout the day.',
    },
    section: 'express',
  },
  {
    id: 8,
    question: 'When expressing your love, you feel most authentic when you...',
    options: {
      A: 'Speak or write loving, affirming words.',
      B: 'Create moments that are exclusively for the two of you.',
      C: 'Use a tangible token (a gift) to symbolize your feelings.',
      D: 'Show your care by doing something helpful.',
      E: 'Connect through physical touch and closeness.',
    },
    section: 'express',
  },
  {
    id: 9,
    question: 'In everyday life, you show your love by...',
    options: {
      A: 'Frequently telling your partner how much they mean to you.',
      B: 'Prioritizing time together over other distractions.',
      C: 'Surprising them with little gifts "just because."',
      D: 'Assisting with daily chores or errands.',
      E: 'Offering spontaneous hugs or holding hands.',
    },
    section: 'express',
  },
  {
    id: 10,
    question: 'Overall, you believe the most powerful way to express love is through...',
    options: {
      A: 'Sincere verbal affirmations.',
      B: 'Dedicated, quality time.',
      C: 'Thoughtful, symbolic gifts.',
      D: 'Acts that make life easier.',
      E: 'Tender, affectionate touch.',
    },
    section: 'express',
  },
  // Section B: How You Prefer to Receive Love
  {
    id: 11,
    question: 'When your partner shows love, you feel most cherished when they...',
    options: {
      A: 'Tell you kind and affirming words.',
      B: 'Spend quality, undivided time with you.',
      C: 'Surprise you with a thoughtful gift.',
      D: 'Do something practical to help you out.',
      E: 'Embrace you with a warm hug or affectionate touch.',
    },
    section: 'receive',
  },
  {
    id: 12,
    question: 'If you could choose one gesture to feel truly appreciated, it would be...',
    options: {
      A: 'Receiving heartfelt compliments or a love letter.',
      B: 'Enjoying a quiet, uninterrupted moment together.',
      C: 'Getting a small, meaningful present.',
      D: 'Having your partner help with a task you find overwhelming.',
      E: 'Experiencing gentle physical affection like a cuddle or kiss.',
    },
    section: 'receive',
  },
  {
    id: 13,
    question: 'When you\'re upset, the action that comforts you most is...',
    options: {
      A: 'Hearing encouraging, kind words from your partner.',
      B: 'Spending quality time talking it out together.',
      C: 'Receiving a small gift that reminds you of happier times.',
      D: 'Having them step in to ease your burden with a helpful act.',
      E: 'Being enveloped in a warm, reassuring embrace.',
    },
    section: 'receive',
  },
  {
    id: 14,
    question: 'On a difficult day, what makes you feel most loved is...',
    options: {
      A: 'A sincere verbal expression of support.',
      B: 'An invitation to spend time together, away from distractions.',
      C: 'A surprise gesture or small present that shows they care.',
      D: 'A practical gesture, like taking care of a chore for you.',
      E: 'A gentle touch or affectionate caress.',
    },
    section: 'receive',
  },
  {
    id: 15,
    question: 'During celebrations, you feel most valued when your partner...',
    options: {
      A: 'Praises you or writes a special message.',
      B: 'Devotes an entire day or evening solely to you.',
      C: 'Presents you with a carefully chosen gift.',
      D: 'Organizes something to make your day easier or more enjoyable.',
      E: 'Shares lots of warm, loving physical contact.',
    },
    section: 'receive',
  },
  {
    id: 16,
    question: 'In moments of quiet togetherness, you feel deeply connected when your partner...',
    options: {
      A: 'Expresses their feelings with kind words.',
      B: 'Gives you their undivided attention.',
      C: 'Brings you a small token or memento of their love.',
      D: 'Helps you relax by taking on some of your responsibilities.',
      E: 'Stays close and offers comforting physical touch.',
    },
    section: 'receive',
  },
  {
    id: 17,
    question: 'When planning a relaxed evening at home, you most enjoy it if your partner...',
    options: {
      A: 'Communicates sweetly throughout the evening.',
      B: 'Is fully present and engaged in activities with you.',
      C: 'Surprises you with a little gift that makes you smile.',
      D: 'Offers to help prepare or clean up, making the night stress-free.',
      E: 'Makes sure you\'re physically close—sitting together, cuddling, etc.',
    },
    section: 'receive',
  },
  {
    id: 18,
    question: 'If you were to receive a surprise, you\'d be happiest when your partner...',
    options: {
      A: 'Sends you a loving text or handwritten note.',
      B: 'Arranges an unexpected outing or date just for the two of you.',
      C: 'Brings you a small, thoughtful present.',
      D: 'Helps you out with something you\'ve been struggling with.',
      E: 'Greets you with an affectionate, warm embrace.',
    },
    section: 'receive',
  },
  {
    id: 19,
    question: 'After a long day, the way you prefer to be comforted is...',
    options: {
      A: 'Listening to your partner express loving, supportive words.',
      B: 'Sharing quiet, quality time without distractions.',
      C: 'Being surprised with a small gift that shows you were in their thoughts.',
      D: 'Having your partner take on a burden or chore for you.',
      E: 'Receiving a gentle, relaxing touch or cuddle.',
    },
    section: 'receive',
  },
  {
    id: 20,
    question: 'Ultimately, the most satisfying way for you to receive love is by...',
    options: {
      A: 'Hearing sincere, affirming words that build you up.',
      B: 'Spending meaningful time together that strengthens your bond.',
      C: 'Being given a tangible reminder (a gift) of your partner\'s care.',
      D: 'Enjoying thoughtful acts that make your life easier.',
      E: 'Feeling loved through consistent physical closeness and touch.',
    },
    section: 'receive',
  },
];

export const loveLanguageDescriptions = {
  A: 'You value and give love through kind, affirming words and compliments.',
  B: 'You cherish and express love by dedicating focused, undivided attention.',
  C: 'You believe in the power of thoughtful gifts as tangible symbols of love.',
  D: 'You show care by doing helpful, practical acts for your partner.',
  E: 'You express and feel love most through warm, affectionate physical contact.'
}; 