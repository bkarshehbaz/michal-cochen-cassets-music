import React, { useState } from "react";
import TimeImage from "./timebar line.png";
import {
  StyledYearsLine,
  StyledYear,
  StyledYearsCube,
  StyledYearsWrapper,
  HoverTextWrapper,
} from "./styled";

const TimeLineItem = ({
  setWhatYearNow,
  percentage,
  keyName,
  hoverText,
  name,
}) => {
  const [isHoverText, setIsHoverText] = useState(false);

  return (
    <StyledYearsWrapper distance={percentage}>
      <StyledYearsLine />
      <StyledYearsCube />
      {isHoverText ? <HoverTextWrapper>{hoverText}</HoverTextWrapper> : ""}
      <StyledYear
        onClick={() => setWhatYearNow(keyName)}
        to={name}
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        // onMouseEnter={() => setIsHoverText(true)}
        // onMouseLeave={() => setIsHoverText(false)}
      >
        {keyName}
      </StyledYear>
    </StyledYearsWrapper>
  );
};

export default TimeLineItem;
