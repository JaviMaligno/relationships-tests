import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

export const FaqPage: React.FC = () => {
  return (
    <div className="page-container">
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
            You can learn more on our <Link to="/love-languages-overview">Love Languages Overview page</Link>.
          </p>
        </article>

        <article>
          <h3>What are Attachment Styles?</h3>
          <p>
            Attachment theory, originally developed by John Bowlby and Mary Ainsworth, describes the different ways
            people bond and connect in close relationships, particularly based on early experiences with caregivers.
            The main adult attachment styles are Secure, Anxious-Preoccupied, Dismissive-Avoidant, and Fearful-Avoidant (Disorganized).
            Knowing your style can provide insight into your relationship patterns.
            Explore this further on our <Link to="/attachment-styles-overview">Attachment Styles Overview page</Link>.
          </p>
        </article>

        <article>
          <h3>How accurate are these tests?</h3>
          <p>
            These self-assessment tests are designed for educational purposes and self-reflection. They are based on established
            psychological concepts but are simplified representations.
            While they can offer valuable insights into your preferences and patterns, they are not clinical diagnostic tools.
            Test results can be influenced by your current mood, recent experiences, and self-perception.
            For a comprehensive understanding or if you have significant relationship concerns, consulting a qualified professional is recommended.
            Please see our <Link to="/disclaimer">Disclaimer</Link> for more information.
          </p>
        </article>

        <article>
          <h3>Can my Love Language or Attachment Style change?</h3>
          <p>
            Yes, both can evolve over time. While core tendencies might remain, self-awareness, conscious effort, life experiences,
            and experiences in healthy relationships (or therapy) can lead to changes.
            For instance, someone with an insecure attachment style can develop more secure patterns ("earned security").
            Love languages can also shift in priority based on circumstances or relationship dynamics.
          </p>
        </article>

         <article>
          <h3>Should I share my results with my partner?</h3>
          <p>
           Sharing your results can be a great starting point for conversations about your relationship needs and dynamics.
           It can foster mutual understanding and empathy. However, approach the conversation with curiosity and openness,
           rather than using the results as labels or criticisms.
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
            Please see our <Link to="/privacy">Privacy Policy</Link> for details.
          </p>
        </article>

        <article>
          <h3>How long do the tests take?</h3>
          <p>
            Each test typically takes around 5-10 minutes to complete, depending on how quickly you read and respond to the questions.
          </p>
        </article>

        <article>
          <h3>I encountered a problem with the website. How can I report it?</h3>
          <p>
            We appreciate your feedback! If you find any bugs or have suggestions for improvement,
            please reach out to us via the details on our <Link to="/contact">Contact Us page</Link>.
          </p>
        </article>

      </section>
    </div>
  );
}; 