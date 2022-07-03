import React, { useEffect, useContext } from 'react'
import { useInView } from 'react-intersection-observer'
import { Context } from '../Context'

import NationBuildingJerusalem from '../components/NationBuildingJerusalem'
import LoversHerParents from '../components/LoversHerParents'
import StaticBlocks from '../components/StaticBlocks'
import thetarClubGif from '../utils/images/png/thetar_club_gif.gif'

import {
  StyledTheatherImage,
  StyledTheatherImageWrapper,
  TextThetarClubWrapper,
} from './styled'

const BlackPanthers = ({ isShow, setIsShow, endNextSectionVideo }) => {
  const { ref, inView } = useInView()
  const { dispatch } = useContext(Context)

  useEffect(() => {
    if (inView) {
      endNextSectionVideo(false)
      dispatch({
        type: 'secondNameMusic',
        payload: {
          nameMusic: 'ניסים סרוסי | סוף הדרך',
          musicPlaying: 'blackPanthers',
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  const thetarClub = {
    blockPhoto: (
      <StyledTheatherImageWrapper>
        <StyledTheatherImage alt="" src={thetarClubGif} />
      </StyledTheatherImageWrapper>
    ),
    year: '1971',
    title: 'סדנת תיאטרון שכונת התקווה',
    underTitle: (
      <TextThetarClubWrapper>
        את הסדנה ייסד בצלאל אלוני בשנת 1971 כמחאה על המצב החברתי הקשה. בכך, יצר
        את אחד הגופים המשפיעים ביותר בהיבט החברתי והתרבותי בשנות ה70. הסדנה
        הייתה חממה להמון אנשים ונתנה להם דרך להתבטא ולהעביר מסרים
        <br />
        שבערו בהם. מתוך מחזות הזמר של הסדנה יצאו להיטים רבים והצגותיה הוצעו
        באופן קבוע באולם ״צוותא״ בתל אביב.
        <br />
        בין שחקני וזמרי הסדנה בלטה כבר בימיה הראשונים עופרה חזה, שהיתה אז רק בת
        14 ועם הזמן הפכה לכוכבת הסדנה.
      </TextThetarClubWrapper>
    ),
  }

  return (
    <span ref={ref}>
      <LoversHerParents />
      <StaticBlocks {...thetarClub} />
      <NationBuildingJerusalem isShow={isShow} setIsShow={setIsShow} />
    </span>
  )
}

export default BlackPanthers
