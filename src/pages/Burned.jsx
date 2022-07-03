import React, { useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Context } from '../Context'

import StaticBlocks from '../components/StaticBlocks'
import { BurnedWrapper, StyledBurnedText } from './styled'

const burned = {
  blockPhoto: <BurnedWrapper />,
  year: '2000',
  title: '״השרוף״',
  underTitle: (
    <StyledBurnedText>
      על אף העובדה שהצלחת הזמרים המזרחיים באותה התקופה באה לידי ביטוי בתקשורת,
      עדיין היתה תחושה שהתקשורת מחבקת את הז׳אנר במיוחד שנצמד לו סיפור אישי קורע
      לב. את אחד התרגילים התקשורתיים הגדולים שהיו עשה חיים צינוביץ׳, שהתחפש לזמר
      מזרחי נכה אשר נשרף בכל גופו וקיבל כתבת שער בעיתון הנפוץ במדינה- ״השרוף״.
    </StyledBurnedText>
  ),
}

const Burned = () => {
  const { dispatch } = useContext(Context)
  const { ref, inView } = useInView({ rootMargin: '-49%' })

  useEffect(() => {
    if (inView) {
      dispatch({
        type: 'secondNameMusic',
        payload: {
          nameMusic: 'השרוף | הבל החן שקר היופי',
          musicPlaying: 'burned',
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <span ref={ref}>
      <StaticBlocks {...burned} id="2000_twoThousands" />
    </span>
  )
}

export default Burned
