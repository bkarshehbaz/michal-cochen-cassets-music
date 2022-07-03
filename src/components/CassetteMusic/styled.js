import styled from 'styled-components'
import background from '../../utils/images/png/cassetteMusic/background.png'
import building from '../../utils/images/png/cassetteMusic/building.png'
import laundry1 from '../../utils/images/png/cassetteMusic/laundry1.png'
import laundry2 from '../../utils/images/png/cassetteMusic/laundry2.png'
import street1 from '../../utils/images/png/cassetteMusic/street1.png'
import street2 from '../../utils/images/png/cassetteMusic/street2.png'
import street3 from '../../utils/images/png/cassetteMusic/street3.png'
import car from '../../utils/images/png/cassetteMusic/car.png'
import man from '../../utils/images/png/cassetteMusic/man.png'
import bird1 from '../../utils/images/png/cassetteMusic/bird1.png'
import bird2 from '../../utils/images/png/cassetteMusic/bird2.png'
import bird3 from '../../utils/images/png/cassetteMusic/bird3.png'

export const Wrapper = styled.div`
  padding: 300px 0 0;
  position: relative;
  background-image: url(${background});
  background-size: 100% 120%;
  width: 100%;
  height: 2350px;
  overflow: hidden;
`

export const Building = styled.div`
  position: relative;
  z-index: 2;
  background-image: url(${building});
  background-size: 100% 100%;
  width: 100%;
  height: 2000px;
  display: flex;
  justify-content: center;
`

export const StyledTextWrapper = styled.div`
  width: 564px;
  height: 276px;
  font-family: 'Narkiss Text TRIAL';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 100%;
  text-align: right;
  direction: rtl;
`

export const Text = styled.p`
  width: 90%;
`

export const Bird1 = styled.div`
  position: absolute;
  top: 18%;
  left: 34%;
  background: url(${bird1});
  background-repeat: no-repeat;
  width: 157px;
  height: 180px;
`

export const Bird2 = styled.div`
  position: absolute;
  top: 14%;
  left: 27%;
  background: url(${bird2});
  background-repeat: no-repeat;
  width: 160px;
  height: 123px;
`

export const Bird3 = styled.div`
  position: absolute;
  top: 22%;
  left: 22%;
  background: url(${bird3});
  background-repeat: no-repeat;
  width: 157px;
  height: 103px;
`

export const Laundry1 = styled.div`
  position: absolute;
  top: 840px;
  z-index: 10;
  background: url(${laundry1});
  background-size: 100% 100%;
  width: 100%;
  height: 580px;
`

export const Laundry2 = styled.div`
  position: absolute;
  left: 480px;
  top: 1390px;
  z-index: 10;
  background: url(${laundry2});
  background-repeat: no-repeat;
  background-size: 50% 50%;
  width: 100%;
  height: 580px;
`

export const BottomWrapper = styled.div`
  position: relative;
  top: -360px;
  z-index: 1;
  width: 100%;
  height: 400px;
  border: solid sivler 2px;
`

export const Street1 = styled.div`
  position: absolute;
  top: 150px;
  background: url(${street1});
  background-repeat: no-repeat;
  background-size: 74% 96%;
  width: 100%;
  height: 594px;
  z-index: 3;
`

export const Street2 = styled.div`
  position: absolute;
  background: url(${street2});
  background-repeat: no-repeat;
  background-size: 100% 90%;
  width: 100%;
  height: 576px;
  z-index: 1;
`

export const Street3 = styled.div`
  position: absolute;
  top: 424px;
  right: 0;
  background: url(${street3});
  background-repeat: no-repeat;
  width: 1177px;
  height: 290px;
  z-index: 2;
`

export const Car = styled.div`
  position: absolute;
  top: -30px;
  left: 18px;
  background: url(${car});
  background-repeat: no-repeat;
  width: 100%;
  height: 480px;
  z-index: 20;
`

export const Man = styled.div`
  position: absolute;
  top: 147px;
  right: 114px;
  background: url(${man});
  background-repeat: no-repeat;
  width: 406px;
  height: 480px;
  z-index: 20;
`

export const Title = styled.p`
  width: 550px;
  font-family: 'Cristyle';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 100%;
  text-align: right;
  direction: rtl;
  margin: 0;
`

export const Subtitle = styled.p`
  width: 550px;
  height: 276px;
  margin: 10px 0;
  font-family: 'Narkiss Text TRIAL';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 100%;
  text-align: right;
  direction: rtl;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`