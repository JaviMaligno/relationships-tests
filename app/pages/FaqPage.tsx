import React from 'react';
import Link from 'next/link';
import { SEO, StructuredData, createFAQSchema } from '../components/SEO';

export const FaqPage: React.FC = () => {
  // Define FAQ data for structured data
  const faqData = [
    {
      question: "What are the Love Languages?",
      answer: "The \"Five Love Languages\" is a concept developed by Dr. Gary Chapman. It describes the primary ways people express and experience love within relationships. These are: Words of Affirmation, Quality Time, Receiving Gifts, Acts of Service, and Physical Touch. Understanding your own and your partner's primary languages can help improve communication and connection."
    },
    {
      question: "What are Attachment Styles?",
      answer: "Attachment theory, originally developed by John Bowlby and Mary Ainsworth, describes the different ways people bond and connect in close relationships, particularly based on early experiences with caregivers. The main adult attachment styles are Secure, Anxious-Preoccupied, Dismissive-Avoidant, and Fearful-Avoidant (Disorganized). Knowing your style can provide insight into your relationship patterns."
    },
    {
      question: "How accurate are these tests?",
      answer: "Our tests are designed as educational tools for self-reflection and should not be considered professional psychological assessments. They are based on well-established psychological theories and can provide valuable insights, but results should be interpreted as starting points for personal growth rather than definitive diagnoses."
    },
    {
      question: "Are these tests scientifically validated?",
      answer: "Both Love Languages and Attachment Theory are grounded in psychological research. Love Languages theory by Dr. Gary Chapman is based on his observations from relationship counseling, while Attachment Theory has extensive empirical support from decades of psychological research by John Bowlby, Mary Ainsworth, and others."
    },
    {
      question: "Is my data saved? Are the tests anonymous?",
      answer: "No, your test answers and results are not saved or stored on our servers. All calculations happen directly in your browser. Your use of the tests is completely anonymous. Once you close the page, the data is gone."
    },
    {
      question: "How long do the tests take?",
      answer: "Each test typically takes around 5-10 minutes to complete, depending on how quickly you read and respond to the questions."
    },
    {
      question: "Can I retake the tests?",
      answer: "Yes, you can retake the tests as many times as you like. Since your responses aren't stored, each session starts fresh. Your results might vary depending on your current mindset, recent experiences, or personal growth."
    },
    {
      question: "Are the tests free?",
      answer: "Yes, both tests are completely free to take. We don't require registration or payment to access any of the assessment content."
    }
  ];

  return (
    <div className="page-container">
      <SEO
        title="Frequently Asked Questions | Relationship Tests FAQ"
        description="Get answers to common questions about our Love Languages and Attachment Style tests, including accuracy, privacy, and how to interpret your results."
        keywords="FAQ, love languages questions, attachment style questions, relationship test help, test accuracy"
        canonical="https://relationships-tests.vercel.app/faq"
        ogType="article"
      />
      
      <StructuredData
        schema={createFAQSchema(faqData)}
      />
      
      <h1>Frequently Asked Questions (FAQ)</h1>

      <section>
        <h2>About the Tests</h2>

        <article>
          <h3>What are the Love Languages?</h3>
          <p>
            The "Five Love Languages" is a concept developed by Dr. Gary Chapman.
            It describes the primary ways people express and experience love within relationships.
            These are: Words of Affirmation, Quality Time, Receiving Gifts, Acts of Service, and Physical Touch.
            Understanding your own and your partner's primary languages can help improve communication and connection.
            You can learn more on our <Link href="/love-languages-overview">Love Languages Overview page</Link>.
          </p>
        </article>

        <article>
          <h3>What are Attachment Styles?</h3>
          <p>
            Attachment theory, originally developed by John Bowlby and Mary Ainsworth, describes the different ways
            people bond and connect in close relationships, particularly based on early experiences with caregivers.
            The main adult attachment styles are Secure, Anxious-Preoccupied, Dismissive-Avoidant, and Fearful-Avoidant (Disorganized).
            Knowing your style can provide insight into your relationship patterns.
            Explore this further on our <Link href="/attachment-styles-overview">Attachment Styles Overview page</Link>.
          </p>
        </article>

        <article>
          <h3>How accurate are these tests?</h3>
          <p>
            Our tests are designed as educational tools for self-reflection and should not be considered professional psychological assessments.
            They are based on well-established psychological theories and can provide valuable insights, but results should be
            interpreted as starting points for personal growth rather than definitive diagnoses.
            For comprehensive evaluation or therapy, we recommend consulting with a licensed mental health professional.
          </p>
        </article>

        <article>
          <h3>Are these tests scientifically validated?</h3>
          <p>
            Both Love Languages and Attachment Theory are grounded in psychological research.
            Love Languages theory by Dr. Gary Chapman is based on his observations from relationship counseling,
            while Attachment Theory has extensive empirical support from decades of psychological research
            by John Bowlby, Mary Ainsworth, and others. However, our specific test implementations
            are educational tools, not clinical instruments.
          </p>
        </article>

      </section>

      <section>
        <h2>Using the Website</h2>

        <article>
          <h3>Is my data saved? Are the tests anonymous?</h3>
          <p>
            No, your test answers and results are not saved or stored on our servers. 
            All calculations happen directly in your browser.
            Your use of the tests is completely anonymous. Once you close the page, the data is gone.
            Please see our <Link href="/privacy">Privacy Policy</Link> for details.
          </p>
        </article>

        <article>
          <h3>How long do the tests take?</h3>
          <p>
            Each test typically takes around 5-10 minutes to complete, depending on how quickly you read and respond to the questions.
          </p>
        </article>

        <article>
          <h3>Can I retake the tests?</h3>
          <p>
            Yes, you can retake the tests as many times as you like. Since your responses aren't stored,
            each session starts fresh. Your results might vary depending on your current mindset,
            recent experiences, or personal growth.
          </p>
        </article>

        <article>
          <h3>Are the tests free?</h3>
          <p>
            Yes, both tests are completely free to take. We don't require registration or payment
            to access any of the assessment content.
          </p>
        </article>

        <article>
          <h3>I encountered a problem with the website. How can I report it?</h3>
          <p>
            We appreciate your feedback! If you find any bugs or have suggestions for improvement,
            please reach out to us via the details on our <Link href="/contact">Contact Us page</Link>.
          </p>
        </article>

      </section>
    </div>
  );
}; 