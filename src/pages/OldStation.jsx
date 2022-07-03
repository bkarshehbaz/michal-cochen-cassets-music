import React, { useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Context } from '../Context'

import StaticBlocks from '../components/StaticBlocks'
import stationTelAvivPhoto from '../utils/images/png/stationTelAviv.png'
import casets from '../utils/images/png/casets.png'

import {
  StationTelAvivPhoto,
  StationTelAviv,
  PhotoStaticWrapper,
  TextStationTelAvivWrapper
} from './styled'

const stationTelAviv = {
  blockPhoto: (
    <PhotoStaticWrapper>
      <StationTelAviv src={casets} />
    </PhotoStaticWrapper>
  ),
  year: 1980,
  title: 'התחנה המרכזית הישנה של תל אביב',
  underTitle:
    <TextStationTelAvivWrapper>
      התחנה המרכזית הישנה של תל אביב היתה לב ליבו של הזמר הים תיכוני. ההזדמנות היחידה של זמר מזרחית לקבל הכרה באותן שנים היתה דרך דוכני הקסטות, בעיקר אלה שבתחנה. עד מהרה נוצר שם מעין ממסד מוזיקה מזרחית שגם אליו היה לפרוץ, ואמן שרצה להציג שם את מרכולתו היה צריך להוכיח את עצמו. עבור זמר מזרחי, הפריצה לשם היתה קשה כמו הפריצה של זמר לא מזרחי אל הרדיו.
    </TextStationTelAvivWrapper>
}

const OldStation = () => {
  const { dispatch } = useContext(Context)

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      dispatch({
        type: 'secondNameMusic',
        payload: {
          nameMusic: 'ניסים גרמה | אני הוא מלך הקסטות',
          musicPlaying: 'oldStation',
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <span ref={ref}>
      <StaticBlocks {...stationTelAviv} id="1980_eighties" />
      <StationTelAvivPhoto src={stationTelAvivPhoto} />
    </span>
  )
}

export default OldStation
