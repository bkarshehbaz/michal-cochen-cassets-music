import styled from "styled-components";
import { StyledYear } from "../../pages/styled";

export const StyledContentWrapper = styled.div`
  overscroll-behavior: none;
  position: relative;
  overflow: hidden;
  width: 100vw;
`;

export const StyledDiscoWrapper = styled.div`
  position: relative;
  width: 3835px;
  min-height: 1080px;
  transform: translateX(-55.5%);

  @media (min-width: 1920px) {
    transform: translateX(-49%);
  }

  @media (min-width: 2050px) {
    transform: translateX(-44.5%);
  }
`;

export const StyledDiscoBackground = styled.img`
  position: absolute;
  top: 55px;
  width: 70%;
  height: 100vh;
  right: 0;
  z-index: 1;
`;

export const StyledDiscs = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
`;

export const StyledTitleWrapper = styled.div`
  position: absolute;
  top: 140px;
  right: 220px;
  z-index: 5;
`;

export const StyledTableYear = styled(StyledYear)`
  position: absolute;
  top: -95px;
  right: 10px;
  font-family: Cristyle;
  color: #000000;
`;

export const StyledTitle = styled.img`
  width: 1500px;
  height: 700px;
`;

export const StyledText = styled.div`
  position: absolute;
  width: 520px;
  top: 400px;
  left: 650px;
  z-index: 5;
  font-size: 21px;
  font-weight: normal;
  line-height: 20px;
  text-align: right;
  direction: rtl;

  @media (min-width: 1920px) {
    top: 440px;
  }
`;

export const StyledTopImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;
