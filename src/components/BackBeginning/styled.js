import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.p`
  width: 515px;
  margin-top: 300px;
  font-family: 'Narkiss Text TRIAL';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 100%;
  text-align: right;
  color: #000000;
  direction: rtl;
`

export const Link_scroll = styled(Link)`
  margin: 222px 0 515px;
  font-family: 'Narkiss Text TRIAL';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 100%;
  text-align: center;
  color: #e51c1f;
  cursor: pointer;

  :hover {
    font-size: 28px;
  }
`
