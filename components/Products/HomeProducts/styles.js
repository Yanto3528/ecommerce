import styled from "styled-components";

export const HomeProductsContainer = styled.section`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 3.5rem;
  }
  button {
    margin-top: 20px;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;
