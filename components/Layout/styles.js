import styled, { css } from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  > *:nth-child(2) {
    flex: 1;
  }
  footer {
    justify-self: flex-end;
  }

  ${({ isAdmin }) =>
    isAdmin &&
    css`
      background-color: ${({ isAdmin, theme }) =>
        isAdmin ? theme.background : "white"};
    `}
  padding-top: 60px;
  padding-left: 300px;
`;
