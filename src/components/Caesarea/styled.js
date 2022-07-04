import styled from "styled-components";
import { StyledYear } from "../../pages/styled";

export const Wrapper = styled.div`
  margin-top: 200px;
  width: 100%;
`;

export const StyledCaersaresYear = styled(StyledYear)`
  color: #000000;
  font-family: Cristyle;
  position: absolute;
  top: -6%;
  right: 8%;
  z-index: 5;
`;

export const TitleWrapper = styled.div`
  position: relative;
  height: 1350px;
  display: flex;
  justify-content: center;
`;

export const Title = styled.img`
  position: absolute;
  width: 813px;
  top: 0;
  right: 8%;
  z-index: 90;
}
`;

export const Caersarea_bg_1 = styled.img`
  position: absolute;
  width: 1676px;
  height: auto;
  z-index: 1;
  top: -10px;
  left: 0;
`;

export const Caersarea_bg_2 = styled.img`
  position: absolute;
  width: 1300px;
  height: auto;
  z-index: 3;
  top: 20%;
  right: 0;
`;

export const Caersarea_bg_3 = styled.img`
  position: absolute;
  width: 1400px;
  height: auto;
  z-index: 2;
  bottom: 0;
  left: 0;
`;

export const TextWrapper = styled.div`
  margin: auto;
`;
