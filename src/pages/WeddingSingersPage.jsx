import React, { useContext, useEffect } from 'react'

import { useInView } from 'react-intersection-observer'
import { Context } from '../Context'
import StaticBlocks from '../components/StaticBlocks'
import MusicAlbums from '../components/MusicAlbums'
import TurningPoint from '../components/TurningPoint'

import voiceOfIsrael from '../utils/images/png/voice_of_Israel.png'
import weddingSingersPhoto from '../utils/images/png/wedding_singers.png'

import {
  ChildrenVolumePhotoWrapper,
  PhotoStaticWrapper,
  WeddingSingers,
  EntranceRadioPhoto,
  StyledRadioText,
  StyledRadioUnderText,
  TextWeddingSingersWrapper,
  TextChildrenVolumeWrapper,
  TextChildrenVolume,
} from './styled'

const weddingSingers = {
  blockPhoto: (
    <PhotoStaticWrapper>
      <WeddingSingers src={weddingSingersPhoto} />
    </PhotoStaticWrapper>
  ),
  year: 1981,
  title: 'זמרי חתונות',
  underTitle: (
    <TextWeddingSingersWrapper>
      בתחילת שנות ה80, המקומות היחידים מלבד התחנה
      <br />
      המרכזית בהם נחשפים וגם פורחים האמנים המזרחים הם אולמות האירועים.
    </TextWeddingSingersWrapper>
  ),
}

const childrenVolume = {
  blockPhoto: <ChildrenVolumePhotoWrapper />,
  year: 1982,
  title: 'ילדי הכרך',
  underTitle: (
    <TextChildrenVolumeWrapper>
      בראשית שנות ה80 כתב המשורר דן אלמגור מחזמר פולקלוריסטי שגולל את סיפור
      עליית יהודי תימן, אשר הועלה בתיאטרון בית לסין. משתתפי ההצגה היו תימנים
      כולם ושירי ההצגה ביטאו את מחאתם של בני עדות המזרח. מבין להיטי ההצעה היו
      השירים ״8 נפשות ו״מלך הקסטות״.
      <TextChildrenVolume>
        ״עלי לא תקראו בעיתונים ההגונים/ אותי לא משמיעים במצעדי הפזמונים/ את שמי
        גם לא הזכירו פעם בכינור דוד/ למרות שכל פזמון שלי הופך מיד להיט/ אני הוא
        מלך הקסטות של התחנה המרכזית.״
      </TextChildrenVolume>
    </TextChildrenVolumeWrapper>
  ),
}

const entranceRadio = {
  blockPhoto: (
    <PhotoStaticWrapper>
      <EntranceRadioPhoto src={voiceOfIsrael} />
    </PhotoStaticWrapper>
  ),
  year: 1985,
  title: '״הכניסה״ לרדיו',
  underTitle: (
    <StyledRadioText>
      מצעדי הפזמונים ברדיו הם שקבעו את הטון בעשור הזה
      <br />
      והשפיעו גם על שוק התקליטים המקומי, באופם שכמעט
      <br />
      חסם לחלוטין את כניסתם של שירים מזרחיים לזרם המרכזי
      <br />
      במוזיקה המקומית. לאחר פריצת המוזיקה המזרחית מתחת
      <br />
      לרדאר תחנות הרדיו לא יכלו להתעלם יותר, וקמה תוכנית
      <br />
      שמוקדשת למוזיקה המזרחית- שעה אחת בשבוע. נגד הפעולה
      <br />
      הזאת קמו קולות של אמנים מהז׳אנר שמתנגדים ל״גטו״
      <br />
      המזרחי שנוצר.
      <br />
      <StyledRadioUnderText>
        ״אמצעי התקשורת לא יכולים להתעלם מאיתנו עד הסוף, אז אמרו ניתן להם כל
        מוצ״ש שעה של ׳אהבה ים תיכונית׳, נעשה גטו קטן. משמיעים עשרה זמרים תימנים
        במכה, ואז אומרים: יש להם שעה שלמה, מה הם בוכים? מספיק להם! ואני לא מוכן.
        זאת סטירת לחי! אני רוצה שיפזרו את כל הזמרים- אחד בעשר בבוקר, אחד בארבע
        אחה״צ, אחד בשבוע הבא. הקהל שרוצה לשמוע אותי צריך לחכות למוצ״ש, ל׳מוזיקה
        של השחורים׳! זאת תעודת עניות לכולנו״ זוהר ארגוב ל׳להיטון׳, 1982.
      </StyledRadioUnderText>
    </StyledRadioText>
  ),
}

const WeddingSingersPage = () => {
  const { dispatch } = useContext(Context)
  const { ref, inView } = useInView({ rootMargin: '-19%' })

  useEffect(() => {
    if (inView) {
      dispatch({
        type: 'secondNameMusic',
        payload: {
          nameMusic: 'מרגלית צנעני | נערי שובה אלי',
          musicPlaying: 'weddingSingersPage',
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <span ref={ref}>
      <MusicAlbums />
      <StaticBlocks {...weddingSingers} />
      <StaticBlocks {...childrenVolume} />
      <TurningPoint />
      <StaticBlocks {...entranceRadio} />
    </span>
  )
}

export default WeddingSingersPage
