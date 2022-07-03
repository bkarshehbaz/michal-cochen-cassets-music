import React, { useRef, useEffect, useContext } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ParallaxProvider, useParallax } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'
import { Context } from '../../Context'
import tableImage from '../../utils/images/png/table3.png'
import tableBottomImage from '../../utils/images/png/tableBottom.png'
import tableContentImage from '../../utils/images/png/table2.png'
import tableFlagImage from '../../utils/images/png/1991.png'
import tableSloganImage from '../../utils/images/svg/tableTitle.svg'

import {
  StyledTableWrapper,
  StyledContentWrapper,
  StyledTable,
  StyledTableBottom,
  StyledTableContent,
  StyledSlogan,
  StyledFlag,
  Text1,
  Text2,
  Text3,
  StyledTitleWrapper,
  StyledTableYear,
} from './styled'
gsap.registerPlugin(ScrollTrigger)

const Table = () => {
  const { dispatch } = useContext(Context)
  const { ref, inView } = useInView({ rootMargin: '-49%' })
  const text3Ref = useInView()
  const tableContainerRef = useRef(null)
  const sloganRef = useRef(null)
  const flagRef = useParallax({ translateX: [0, -15], translateY: [-10, 5] })

  useEffect(() => {
    const table = tableContainerRef.current
    gsap.to(table, {
      xPercent: 65,
      ease: 'none',
      scrollTrigger: {
        trigger: table,
        pin: true,
        scrub: 1,
        snap: false,
        end: 'bottom',
      },
    })
  }, [])

  useEffect(() => {
    const title = sloganRef.current
    if(text3Ref.inView) {
      gsap.to(title, {
        scrollTrigger: {
          trigger: title,
          horizontal: true,
          start: 'right',
        },
        x: 1980,
        duration: 2,
        opacity: 1,
      })
    }
  }, [text3Ref.inView])

  useEffect(() => {
    if (inView) {
      dispatch({
        type: 'secondNameMusic',
        payload: {
          nameMusic: 'אהובה עוזרי | עמק הפרחים',
          musicPlaying: 'table',
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <StyledContentWrapper id="1970_seventies">
      <ParallaxProvider scrollAxis="horisontal">
        <StyledTableWrapper ref={tableContainerRef}>
          <StyledTableContent alt="" src={tableContentImage} />
          <StyledTable alt="" src={tableImage} ref={ref} />
          <StyledTableBottom alt="" src={tableBottomImage} />
          {text3Ref.inView 
            ? <StyledTitleWrapper ref={sloganRef}>
              <StyledTableYear>1970</StyledTableYear>
              <StyledSlogan alt="" src={tableSloganImage} />
            </StyledTitleWrapper>
            : ''
          }
          <StyledFlag alt="" src={tableFlagImage} ref={flagRef.ref} />
          <Text1>
            הזמר הים תיכוני פרח בחאפלות ביתיות, על הגגות, בחצרות, בישיבות ליליות
            ארוכות סביב השולחן, מתוך התקלחות ספונטנית של מוזיקה ממקורות שונים:
            תימנית, יוונית, טורקית, ערבית, כורדית ומרוקאית. מלכתחילה לא היה
            מדובר בהגדרה מוזיקלית מוצקה, אלא במסגרת החברתית החדשה שהתהוותה
            בשכונות ופתחה את הישראליות לצלילים אחרים.
          </Text1>
          <Text2>
            שכונת כרם התימנים הפכה במשך השנים לחממת תרבות ואמנות ישראלית וטיפחה כמה מהכישרונות הגדולים שעיצבו 
            <br />
            את המוזיקה הישראלית בכלל והמזרחית בארץ בפרט (אהובה עוזרי, צלילי העוד, צלילי הכרם, יהודה קיסר, אביהו מדינה, 
            <br />
            בעז שרעבי ועוד). מהכרם יצא צליל חדש ששילב בין גיטרה חשמלית ומוזיקה תימנית, והחפלות המסורתיות בשכונה הצמיחו הרכבים שזכו להצלחה, אמנם עדיין בשולי התעשייה הממוסדת.
          </Text2>
          <Text3 ref={text3Ref.ref}>
            בתחילת שנות ה70 החלו המזרחים להקליט את החאפלות, והשירים הופצו בקלטות שמע פיראטיות בכמויות קטנות בשכונות העיר תל אביב. ב1975 יצאו לאור שני אלבומים של שתי להקות שהשפיעו רבות על הזמר המזרחי- ״צלילי הכרם״ ו״צלילי העוד״. היו אלה אלבומיה הראשונים של ״מוזיקת הקסטות״ הישראלית.
          </Text3>
        </StyledTableWrapper>
      </ParallaxProvider>
    </StyledContentWrapper>
  )
}

export default Table
