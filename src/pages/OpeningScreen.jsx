import React, { useEffect, useContext } from 'react'

import { useInView } from 'react-intersection-observer'
import { Context } from '../Context'
import CassetteMusic from '../components/CassetteMusic'
import HeroCafe from '../components/HeroCafe/index'
import FoundingFathers from '../components/FoundingFathers'


const OpeningScreen = ({ openModal, closeModal }) => {
  const { dispatch } = useContext(Context)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      dispatch({
        type: 'secondNameMusic',
        payload: {
          nameMusic: 'להקת צלילי העוד | חנה׳לה התבלבלה',
          musicPlaying: 'openingScreen',
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <span ref={ref}>
      <CassetteMusic closeModal={closeModal} />
      <FoundingFathers openModal={openModal} />
      <HeroCafe closeModal={closeModal} />
    </span>
  )
}

export default OpeningScreen
