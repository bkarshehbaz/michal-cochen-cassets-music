import React, { useEffect, useContext } from "react";
import { useParallax } from "react-scroll-parallax";

import title from "../../utils/images/png/nationBuildingJerusalem/title.svg";
import opera from "../../utils/images/png/nationBuildingJerusalem/opera.png";
import StaticTextBlocks from "../../components/StaticTextBlock";
import { Context } from "../../Context";
import { useInView } from "react-intersection-observer";

import {
  Wrapper,
  Title,
  Background,
  TextWrapper,
  StyledContentYear,
  ParagraphWrapper,
  TvVideo,
  VideoWrapper,
} from "./styled";

const NationBuildingJerusalem = ({ isShow, setIsShow }) => {
  const { ref: videoRef, inView } = useInView();
  const { dispatch } = useContext(Context);
  const { ref } = useParallax({ speed: 30 });

  useEffect(() => {
    if (inView) {
      setIsShow(true);
      dispatch({
        type: "secondNameMusic",
        payload: {
          nameMusic: "פסטיבל הזמר המזרחי",
          musicPlaying: "video",
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <Wrapper ref={videoRef}>
      <StyledContentYear>1971</StyledContentYear>
      <Title src={title} />
      <VideoWrapper ref={ref}>
        {isShow ? (
          <TvVideo
            onClick={(e) => e.stopPropagation()}
            url={
              "https://www.youtube.com/watch?v=EW37gC22dgg&ab_channel=MichalCohen"
            }
            playing={true}
            onEnded={() => setIsShow(false)}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
        ) : (
          <Background src={opera} />
        )}
      </VideoWrapper>
      <TextWrapper>
        <StaticTextBlocks
          title="בנייני האומה בירושלים, 1971"
          text={
            <ParagraphWrapper>
              ב1971, עשור לאחר פסטיבל הזמר והפזמון העברי הראשון אשר סירב לשלב בו
              יוצרים ומבצעים מן הז׳אנר הים תיכוני- ייסד יוסף בן ישראל, מנהל
              מחלקת הפולקלור בקול ישראל, פסטיבל חלופי מקביל: ״פסטיבל הזמר
              והפזמון הישראלי בסגנון עדות המזרח״. על גב עטיפת התקליט של הפסטיבל
              הראשון נכתב: ״מטרת תחרות זו הנערכת בפעם הראשונה בארץ, היא לקרב את
              הזמר המזרחי אל הקהל הרחב, לטפח ולעודד את יצירת הנעימה המזרחית, כדי
              שתשוב ותהיה גורם מפרה בתחום השיר והפזמון בישראל״. כבר בתחילת דרכו
              עורר הפסטיבל שערוריה משום ששובץ לשידור בדיוק על זמן התוכניות
              בערבית. חרף מגרעותיו, נתן הפסטיבל ביטוי ממסדי ראשון לז׳אנר, ונתן
              למבצעים וליוצרים המזרחים הזדמנות, במה ראויה ואופציה לחשיפה.
            </ParagraphWrapper>
          }
        />
      </TextWrapper>
    </Wrapper>
  );
};

export default NationBuildingJerusalem;
