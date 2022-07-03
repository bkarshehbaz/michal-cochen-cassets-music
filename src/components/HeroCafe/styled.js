import styled from 'styled-components'
import cafeHero from '../../utils/images/png/cafe_noah_hero.png'
import HeroTitle from '../../utils/images/svg/heroTitle.svg'

export const StyledContentWrapper = styled.div`
  position: relative;
  margin-top: 491px;
  width: 100%;
`

export const StyledHeroTitle = styled.div`
  background-image: url(${HeroTitle});
  background-size: cover;
  width: 674px;
  height: 375px;

  @media (min-width: 1920px) {
    width: 812px;
    height: 452px;
  }
`

export const StyledHeroImage = styled.div`
  background-image: url(${cafeHero});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`

export const StyledHeroText = styled.div`
  width: 550px;
  font-family: 'Narkiss Text TRIAL';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 100%;
  text-align: right;
  margin: 83px auto 300px;
  direction: rtl;
`

export const StyledHeroSubtext = styled.span``

export const StyleTitleWrapper = styled.div`
  position: absolute;
  top: -250px;
  right: 200px;
  z-index: 3;

  @media (min-width: 1920px;) {
    top: -174px;
  }
`

export const TextBlocksWrapper = styled.div`
  width: 540px
`