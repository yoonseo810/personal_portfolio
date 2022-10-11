import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Webpage!
      </SectionTitle>
      <SectionText>
        I am a student at Seneca College, enrolled in Computer Programming and Analysis.
        I have passion for creating and building web applications using React.js frameworks.
        I am a self-motivated, proficient, organized, and passionate candidate who can bring great value to your company.
      </SectionText>
      <Button onClick = {() => window.location = 'https://www.linkedin.com/in/yoonseong-seo-373b84234'}>More About Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;