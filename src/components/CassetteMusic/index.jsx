import React, { useEffect, useContext } from 'react'

import { useParallax } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'
import { Context } from '../../Context'

import {
  Wrapper,
  Building,
  Title,
  Laundry1,
  Laundry2,
  Bird1,
  Bird2,
  Bird3,
  BottomWrapper,
  Street1,
  Street2,
  Street3,
  Car,
  Man,
  Subtitle,
  TitleWrapper,
} from './styled'

const CassetteMusic = ({ closeModal }) => {
  const { dispatch } = useContext(Context)
  const { ref, inView } = useInView()

  const bird1_paralax = useParallax({
    translateX: [0, 90],
    translateY: [0, -50],
  })
  const bird2_paralax = useParallax({
    translateX: [0, 60],
    translateY: [0, -150],
  })
  const bird3_paralax = useParallax({
    translateX: [0, 40],
    translateY: [0, -120],
  })
  const laundry1_paralax = useParallax({
    speed: -2,
    translateX: [-2, 2],
  })
  const laundry2_paralax = useParallax({
    speed: 2,
    translateX: [2, -2],
  })
  const car_paralax = useParallax({
    translateX: [0, 5],
    translateY: [0, 10],
  })
  const man_paralax = useParallax({
    translateX: [0, -15],
    translateY: [0, 10],
  })

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
  }, [inView])

  return (
    <Wrapper name="start">
      <Building>
        <TitleWrapper>
          <Title>
            מוזיקת קסטות;
          </Title>
          <Subtitle>
            כינוי לעג בשנות ה80 לזמר הים תיכוני על שום דרך הפצתו 
            <br />
            בקלטות (קסטות). מוזיקה זו הייתה מוזיקה מחתרתית ולא התקבלה כתרבות לגיטימית על ידי מי שכונו בידי הזמרים הים תיכוניים ״האליטה האשכנזית״. הקסטות היוו אלטרנטיבה למוזיקה שלא שומעים ברדיו. זמרים שלא נותנים להם במה 
            <br />
            וכונו בזלזול ״זמרי קסטות״, יכלו לקבל אותה אך ורק בדוכני הקסטות בתחנה המרכזית הישנה בתל אביב. זו לא הייתה רק תופעה מוזיקלית, אלא תופעה תרבותית מהפכנית.
          </Subtitle>
        </TitleWrapper>
        <Bird1 ref={bird1_paralax.ref} />
        <Bird2 ref={bird2_paralax.ref} />
        <Bird3 ref={bird3_paralax.ref} />
        <Laundry1 ref={laundry1_paralax.ref} />
        <Laundry2 ref={laundry2_paralax.ref} />
      </Building>
      <BottomWrapper>
        <Street1 />
        <Street2 />
        <Street3 />
        <Car ref={car_paralax.ref} />
        <Man ref={man_paralax.ref} />
      </BottomWrapper>
    </Wrapper>
  )
}

export default CassetteMusic
