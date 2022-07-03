import React from 'react';

import {
  StyledWrapper,
  StyledTextWrapper,
  StyledText,
  StyledTitle,
} from './styled';

const StaticTextBlocks = ({ title, text }) => {
  return (
    <StyledWrapper>
      <StyledTextWrapper>
        <StyledText>{text}</StyledText>
        <StyledTitle>{title}</StyledTitle>
      </StyledTextWrapper>
    </StyledWrapper>
  );
};

export default StaticTextBlocks;
