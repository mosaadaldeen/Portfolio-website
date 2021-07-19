import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  FooterWrapper,
  LinkColumn,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkColumn>
        Here you can find links to contact me using LinkedIn or E-mail.
      </LinkColumn>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href="https://github.com/mosaadaldeen">
            <AiFillGithub size="4rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://www.linkedin.com/in/mohammad-saadaldeen/"
          >
            <AiFillLinkedin size="4rem" />
          </SocialIcons>
          <SocialIcons href="mailto:mohammadsd97@gmail.com">
            <MdEmail size="4rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
