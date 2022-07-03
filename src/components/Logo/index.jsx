import React from "react";

import logo from "../../utils/images/png/logo.png";

import { Wrapper, LogoWrapper, LogoLink } from "./styled";

const Logo = () => (
  <Wrapper>
    <LogoLink to={"start"} spy={true} offset={-70}>
      <LogoWrapper src={logo} alt="" />
    </LogoLink>
  </Wrapper>
);

export default Logo;
