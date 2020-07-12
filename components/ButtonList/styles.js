import styled from "styled-components";

export const ButtonListContainer = styled.div`
  h3 {
    margin-bottom: 10px;
  }
  margin-bottom: 20px;
  > div > * {
    cursor: pointer;
  }
  > div > *:not(:last-child) {
    margin-right: ${({ margin }) => margin};
  }
`;
