import React, { useEffect, useContext } from "react";

import { Context } from "../../Context";
import { useInView } from "react-intersection-observer";
import { StyledYear } from "../../pages/styled";
import {
  Wrapper,
  PgotoWrapper,
  TextBlock,
  TextWrapper,
  UnderTitle,
  Title,
} from "./styled";

const StaticBlocks = ({ year = "1111", blockPhoto, title, underTitle, id }) => {
  return (
    <Wrapper id={id}>
      <PgotoWrapper>{blockPhoto}</PgotoWrapper>
      <TextBlock>
        <TextWrapper>
          <StyledYear>{year}</StyledYear>
          <Title>{title}</Title>
          <UnderTitle>{underTitle}</UnderTitle>
        </TextWrapper>
      </TextBlock>
    </Wrapper>
  );
};

export default StaticBlocks;
