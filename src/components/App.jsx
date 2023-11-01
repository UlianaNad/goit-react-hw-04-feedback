import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Feedback } from './Feedback/Feedback';
import { StyledWrapper } from './App.styled';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, bad: 0, neutral: 0 });

  const handleFeedbackVote = feedbackValue => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackValue]: prevFeedback[feedbackValue] + 1,
    }));
  };

 const countTotalFeedback = () => {
  const { good, bad, neutral } = feedback;
    return good + bad + neutral;
  };
  const total = countTotalFeedback();

 const countPositiveFeedbackPercentage = () => {
    
    return Math.round((feedback.good / total) * 100);
  };

    return (
      <StyledWrapper>
        <h1>Please leave a feedback</h1>
        <Feedback
          options={['good', 'bad', 'neutral']}
          handleFeedbackVote={handleFeedbackVote}
        />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </StyledWrapper>
    );
  }
export default App;