import styled from "styled-components";

export const ProductComponentContainer = styled.section`
  margin: 50px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  img {
    width: 50%;
    margin-right: 20px;
  }
`;

export const ProductDetails = styled.div`
  h1 {
    font-size: 4rem;
  }
  p {
    margin-bottom: 20px;
  }
`;
