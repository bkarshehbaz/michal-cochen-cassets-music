import React, { useEffect, useContext } from "react";

import StaticBlocks from "../StaticBlocks";
import { useInView } from "react-intersection-observer";
import { Context } from "../../Context";

import foundingFathersPhoto from "../../utils/images/png/foundingFathers.png";

import {
  FoundingFathersPhoto,
  PhotoStaticWrapper,
  BlockTextWrapper,
} from "./styled";

export default function FoundingFathers({ openModal }) {
  const { dispatch } = useContext(Context);
  const { ref, inView } = useInView({ rootMargin: "-40%" });

  useEffect(() => {
    if (inView) {
      openModal("https://youtu.be/fOUZOJzobfU");
      dispatch({
        type: "secondNameMusic",
        payload: {
          nameMusic: "בתשלומים",
          musicPlaying: "video",
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const foundingFathers = {
    blockPhoto: (
      <PhotoStaticWrapper>
        <FoundingFathersPhoto
          ref={ref}
          onClick={() =>
            openModal(
              "https://www.youtube.com/watch?v=fOUZOJzobfU&ab_channel=MichalCohen"
            )
          }
          src={foundingFathersPhoto}
        />
      </PhotoStaticWrapper>
    ),
    year: "1950",
    title: "האבות המייסדים",
    underTitle: (
      <BlockTextWrapper>
        בגלי העלייה שהגיעו לארץ בשנות ה50, היו גם מוזיקאים שניגנו
        <br />
        וכתבו מוזיקה ערבית וזכו להצלחה במצרים, עיראק ומרוקו.
        <br />
        מעטים מביניהם מצאו את דרכם בארץ לחשיפה ציבורית כלשהי, לרוב בשירי פופ
        בידוריים בעברית ולא בזכות יצירות קונצרטנטיות של מוזיקה ערבית קלאסית.
        המפורסם שבהם
        <br />
        היה אלברט מוגרבי- ׳פלפל אל מסרי׳, אשר הפך, לצד ג׳ו עמר, לקולם הבלתי
        מעורער של בני עדות המזרח. עם קול גלותי ועברית קלוקלת, הומור פשוט וצלילים
        ערביים, הצליח אל
        <br />
        מסרי לחדור ללב המיינסטרים שלגלג עליו אבל נתן לו את הבמה להפוך לנער
        הפוסטר הגדול של המוזיקה המזרחית בסוף שנות ה50.
      </BlockTextWrapper>
    ),
  };

  return (
    <span>
      <StaticBlocks {...foundingFathers} id="1950_fifties" />
    </span>
  );
}
