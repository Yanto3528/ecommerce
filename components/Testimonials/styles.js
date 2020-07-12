import styled from "styled-components";

export const TestimonialsContainer = styled.section`
  padding: 20px 0;
  h2 {
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 20px;
  }
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
