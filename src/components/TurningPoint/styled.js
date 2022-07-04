import styled from "styled-components";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 700px 0 0;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Year = styled.p`
  position: absolute;
  font-family: Cristyle;
  font-style: normal;
  font-weight: normal;
  font-size: 92px;
  line-height: 98.1%;
  text-align: right;
  letter-spacing: -0.02em;
  color: #000000;
  top: 100px;
  right: 200px;
  z-index: 10;
`;

export const Title = styled.img`
  position: absolute;
  z-index: 99;
  top: 280px;
  right: 50vw;
  width: 899px;
  height: 421px;
  transform: translate(50%, 0%);
`;

export const MaskGroup1 = styled.img`
  position: absolute;
  top: 220px;
  right: 0;
`;
export const MaskGroup2 = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 310px;
  left: 0;
`;

export const MaskGroup3 = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 310px;
  left: 0;
`;

export const Tv = styled.img`
  width: 100%;
  height: 100%;
`;

export const TvWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 1493px;
  height: 1125px;
  overflow: hidden;
`;

export const TvVideo = styled(ReactPlayer)`
  width: 102% !important;
  height: 100.5% !important;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const TextWrapper = styled.div`
  margin: 250px 0 300px;
`;

export const News1 = styled.img`
  position: absolute;
  top: -200px;
  left: 0;
`;

export const News2 = styled.img`
  width: 100%;
  position: absolute;
  bottom: -340px;
  left: 0;
  z-index: 2;
`;

export const News3 = styled.img`
  position: absolute;
  bottom: -240px;
  left: -5px;
  z-index: 1;
`;
