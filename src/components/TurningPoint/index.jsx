import React, { useState, useContext, useEffect } from 'react'
import { useParallax } from 'react-scroll-parallax'
import { Context } from '../../Context'
import { useInView } from 'react-intersection-observer'

import tvPhoto from '../../utils/images/png/turningPoint/tv.png'
import title_photo from '../../utils/images/png/turningPoint/title.png'
import maskGroup1Photo from '../../utils/images/png/turningPoint/mask_group_1.png'
import maskGroup2Photo from '../../utils/images/png/turningPoint/mask_group_2.png'
import StaticTextBlocks from '../../components/StaticTextBlock'

import {
  Year,
  Wrapper,
  VideoWrapper,
  Title,
  Tv,
  TextWrapper,
  TvWrapper,
  TvVideo,
  MaskGroup1,
  MaskGroup2,
} from './styled'

const TurningPoint = () => {
  const { dispatch } = useContext(Context)
  const [isShowVideo, setIsShowVideo] = useState(null)
  const { ref, inView } = useInView()

  const maskGroup1_paralax = useParallax({ speed: -15 })
  const MaskGroup2_paralax = useParallax({ speed: 15 })

  const showVideo = () => {
    setIsShowVideo('https://www.youtube.com/watch?v=O54bWfplg9M&ab_channel=MichalCohen')
  }

  const stopAudio = () => {
    return dispatch({
      type: 'secondNameMusic',
      payload: {
        nameMusic: 'וִידֵאוֹ',
        musicPlaying: 'video',
      },
    })
  }

  useEffect(() => {
    if(inView) showVideo()
    else setIsShowVideo(null)
  }, [inView])

  return (
    <Wrapper ref={ref}>
      <Year>1982</Year>
      <Title src={title_photo} />
      <MaskGroup1 ref={maskGroup1_paralax.ref} src={maskGroup1Photo} />
      <VideoWrapper>
        <TvWrapper
          onClick={() => {
            showVideo()
            stopAudio()
          }}
        >
          <Tv src={tvPhoto} alt="TV" />
          {isShowVideo && (
            <TvVideo
              volume={0}
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
        </TvWrapper>
      </VideoWrapper>
      <MaskGroup2 ref={MaskGroup2_paralax.ref} src={maskGroup2Photo} />
      <TextWrapper>
        <StaticTextBlocks
          title="״למנצח שיר מזמור״, בנייני האומה בירושלים."
          text="בשנת 82 זכה זוהר ארגוב, עד אז זמר קסטות אלמוני מראשון לציון, בפסטיבל הזמר המזרחי עם השיר ״הפרח בגני״. את השיר כתב והלחין אביהו מדינה, שהיווה דמות מפתח משמעותית במאבק מול הדרת הז׳אנר ועמד בחזיתו, וכתב מאות שירים שהפכו לפס הקול הלאומי. הזכייה של זוהר סימלה את עליית המוזיקה המזרחית, והיוותה נקודת מפנה עיקרית אשר סללה את הדרך לאמנים רבים אחריו ושברה את המחסום למיינסטרים. ארגוב נגע לרגע במידה של פופולריות, שהיתה יכולה לפרוץ את דרכה של המוזיקה המזרחית ככלל אל חיק הקונצנזוס, אבל הוא מעד בדקה ה90. "
        />
      </TextWrapper>
    </Wrapper>
  )
}

export default TurningPoint
