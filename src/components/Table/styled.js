import styled from 'styled-components'
import { StyledYear } from '../../pages/styled'

import background_black from '../../utils/images/png/loversHerParents/background_black.png'

export const StyledContentWrapper = styled.div`
  overscroll-behavior: none;
  position: relative;
  margin-top: 100px;
  width: 100vw;
`

export const StyledTableWrapper = styled.div`
  position: relative;
  width: 5757px;
  min-height: 2023px;
  transform: translateX(-70%);

  @media (min-width: 1900px) {
    transform: translateX(-65%);
  }
`

export const StyledTable = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 3;
`

export const StyledTableContent = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: -70px;
  right: 25px;
  z-index: 4;
`

export const StyledTableBottom = styled.img`
  position: absolute;
  top: 100vh;
  left: 0;
  background-image: url(${background_black});
  background-size: 100% 56%;
  background-position: bottom;
  background-repeat: no-repeat;
  padding-bottom: 300px;
`

export const StyledTitleWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 900px;
  left: -1600px;
  opacity: 0;
  z-index: 2;

  @media (min-width: 1919px) {
    left: -1900px;
  }
`

export const StyledTableYear = styled(StyledYear)`
  color: #000000;
  font-family: crystal;
  position: absolute;
  top: 50px;
  right: 60px;
`

export const StyledSlogan = styled.img`
  width: 100%;
`

export const StyledFlag = styled.img`
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 1;
`

export const Text1 = styled.p`
  position: absolute;
  top: 120px;
  right: 678px;
  width: 530px;
  height: 480px;
  font-family: 'Narkiss Text TRIAL';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 24px;
  text-align: right;
  z-index: 5;
  direction: rtl;
`
export const Text2 = styled.p`
  position: absolute;
  top: 35px;
  right: 2599px;
  width: 535px;
  height: 480px;
  font-family: 'Narkiss Text TRIAL';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 24px;
  text-align: right;
  z-index: 5;
  direction: rtl;
`
export const Text3 = styled.p`
  position: absolute;
  top: 110px;
  right: 4514px;
  width: 520px;
  height: 480px;
  font-family: 'Narkiss Text TRIAL';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 24px;
  text-align: right;
  z-index: 6;
  direction: rtl;
`
