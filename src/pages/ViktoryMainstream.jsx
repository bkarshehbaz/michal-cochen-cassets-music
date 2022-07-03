import React, { useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Context } from '../Context'

import VictoryOverMainstream from '../components/VictoryOverMainstream'

const ViktoryMainstream = () => {
  const { dispatch } = useContext(Context)
  const { ref, inView } = useInView({ rootMargin: '-49%' })

  useEffect(() => {
    if (inView) {
      dispatch({
        type: 'secondNameMusic',
        payload: {
          nameMusic: 'שרית חדד | כמו סינדרלה',
          musicPlaying: 'viktoryMainstream',
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <span ref={ref}>
      <VictoryOverMainstream />
    </span>
  )
}

export default ViktoryMainstream
