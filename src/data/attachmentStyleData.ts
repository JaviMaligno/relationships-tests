export interface AttachmentQuestion {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

export const attachmentStyleCategories = {
  A: 'Secure',
  B: 'Anxious (Preoccupied)',
  C: 'Avoidant (Dismissive)',
  D: 'Disorganized (Fearful)'
};

export const attachmentQuestions: AttachmentQuestion[] = [
  {
    id: 1,
    question: 'When my partner shows vulnerability, I tend to feel…',
    options: {
      A: 'Warm and willing to support them.',
      B: 'Overwhelmed and anxious about being drawn in too deeply.',
      C: 'Uncomfortable, preferring to keep emotional distance.',
      D: 'Conflicted—sometimes I want to help, but other times I feel uncertain about getting close.',
    },
  },
  {
    id: 2,
    question: 'I find it easy to trust my partner.',
    options: {
      A: 'Yes—I trust them naturally.',
      B: 'I try to trust, but I often worry they might leave me.',
      C: 'Not really—I tend to be cautious and self-reliant.',
      D: 'My trust fluctuates; I sometimes trust, then doubt.',
    },
  },
  {
    id: 3,
    question: 'I feel comfortable with emotional intimacy.',
    options: {
      A: 'Absolutely—I enjoy deep connections.',
      B: 'I crave closeness but fear being too vulnerable.',
      C: 'I feel suffocated by too much intimacy.',
      D: 'I\'m torn—I want closeness yet feel threatened by it.',
    },
  },
  {
    id: 4,
    question: 'In moments of conflict with my partner, I typically…',
    options: {
      A: 'Address issues calmly and work together to resolve them.',
      B: 'Become anxious, worrying that the conflict means they might leave.',
      C: 'Withdraw or avoid the issue to maintain my independence.',
      D: 'Experience intense, mixed emotions that can lead to unpredictable responses.',
    },
  },
  {
    id: 5,
    question: 'When my partner is unavailable, I feel…',
    options: {
      A: 'Secure—I understand they have their own life.',
      B: 'Very anxious and worry about being abandoned.',
      C: 'Relieved, as I prefer my own space.',
      D: 'Uncertain, with feelings swinging between longing and resentment.',
    },
  },
  {
    id: 6,
    question: 'I view my relationships as generally…',
    options: {
      A: 'Stable, supportive, and balanced.',
      B: 'Intense, with a constant need for reassurance.',
      C: 'Independent, where I maintain clear personal boundaries.',
      D: 'Chaotic and unpredictable, with frequent highs and lows.',
    },
  },
  {
    id: 7,
    question: 'When I need support, I…',
    options: {
      A: 'Ask my partner openly for help.',
      B: 'Desire support but fear being seen as needy.',
      C: 'Prefer to handle problems on my own.',
      D: 'Sometimes ask for help, yet often feel conflicted about relying on others.',
    },
  },
  {
    id: 8,
    question: 'My expectations in a relationship are usually…',
    options: {
      A: 'Realistic and mutually supportive.',
      B: 'High, often accompanied by a fear of eventual rejection.',
      C: 'Low—I don\'t expect too much emotional involvement.',
      D: 'Uncertain, fluctuating between craving closeness and pushing it away.',
    },
  },
  {
    id: 9,
    question: 'I feel most at ease when…',
    options: {
      A: 'I share a deep, trusting connection with my partner.',
      B: 'I\'m close to my partner, though I sometimes worry about being abandoned.',
      C: 'I have plenty of personal space and independence.',
      D: 'I experience both closeness and distance, though it often leaves me confused.',
    },
  },
  {
    id: 10,
    question: 'When discussing our future together, I feel…',
    options: {
      A: 'Excited and confident about our shared plans.',
      B: 'Anxious, fearing that plans might lead to eventual disappointment.',
      C: 'Hesitant—I prefer not to plan too far ahead to avoid feeling tied down.',
      D: 'Ambivalent—sometimes hopeful, but other times scared of what intimacy might bring.',
    },
  },
  {
    id: 11,
    question: 'I communicate my needs to my partner by…',
    options: {
      A: 'Openly and honestly, without fear of judgment.',
      B: 'Often hesitantly, worrying they might not be met.',
      C: 'Rarely—I tend to keep my needs to myself.',
      D: 'In a mixed or inconsistent way, sometimes saying what I need and other times remaining silent.',
    },
  },
  {
    id: 12,
    question: 'When I receive affection from my partner, I feel…',
    options: {
      A: 'Grateful and secure.',
      B: 'Sometimes doubting if it\'s enough or genuine.',
      C: 'Uncomfortable or pressured by too much closeness.',
      D: 'Conflicted—sometimes it comforts me, sometimes it makes me uneasy.',
    },
  },
  {
    id: 13,
    question: 'In stressful times, I tend to…',
    options: {
      A: 'Seek comfort by sharing my feelings with my partner.',
      B: 'Cling to my partner for reassurance.',
      C: 'Withdraw and try to manage stress on my own.',
      D: 'Feel overwhelmed and unsure whether to seek closeness or pull away.',
    },
  },
  {
    id: 14,
    question: 'My partner\'s positive actions usually make me feel…',
    options: {
      A: 'Loved, secure, and appreciated.',
      B: 'Relieved yet still anxious about future shortcomings.',
      C: 'Indifferent, as I value my independence.',
      D: 'Confused—sometimes validated, sometimes even more uncertain.',
    },
  },
  {
    id: 15,
    question: 'I believe that most people, including my partner, are…',
    options: {
      A: 'Trustworthy and caring.',
      B: 'Likely to disappoint if they get too close.',
      C: 'Not dependable for deep emotional support.',
      D: 'Unpredictable, making it hard to know whom to rely on.',
    },
  },
  {
    id: 16,
    question: 'When I\'m alone, I generally feel…',
    options: {
      A: 'Content and self-sufficient.',
      B: 'Lonely and anxious about missing connection.',
      C: 'Comfortable, enjoying my personal space.',
      D: 'Overwhelmed by conflicting emotions—sometimes at peace, sometimes distressed.',
    },
  },
  {
    id: 17,
    question: 'If a disagreement arises, I prefer to…',
    options: {
      A: 'Talk it out calmly and resolve the issue together.',
      B: 'Worry excessively about the implications for our relationship.',
      C: 'Avoid the conversation to prevent further discomfort.',
      D: 'Experience a mix of wanting resolution but also feeling paralyzed by uncertainty.',
    },
  },
  {
    id: 18,
    question: 'My approach to intimacy is best described as…',
    options: {
      A: 'Embracing and fulfilling.',
      B: 'Deeply desired but fraught with fears of rejection.',
      C: 'Cautious and guarded.',
      D: 'Ambivalent and inconsistent, with swings between desire and fear.',
    },
  },
  {
    id: 19,
    question: 'I usually view my partner\'s behavior as…',
    options: {
      A: 'Supportive and caring.',
      B: 'Occasionally inconsistent, which makes me worry.',
      C: 'Distant or self-sufficient, reinforcing my need for independence.',
      D: 'Mixed and unpredictable, leaving me unsure about their intentions.',
    },
  },
  {
    id: 20,
    question: 'Overall, when it comes to trusting and relying on my partner, I feel…',
    options: {
      A: 'Secure and confident.',
      B: 'Constantly on edge, seeking reassurance.',
      C: 'Reluctant to rely on others, preferring self-reliance.',
      D: 'Inconsistent—sometimes trusting, sometimes distrusting.',
    },
  },
];

export const attachmentStyleDescriptions = {
  A: {
    title: 'Secure Attachment',
    description: 'Individuals with a secure attachment style generally feel comfortable with intimacy and interdependence. They trust their partners, feel worthy of love, and can effectively communicate their needs and feelings. They navigate conflict constructively and maintain a healthy balance between closeness and independence.',
    implications: 'You likely form stable, trusting, and satisfying relationships. You are comfortable expressing vulnerability and responding supportively to your partner\'s needs. You handle relationship stress well and don\'t fear abandonment or suffocation by intimacy.',
    tips: 'Continue nurturing open communication and mutual support. Be mindful that partners with different attachment styles may need different forms of reassurance or space; practice empathy and understanding. Explore deeper emotional expression and connection.'
  },
  B: {
    title: 'Anxious (Preoccupied) Attachment',
    description: 'Those with an anxious attachment style crave high levels of intimacy, approval, and responsiveness from partners, often fearing abandonment. They can be overly dependent, doubt their self-worth, and may become demanding or clingy during stress or perceived threats to the relationship.',
    implications: 'You might experience relationship anxiety, jealousy, or worry about your partner\'s commitment. You may seek constant reassurance and struggle with self-soothing during conflicts or separations. Your emotional highs and lows can be intense.',
    tips: 'Develop self-soothing techniques and build self-esteem outside the relationship. Practice communicating needs calmly without demandingness. Learn to tolerate uncertainty and trust your partner more gradually. Recognize triggers for anxiety and develop coping strategies. Cognitive behavioral therapy (CBT) can be helpful.'
  },
  C: {
    title: 'Avoidant (Dismissive) Attachment',
    description: 'Individuals with a dismissive-avoidant style value independence and self-sufficiency highly. They tend to suppress or deny their feelings and needs, often feeling uncomfortable with deep emotional closeness. They may appear emotionally distant, withdraw during conflict, and prioritize personal freedom over relationship demands.',
    implications: 'You might struggle with emotional vulnerability and find it hard to depend on others or let others depend on you. You may keep partners at arm\'s length, avoid conflict, or shut down emotionally. You might prioritize work or hobbies over relationship time.',
    tips: 'Practice identifying and expressing your emotions gradually. Learn to recognize and value the benefits of interdependence. Challenge beliefs about self-sufficiency being the only way to be strong. Work on tolerating emotional discomfort and engaging more openly during conflicts. Therapy can help explore underlying fears of intimacy.'
  },
  D: {
    title: 'Disorganized (Fearful-Avoidant) Attachment',
    description: 'This style is characterized by conflicting desires for and fears of intimacy. Individuals may simultaneously crave closeness and feel uncomfortable or threatened by it. Their behavior can seem inconsistent or confusing, oscillating between approach and avoidance. This often stems from frightening or inconsistent early caregiver experiences.',
    implications: 'Relationships can feel chaotic and unstable. You might struggle with trust, experience intense mood swings, and find it hard to regulate emotions during stress or conflict. You may sabotage relationships due to underlying fears. Past trauma may play a significant role.',
    tips: 'Seek therapy, particularly trauma-informed therapy, to understand and process past experiences. Work on developing emotional regulation skills and building a coherent sense of self. Practice recognizing conflicting feelings without being overwhelmed. Learn to build trust gradually in safe relationships. Self-compassion is crucial.'
  }
}; 