import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Feedback } from './Feedback/Feedback';
import { StyledWrapper } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0)

 const handleFeedbackVote = feedbackValue => {
    switch (feedbackValue) {
      case 'good':
        setGood(prevState => prevState + 1 )
        break;
      case 'neutral':
        setNeutral(prevState => prevState +1 )
        break;
      case 'bad':
        setBad(prevState => prevState +1 )
        break;
      default:
        break;
    }
  };
 const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const total = countTotalFeedback();

 const countPositiveFeedbackPercentage = () => {
    
    return Math.round((good / total) * 100);
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
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </StyledWrapper>
    );
  }
export default App;