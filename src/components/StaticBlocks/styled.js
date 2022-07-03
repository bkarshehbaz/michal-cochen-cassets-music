import styled from 'styled-components'
import staticBlockFrame from '../../utils/images/png/static_block_frame.png'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 1102px;
  background-image: url(${staticBlockFrame});
  background-size: 50.4% 100%;
  background-repeat: no-repeat;
  border: 0.5px solid #000000;
`

export const PgotoWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`

export const TextBlock = styled.div`
  width: 40%;
  height: 100%;
  margin: auto 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 100px 0 0;
`
export const TextWrapper = styled.div`
  max-width: 552px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
`

export const Title = styled.p`
  max-width: 470px;
  font-family: 'Cristyle';
  font-style: normal;
  font-weight: normal;
  font-size: 44px;
  line-height: 90%;
  text-align: right;
  margin: 0;
  color: #000000;
  direction: rtl;
`

export const UnderTitle = styled.p`
  font-family: 'Narkiss Text TRIAL';
  margin: 26px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  text-align: right;
  line-height: 1.2;
  direction: rtl;
`
