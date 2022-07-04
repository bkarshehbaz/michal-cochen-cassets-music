import styled from "styled-components";
import { StyledYear } from "../../pages/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 195px;
  height: 2100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 400px;

  @media (min-width: 1920px;) {
    margin-top: 235px;
  }
`;

export const Title = styled.img`
  position: absolute;
  width: 83%;
  z-index: 2;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: 1920px;) {
    width: 100%;
  }
`;

export const StyledContentYear = styled(StyledYear)`
  color: #000000;
  position: absolute;
  top: 0;
  right: 181px;
  font-family: Cristyle;
`;

export const Background = styled.img`
  width: 100%;
`;

export const TextWrapper = styled.div`
  margin: 0 auto;
`;

export const ParagraphWrapper = styled.div`
  width: 580px;
`;

export const TvVideo = styled(ReactPlayer)`
  z-index: 1;
  width: 100% !important;
  height: 1156px !important;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
  bottom: 350px;
`;
