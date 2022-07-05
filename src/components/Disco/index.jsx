import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import backgroundImage from "../../utils/images/png/discoImage.png";
// import discsImage from '../../utils/images/png/disks.png'
import discoTitle from "../../utils/images/png/discoTitle.png";
import topDiscoImage from "../../utils/images/png/topDiscoImage.png";

import {
  StyledContentWrapper,
  StyledDiscoWrapper,
  StyledDiscoBackground,
  // StyledDiscs,
  StyledTitle,
  StyledText,
  StyledTableYear,
  StyledTitleWrapper,
  StyledTopImage,
} from "./styled";

const Disco = () => {
  const discoContainerRef = useRef(null);

  useEffect(() => {
    const disco = discoContainerRef.current;
    gsap.to(disco, {
      xPercent: 49.5,
      ease: "none",
      scrollTrigger: {
        trigger: disco,
        pin: true,
        scrub: 1,
        snap: false,
        end: "bottom",
      },
    });
  }, []);

  return (
    <StyledContentWrapper className="wrapper-big">
      <StyledDiscoWrapper ref={discoContainerRef}>
        <StyledTitleWrapper>
          <StyledTableYear>1995</StyledTableYear>
          <StyledTitle alt="" src={discoTitle} />
        </StyledTitleWrapper>
        <StyledDiscoBackground alt="" src={backgroundImage} />
        <StyledTopImage alt="" src={topDiscoImage} />
        <StyledText>
          באמצע שנות ה90 הקסטות פינו את מקומן לדיסקים.
          <br />
          העשור היה עשור של מהפך, בו המאזניים נטו לראשונה לצד
          <br />
          האחר, הרוק הודח מהשלטון ומלך חדש הומלך. בזכות פריצתם של אייל גולן
          ושרית חדד בחסות הלהקות אתניקס וטיפקס, הצליחו השירים להיכנס למצעדי
          הפזמונים ברדיו והז׳אנר קיבל סוף סוף חשיפה. בסוף שנות ה90 המוזיקה
          המזרחית חדרה ללב המיינסטרים המוזיקלי בישראל.
        </StyledText>
      </StyledDiscoWrapper>
    </StyledContentWrapper>
  );
};

export default Disco;
