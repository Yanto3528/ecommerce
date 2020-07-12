import React from "react";

import { TestimonialContainer, TestimonialImage } from "./styles";
const Testimonial = () => {
  return (
    <TestimonialContainer>
      <TestimonialImage src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
      <div>
        <blockquote>
          "The products are really great!!, It is the greatest product ever in
          the world!"
        </blockquote>
        <p>Sam Smith</p>
      </div>
    </TestimonialContainer>
  );
};

export default Testimonial;
