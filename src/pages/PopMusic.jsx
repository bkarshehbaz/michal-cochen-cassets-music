import React, { useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Context } from '../Context'

import OrientalWesternMusic from '../components/OrientalWesternMusic'

const PopMusic = () => {
  const { dispatch } = useContext(Context)
  const { ref, inView } = useInView({ rootMargin: '-49%' })

  useEffect(() => {
    if (inView) {
      dispatch({
        type: 'secondNameMusic',
        payload: {
          nameMusic: 'אייל גולן | לקנות לך יהלום',
          musicPlaying: 'popMusic',
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <span ref={ref}>
      <OrientalWesternMusic />
    </span>
  )
}

export default PopMusic
