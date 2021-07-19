import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import { Container, Div2, Div3, NavLink, SocialIcons } from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div2>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink> Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/mosaadaldeen">
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://www.linkedin.com/in/mohammad-saadaldeen/"
      >
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
      <SocialIcons href="mailto:mohammadsd97@gmail.com.com">
        <MdEmail size="4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
