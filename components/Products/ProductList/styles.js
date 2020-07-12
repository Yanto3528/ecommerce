import styled from "styled-components";

export const ProductListContainer = styled.section`
  h1 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 20px;
  }
`;

export const ProductListAction = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ProductListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;
