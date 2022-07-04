import React, { useState } from "react";
import { yearsData } from "./mockData";
import TimeLineItem from "./TimeLineItem";
import TimeImage from "./timebar line.png";
import { StyledWrapper, StyledLine } from "./styled";

const TimeLine = () => {
  const [whatYearNow, setWhatYearNow] = useState("1950");

  return (
    <StyledWrapper className="wrapper">
      <StyledLine />
      {yearsData.map((item) => (
        <>
          <TimeLineItem
            className="timeline"
            whatYearNow={whatYearNow}
            setWhatYearNow={setWhatYearNow}
            key={item.keyName}
            {...item}
          />
        </>
      ))}
      <div style={{ top: "8%" }} className="line"></div>
      <div style={{ top: "15%" }} className="line"></div>

      <div style={{ top: "36%" }} className="line"></div>
      <div style={{ top: "36.5%" }} className="line"></div>
      <div style={{ top: "37%" }} className="line"></div>
      <div style={{ top: "42%" }} className="line"></div>
      <div style={{ top: "44%" }} className="line"></div>

      {/*  */}
      <div style={{ top: "50%" }} className="line"></div>
      <div style={{ top: "53%" }} className="line"></div>
      <div style={{ top: "54%" }} className="line"></div>
      <div style={{ top: "59%" }} className="line"></div>

      {/*  */}
      <div style={{ top: "68%" }} className="line"></div>

      {/*  */}
      <div style={{ top: "77%" }} className="line"></div>
    </StyledWrapper>
  );
};

export default TimeLine;
