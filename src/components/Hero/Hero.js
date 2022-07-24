import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br /> My Personal Portfolio!!
      </SectionTitle>
      <SectionText>I am Ha - a Front-End developer 😊.</SectionText>
      <Button onClick={() => (window.location = 'http://google.com')}>
        Learn More...
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
