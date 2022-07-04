import styled from "styled-components";
import { StyledYear } from "../../pages/styled";

import carPhoto from "../../utils/images/png/victoryOverMainstream/car.png";

export const Wrapper = styled.div`
  height: 128vw;
  margin-top: 350px;
  position: relative;
`;

export const StyledWrapperTitle = styled.div`
  position: relative;
  left: 263px;
`;

export const Title = styled.img`
  position: absolute;
  top: 200px;
  z-index: 10;
`;

export const StyledMainstreamYear = styled(StyledYear)`
  position: absolute;
  color: #000000;
  top: 160px;
  font-family: Cristyle;
  left: 1280px;
  z-index: 5;
`;

export const Background = styled.img`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 400px;
`;

export const Car = styled.div`
  width: 100%;
  height: 52vw;
  position: absolute;
  z-index: 5;
  background-image: url(${carPhoto});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Play = styled.img`
  width: 17vw;
  height: 8.45vw;
  margin-top: -45px;
  margin-left: 12px;
  cursor: pointer;
  width: 55%;
  height: 584px;
`;

export const Background_1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Pigeon = styled.img`
  position: absolute;
  top: 120px;
  right: 370px;
  z-index: 10;
`;
export const BackgroundWrapper = styled.div`
  position: relative;
`;
