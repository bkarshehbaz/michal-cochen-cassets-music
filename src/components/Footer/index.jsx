import React from "react";

import footerPhoto from "../../utils/images/png/end strip.jpg";

import { Wrapper, FooterPhotoWrapper } from "./styled";

const Footer = () => {
  return (
    <Wrapper>
      <FooterPhotoWrapper src={footerPhoto} alt="" />
    </Wrapper>
  );
};

export default Footer;
