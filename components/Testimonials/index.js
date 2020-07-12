import React from "react";

import Testimonial from "./Testimonial";

import { TestimonialsContainer, TestimonialsGrid } from "./styles";
import Container from "../../styles/shared/Container";

const Testimonials = () => {
  return (
    <Container>
      <TestimonialsContainer>
        <h2>What our customers says about us</h2>
        <TestimonialsGrid>
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </TestimonialsGrid>
      </TestimonialsContainer>
    </Container>
  );
};

export default Testimonials;
