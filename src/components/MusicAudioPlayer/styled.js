import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 999;
  bottom: 0;
  left: 32px;
`;

export const Speaker = styled.img`
  width: 20px;
  height: 22px;
  margin-top: 5px;
`;

export const MusicName = styled.p`
  height: 46px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  direction: rtl;
  font-family: Narkiss Text TRIAL;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 100%;
  text-align: right;
  color: #e51c1f;
  border-right: 1px solid #e51c1f;
`;
