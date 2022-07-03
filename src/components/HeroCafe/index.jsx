import React, { useEffect, useContext } from 'react'

import { useParallax } from 'react-scroll-parallax'
import StaticTextBlocks from '../StaticTextBlock'
import { StyledYear } from '../../pages/styled'
import { useInView } from 'react-intersection-observer'
import { Context } from '../../Context'

import {
  StyledContentWrapper,
  StyledHeroImage,
  StyledHeroTitle,
  StyledHeroText,
  StyleTitleWrapper,
  TextBlocksWrapper
} from './styled'

const HeroCafe = ({ closeModal }) => {
  const heroPage = useParallax({ speed: 10 })
  const { dispatch } = useContext(Context)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      closeModal()
      dispatch({
        type: 'secondNameMusic',
        payload: {
          nameMusic: 'להקת צלילי העוד | חנה׳לה התבלבלה',
          musicPlaying: 'openingScreen',
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <span ref={ref}>
      <StyledContentWrapper>
        <StyleTitleWrapper>
          <StyledYear>1951</StyledYear>
          <StyledHeroTitle />
        </StyleTitleWrapper>
        <StyledHeroImage ref={heroPage.ref} />
        <StyledHeroText>
          <StaticTextBlocks
            title="קפה נח, 1951-1989"
            text={
              <TextBlocksWrapper>
                <br />
                במקום שבו הממסד מתעלם, צצה היוזמה הפרטית. 
                <br />
                קפה נח הוקם בשנת 1951 בשכונת התקווה על ידי משפחת לוי, 
                <br />
                בחצר ביתם. עם הזמן הפך בית הקפה למוסד תרבות מרכזי שמשך אליו נגנים וזמרים יוצאי מדינות ערב. בלילה מוצלח ישבו בקפה נח 400-800 אורחים והתוכנית האמנותית כללה הופעות של מיטב המוזיקאים אשר עלו לישראל.
              </TextBlocksWrapper>
            }
          />
        </StyledHeroText>
      </StyledContentWrapper>
    </span>
  )
}

export default HeroCafe
