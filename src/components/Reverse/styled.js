import styled from 'styled-components'
import ReactPlayer from 'react-player'
import background from '../../utils/images/png/reverse/red_bg.png'
import { StyledYear } from '../../pages/styled'

export const Wrapper = styled.div`
  width: 100%;
`

export const BlockWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1300px;
  background-image: url(${background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.img`
  width: 86vw;
`

export const WrapperTv = styled.div`
  cursor: pointer;
  margin-top: -200px;
  width: 808px;
  height: 472px;
  position: relative;
  overflow: hidden;
`

export const Tv = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
`

export const TvGif = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const TvVideo = styled(ReactPlayer)`
  width: 616px !important;
  height: 403px !important;
  position: absolute;
  top: 50px;
  left: 20px;
  z-index: 5;
`

export const News1 = styled.img`
  position: absolute;
  top: -200px;
  left: 0;
`

export const News2 = styled.img`
  width: 100%;
  position: absolute;
  bottom: -340px;
  left: 0;
  z-index: 2;
`

export const News3 = styled.img`
  position: absolute;
  bottom: -240px;
  left: -5px;
  z-index: 1;
`

export const TextWrapper = styled.div`
  margin: 300px auto 400px;
`

export const StyledContentYear = styled(StyledYear)`
  position: absolute;
  color: #000000;
  z-index: 1;
  top: 14%;
  right: 11%;
  font-family: crystal;
`

export const ParagraphWrapper = styled.div`
  width: 571px;
`
