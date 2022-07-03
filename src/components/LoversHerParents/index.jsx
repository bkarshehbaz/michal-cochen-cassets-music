import React from 'react'
import { useParallax } from 'react-scroll-parallax'

import title from '../../utils/images/png/loversHerParents/title.png'
import hand from '../../utils/images/png/loversHerParents/hand.png'
import street from '../../utils/images/png/loversHerParents/street.png'
import blackBg from '../../utils/images/png/loversHerParents/black_bg.png'
import StaticTextBlocks from '../../components/StaticTextBlock'

import {
  Wrapper,
  WrapperParalax,
  Title,
  Hand,
  Street,
  BlackBg,
  StyledContentYear,
  TextWrapper
} from './styled'

const LoversHerParents = () => {
  const hand_paralax = useParallax({ speed: -15 })
  const street_paralax = useParallax({ speed: 10 })
  const blackBg_paralax = useParallax({ speed: 5 })

  return (
    <Wrapper>
      <WrapperParalax>
        <StyledContentYear>1971</StyledContentYear>
        <Title src={title} />
        <Hand src={hand} ref={hand_paralax.ref} />
        <Street src={street} ref={street_paralax.ref} />
        <BlackBg src={blackBg} ref={blackBg_paralax.ref} />
      </WrapperParalax>
      <StaticTextBlocks
        title="הפנתרים השחורים, 1971-1992"
        text={
          <TextWrapper>
            בראשית שנת 1971 נוסד ארגון הפנתרים השחורים, אשר ביקש למחות על מצוקת תושבי ישראל בני עדות המזרח ועל קיפוחם מצד השלטון. בשורה של הפגנות ומעשי מחאה העלה הארגון את מצוקת בני עדות המזרח ותחושת הקיפוח שלהם לתודעת הציבור בישראל וחולל בו סערת רוחות.
          </TextWrapper>
        }
      />
    </Wrapper>
  )
}

export default LoversHerParents
