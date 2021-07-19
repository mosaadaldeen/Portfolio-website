import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm
          <br />
          Mohammad Saadaldeen
        </SectionTitle>
        <SectionText>
          I'm a software developer focusing on Front-End development using
          React, JavaScript, HTML and CSS, building responsive and user-friendly
          websites and web applications.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
