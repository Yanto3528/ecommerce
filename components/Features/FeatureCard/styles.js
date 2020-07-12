import styled from "styled-components";

export const FeatureCardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: ${({ theme }) => theme.darkgrey2};
  h3 {
    margin-bottom: 20px;
  }
`;
