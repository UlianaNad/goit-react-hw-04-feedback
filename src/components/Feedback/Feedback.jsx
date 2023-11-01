import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Feedback.styled';

export const Feedback = ({ options, handleFeedbackVote }) => (
  <div>
    {options.map(option => (
      <StyledButton
        type="button"
        onClick={() => handleFeedbackVote(option)}
        key={option}
      >
        {option}
      </StyledButton>
    ))}
  </div>
);

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  handleFeedbackVote: PropTypes.func.isRequired,
};
