import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome To<br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        bkknknkhnkjhn
      </SectionText>
      <Button> Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;