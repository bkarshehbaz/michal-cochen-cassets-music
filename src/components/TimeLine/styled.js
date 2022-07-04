import styled from "styled-components";
import { Link } from "react-scroll";

export const StyledWrapper = styled.div`
  position: fixed;
  width: 65px;
  height 100vh;
  top: 0;
  right: 0;
  z-index: 999;
`;

export const StyledLine = styled.div`
  position: absolute;
  top: 0;
  background-color: #e51c1f;
  right: 38px;
  width: 2px;
  height: 100%;
`;

export const StyledYearsLine = styled.div`
  position: absolute;
  top: 3px;
  right: 15px;
  width: 30px;
  height: 1px;
  background-color: #e51c1f;
`;

export const StyledYearsCube = styled.div`
  position: absolute;
  top: 0;
  right: 50px;
  width: 13px;
  height: 10px;
  background-color: #e51c1f;
`;

export const StyledYear = styled(Link)`
  position: absolute;
  font-family: Cristyle;
  cursor: pointer;
  font-weight: 400;
  top: 20px;
  right: 3px;
  font-size: 21px;
  line-height: 24px;
  transform: rotate(90deg);
  color: #e51c1f;
  direction: rtl;
`;

export const StyledYearsWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: ${(props) => `${props.distance}%` || 0};
  right: 0;
`;

export const HoverTextWrapper = styled.p`
  position: absolute;
  top: -24px;
  right: 70px;
  width: 145px;
  height: 45px;
  font-family: "Narkiss Text";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  text-align: right;
  color: #e51c1f;
`;
