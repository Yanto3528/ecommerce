import styled from "styled-components";

export const FeaturesContainer = styled.section`
  background-color: ${({ theme }) => theme.lightgrey};
  padding: 20px 0;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 20px;
`;
