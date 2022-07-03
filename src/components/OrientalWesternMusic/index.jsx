import React, { useState } from "react";

import titleImage from "../../utils/images/svg/westernMusicTitle.svg";
import etnixGif from "../../utils/images/png/orientalWesternMusic/etnix_gif.gif";
import clickGif from "../../utils/images/png/to click.gif";

import { StyledYear } from "../../pages/styled";
import {
  Wrapper,
  TitleWrapper,
  Title,
  EtnixWrapper,
  Etnix,
  Text,
} from "./styled";

const OrientalWesternMusic = () => {
  const [gifChange, setGifChange] = useState(false);

  return (
    <Wrapper id="1990_nineties">
      <TitleWrapper>
        <StyledYear>1990</StyledYear>
        <Title src={titleImage} alt="" />
      </TitleWrapper>
      <EtnixWrapper>
        {gifChange ? (
          <Etnix
            onClick={() => {
              setGifChange(false);
            }}
            src={clickGif}
            style={{ width: "600px" }}
            alt="etnix"
          />
        ) : (
          <Etnix
            onClick={() => {
              setGifChange(true);
            }}
            src={etnixGif}
            alt="etnix"
          />
        )}
      </EtnixWrapper>
      <Text>
        כשיצא אלבומו הראשון של אייל גולן בהפקת אתניקס, התברר
        <br />
        כי האוזן הישראלית הממוצעת מוכנה לחיבור בין פופ ״מערבי״
        <br />
        למוזיקה ״מזרחית״. האלבום נמכר במאות אלפי עותקים והפך
        <br />
        לאחד האלבומים הכי נמכרים בישראל אי פעם. עטיפת התקליט
        <br />
        מעוצבת בצבעי הדגל, כולל הג׳ינס הכחול והחולצה הלבנה שלובש גולן. בחירת
        הצבעים אינה מקרית: היא נועדה לשדר את רצונה של המוזיקה המזרחית להגיע
        לקהלים רחבים ככל האפשר. את אותו החיבור אפשר לזהות גם ב״כמו סינדרלה״,
        האלבום שהוציאה שרית חדד ב1999, בהפקה מוזיקלית של קובי אוז.
      </Text>
    </Wrapper>
  );
};

export default OrientalWesternMusic;
