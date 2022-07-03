import styled from "styled-components";
import { Link } from "react-scroll";

export const Wrapper = styled.div`
  position: fixed;
  width: 185px;
  height: 70px;
  left: 2px;
  top: 0;
  z-index: 99;
  font-family: "Narkiss Text";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 85%;
  text-align: center;
  color: #e51c1f;
  border-right: 1px solid #e51c1f;
  display: flex;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  cursor: pointer;
  margin-top: 15px;
`;

export const LogoWrapper = styled.img`
  width: 125px;
  height: 53px;
  margin: 0 0 0 25px;
`;
