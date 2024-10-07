import React from "react";
import { Container, Section } from "../../../../components";
import { Carousel } from '../../../ui/Carusel';

import './_style.scss'

export const Hero: React.FC = () => {
  return (
    <Section>
      <Container>
          <Carousel />
      </Container>
    </Section>
  );
};
