import React, { useContext, useEffect } from 'react'
import { useParallax } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'
import { Context } from '../../Context'
import { InView } from 'react-intersection-observer'

import roadBg from '../../utils/images/png/victoryOverMainstream/road.png'
import titleImage from '../../utils/images/png/victoryOverMainstream/mainstreamTitle.png'
import background_photo_1 from '../../utils/images/png/victoryOverMainstream/background_1.png'
import pigeon_photo from '../../utils/images/png/victoryOverMainstream/pigeon.png'
import carRadio from '../../utils/images/png/victoryOverMainstream/car_radio.png'

import {
  Wrapper,
  Title,
  Background_1,
  Pigeon,
  Background,
  Car,
  Play,
  StyledWrapperTitle,
  StyledMainstreamYear,
  BackgroundWrapper,
} from './styled'

const VictoryOverMainstream = () => {
  const { ref, inView } = useInView({ threshold: 0 })
  const { dispatch } = useContext(Context)
  const background1_paralax = useParallax({ speed: -18 })
  const background_paralax = useParallax({ speed: -15 })
  
  const handleClick = () => {
    dispatch({
      type: 'secondNameMusic',
      payload: {
        nameMusic: 'בלחיצה על הרדיו',
        musicPlaying: 'musicCar',
      },
    })
  }


  return (
    <Wrapper id="2010_twoThousandsTens">
      <BackgroundWrapper ref={background1_paralax.ref}>
        <Pigeon src={pigeon_photo} />
        <Background_1 src={background_photo_1} />
      </BackgroundWrapper>
      <StyledWrapperTitle>
        <StyledMainstreamYear>2010</StyledMainstreamYear>
        <Title src={titleImage} alt="" />
      </StyledWrapperTitle>
      <Background src={roadBg} alt="road" ref={background_paralax.ref} />
      <Car ref={ref}>
        <Play onClick={handleClick} src={carRadio} alt="" />
      </Car>
    </Wrapper>
  )
}

export default VictoryOverMainstream
