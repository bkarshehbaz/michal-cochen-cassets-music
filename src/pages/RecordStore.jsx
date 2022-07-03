import React, { useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Context } from '../Context'

import AlbumSlider from '../components/AlbumSlider'
import StaticBlocks from '../components/StaticBlocks'
import {
  StyledSixtiesPhoto,
  TextGreekWaveWrapper
} from './styled'

const greekWave = {
  blockPhoto: <StyledSixtiesPhoto />,
  year: '1960',
  title: 'הגל היווני',
  underTitle:
    <TextGreekWaveWrapper>
      בשנות ה60 המוזיקה הפופולרית בארץ היתה מגויסת עדיין לעיצוב דמותה של ישראל הצעירה- מדינה החיה במצב תודעתי של מגננה מתמדת, שבה כל דבר ״ערבי״ עורר רתיעה כמזוהה עם תרבות האויב. על קרקע זו צמחה ההצלחה יוצאת הדופן של המוזיקה היוונית בארץ, שהיוותה מעין תחליף קרוב למוזיקה הערבית המודרת. אריס סאן, גיטריסט וזמר יווני שהשתקע בארץ ב1957, היה חלוץ הגל היווני של שנות ה60. הוא הגיע לישראל והחל להופיע במועדוני יפו המצליחים ולהקליט שירים בעברית ויוונית. הגיטרה החשמלית בה ניגן יצרה צליל חדש וייחודי, ולימים צלילי הגיטרה וסגנון הנגינה יהוו מוטיב מרכזי וחשוב בעיצוב פס הקול של המוזיקה המזרחית.
    </TextGreekWaveWrapper>
}

const RecordStore = () => {
  const { dispatch } = useContext(Context)
  const { ref, inView } = useInView({ rootMargin: '-49%' })

  useEffect(() => {
    if (inView) {
      dispatch({
        type: 'secondNameMusic',
        payload: {
          nameMusic: 'אריס סאן | בום פאם',
          musicPlaying: 'recorStore'
        },
      })
    }
  }, [inView])

  return (
    <span ref={ref}>
      <AlbumSlider />
      <StaticBlocks {...greekWave} id="1960_sixties" />
    </span>
  )
}

export default RecordStore
