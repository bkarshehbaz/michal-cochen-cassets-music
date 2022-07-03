import styled from "styled-components";

import background_black from "../../utils/images/png/loversHerParents/background_black.png";
import { StyledYear } from "../../pages/styled";

export const Wrapper = styled.div`
  margin: -50px 0 0;
  padding: 100px 0 110px;
  width: 100%;
  height: 2200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background_black});
  background-size: 100% 70%;
  background-repeat: no-repeat;
  background-position: top;

  @media (min-width: 1920px) {
    margin: -300px 0 0;
  }
`;

export const WrapperParalax = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledContentYear = styled(StyledYear)`
  position: absolute;
  color: #c2c2c2;
  z-index: 1;
  top: 0;
  right: 12%;
  font-family: crystal;
  @media (min-width: 1920px;) {
    top: 0;
    right: 8%;
  }
`;

export const Title = styled.img`
  position: absolute;
  z-index: 1;
  width: 70%;
  height: 32vw;
  top: 5%;
  left: 50%;
  right: -50%;
  transform: translate(-50%, 0);

  @media (min-width: 1920px;) {
    width: 80%;
    height: 38vw;
  }
`;

export const Hand = styled.img`
  position: absolute;
  z-index: 5;
  top: 5%;
`;

export const Street = styled.img`
  position: absolute;
  z-index: 3;
  bottom: 50px;
`;

export const BlackBg = styled.img`
  position: absolute;
  z-index: 4;
  bottom: 80px;
`;

export const TextWrapper = styled.div`
  width: 550px;
`;
