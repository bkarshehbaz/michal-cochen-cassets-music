import React, { useEffect, useContext } from 'react'

import { useInView } from 'react-intersection-observer'
import ReactPlayer from 'react-player'
import StaticBlocks from '../components/StaticBlocks'
import { Context } from '../Context'

import {
  NaturalSelectionWrapper,
  NaturalReactPlayerWrapper,
  TextNaturalSelectionWrapper,
} from './styled'

export default function VideoFrom1976({
  isShowVideo,
  setIsShowVideo,
  setIsJerusalemVideo,
}) {
  const { ref, inView } = useInView()
  const { dispatch } = useContext(Context)

  const naturalSelection = {
    blockPhoto: (
      <NaturalSelectionWrapper>
        <NaturalReactPlayerWrapper>
          <ReactPlayer
            url={
              'https://www.youtube.com/watch?v=TCKoEK4hlsw&ab_channel=GuyAlon'
            }
            onReady={true}
            playing={isShowVideo}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
        </NaturalReactPlayerWrapper>
      </NaturalSelectionWrapper>
    ),
    year: '1976',
    title: 'הברירה הטבעית',
    underTitle: (
      <TextNaturalSelectionWrapper>
        באותם השנים פעלה סצנה קטנה וייחודית של מוזיקה מזרחית מסוג אחר, שהניפה נס
        כפול: מחאה חברתית חריפה, לצד שאיבה ממקורות העומק של השירה והמוזיקה
        המסורתית בצפון אפריקה, אנדלוסיה והודו. להקת ״הברירה הטבעית״ בראשות שלמה
        בר, יצרה פיוז׳ן של מוזיקה מסורתית וחדשה שהולבשה על טקסטים של מחאה, דוגמת
        ״ריצתו של העולה דנינו״ מאת נתן אלתרמן ו״ילדים זה שמחה״, שכתב יהושוע
        סובול להצגה ״קריזה״.
      </TextNaturalSelectionWrapper>
    ),
  }

  useEffect(() => {
    if (inView) {
      setIsJerusalemVideo(false)
      setIsShowVideo(true)
      dispatch({
        type: 'secondNameMusic',
        payload: {
          nameMusic: 'הברירה הטבעית - ילדים זה שמחה',
          musicPlaying: 'video',
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <span ref={ref}>
      <StaticBlocks {...naturalSelection} />;
    </span>
  )
}
