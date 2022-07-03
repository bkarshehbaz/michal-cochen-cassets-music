/* eslint-disable react/jsx-pascal-case */
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Context } from "../../Context";
import { useParallax } from "react-scroll-parallax";

import title from "../../utils/images/png/caesarea/caersarea_title.png";
import caersarea_bg_1 from "../../utils/images/png/caesarea/caersarea_bg_1.png";
import caersarea_bg_2 from "../../utils/images/png/caesarea/caersarea_bg_2.png";
import caersarea_bg_3 from "../../utils/images/png/caesarea/caersarea_bg_3.png";
import StaticTextBlocks from "../../components/StaticTextBlock";

import {
  Wrapper,
  TitleWrapper,
  TextWrapper,
  Title,
  Caersarea_bg_1,
  Caersarea_bg_2,
  Caersarea_bg_3,
  StyledCaersaresYear,
} from "./styled";

const Caesarea = () => {
  const Caersarea_bg_1_paralax = useParallax({ speed: -15 });
  const Caersarea_bg_2_paralax = useParallax({ speed: -5 });
  const Caersarea_bg_3_paralax = useParallax({ speed: -10 });

  const { dispatch } = useContext(Context);
  const { ref, inView } = useInView({ rootMargin: "-49%" });

  useEffect(() => {
    if (inView) {
      dispatch({
        type: "secondNameMusic",
        payload: {
          nameMusic: "קובי פרץ | כל הכוח(מתוך הופעה בקיסריה)",
          musicPlaying: "caesarea",
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <Wrapper ref={ref} style={{ marginTop: "300px" }}>
      <TitleWrapper>
        <StyledCaersaresYear>2001</StyledCaersaresYear>
        <Title src={title} alt="Title" />
        <Caersarea_bg_1
          src={caersarea_bg_1}
          alt="caersarea_bg_1"
          ref={Caersarea_bg_1_paralax.ref}
        />
        <Caersarea_bg_2
          src={caersarea_bg_2}
          alt="caersarea_bg_2"
          ref={Caersarea_bg_2_paralax.ref}
        />
        <Caersarea_bg_3
          src={caersarea_bg_3}
          alt="caersarea_bg_3"
          ref={Caersarea_bg_3_paralax.ref}
        />
      </TitleWrapper>
      <TextWrapper>
        <StaticTextBlocks
          title="שרית חדד בהיכל התרבות, 2000"
          text="בשנות ה2000 המוזיקה המזרחית תפסה תאוצה שהגיעה לשירה במופעי ענק ובכיבוש הקופות הפתוחות הכי גדולות- היכל התרבות ואמפי קיסריה. העשור נפתח בשרית חדד לראשונה בהיכל התרבות ומגיע לשיא כשאייל גולן כובש לראשונה את קיסריה בהצלחה ענקית. אחריו נפתחה הבמה גם לאמנים רבים נוספים כמו שלומי שבת, ליאור נרקיס, קובי פרץ, עופר לוי, יואב יצחק, משה פרץ וכו׳."
        />
      </TextWrapper>
    </Wrapper>
  );
};

export default Caesarea;
