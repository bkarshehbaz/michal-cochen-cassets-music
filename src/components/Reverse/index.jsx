import React, { useContext, useEffect, useState } from 'react'
import { useParallax } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'
import { Context } from '../../Context'

import tv from '../../utils/images/png/reverse/tv.png'
import tvGif from '../../utils/images/png/reverse/tvGif.gif'
import title from '../../utils/images/png/reverse/title.png'
import news1 from '../../utils/images/png/reverse/news1.png'
import news2 from '../../utils/images/png/reverse/news2.png'
import news3 from '../../utils/images/png/reverse/news3.png'
import StaticTextBlocks from '../../components/StaticTextBlock'

import {
  Wrapper,
  BlockWrapper,
  Title,
  News1,
  News2,
  News3,
  Tv,
  TvGif,
  TvVideo,
  WrapperTv,
  TextWrapper,
  StyledContentYear,
  ParagraphWrapper
} from './styled'

const Reverse = ({ stopPrevVideo }) => {
  const { dispatch } = useContext(Context)
  const { ref, inView } = useInView()
  const [isShowVideo, setIsShowVideo] = useState(null)

  const news1_paralax = useParallax({ speed: -5 })
  const news2_paralax = useParallax({ speed: 10 })
  const news3_paralax = useParallax({ speed: 5 })

  const showVideo = () => {
    setIsShowVideo('https://www.youtube.com/watch?v=yVR4C_wQq-Y')
  }

  useEffect(() => {
    if (inView) {
      stopPrevVideo(false)
      dispatch({
        type: 'secondNameMusic',
        payload: {
          nameMusic: 'בועז שרעבי | חידה את לי',
          musicPlaying: 'reverse',
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  const stopAudio = () => {
    return dispatch({
      type: 'secondNameMusic',
      payload: {
        nameMusic: 'וִידֵאוֹ',
        musicPlaying: 'video',
      },
    })
  }

  return (
    <Wrapper ref={ref}>
      <BlockWrapper>
        <News1 src={news1} ref={news1_paralax.ref} />
        <StyledContentYear>1977</StyledContentYear>
        <Title src={title} />
        <WrapperTv
          onClick={() => {
            showVideo()
            stopAudio()

            if(isShowVideo !== null) setIsShowVideo(null)
          }}
        >
          <Tv src={tv} />
          <TvGif src={tvGif} />
          {isShowVideo && (
            <TvVideo
              onClick={(e) => e.stopPropagation()}
              url={isShowVideo}
              playing={true}
              onEnded={() => setIsShowVideo(null)}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
              }}
            />
          )}
        </WrapperTv>
        <News2 src={news2} ref={news2_paralax.ref} />
        <News3 src={news3} ref={news3_paralax.ref} />
      </BlockWrapper>
      <TextWrapper>
        <StaticTextBlocks
          title="עליית הליכוד לשלטון, 1977"
          text={
            <ParagraphWrapper>
              בלילה שבין 17 ל18 במאי 1977, קצת אחרי השעה 23:00, 
              <br />
              הופיע חיים יבין על המרקע עם תוצאות מדגם הטלוויזיה ואמר לעם ישראל את המילה ״מהפך״- מילה אשר נחרתה בתודעה ושינתה את ההיסטוריה. לראשונה מאז הקמתה, הפסידה מפא״י (לימים המערך) את השלטון. המהפך של 77 ועליית הליכוד ובראשו מנחם בגין לשלטון יצרו מציאות פוליטית חדשה לחלוטין. הליכוד נתן משקל לכוחות הפריפריאלים, בעיקר של הציבור המזרחי. הוא זכה בתמיכת המזרחיים כ״כוח אנטי ממסדי״ משום שהדגיש את הסולידריות של האומה, אפשר למזרחים להשמיע את קולם וחתר לשוויון ולביטול תחושת הפטרונות.
            </ParagraphWrapper>
          }
        />
      </TextWrapper>
    </Wrapper>
  )
}

export default Reverse
