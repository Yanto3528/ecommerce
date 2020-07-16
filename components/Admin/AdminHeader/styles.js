import styled from "styled-components";

export const AdminHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  height: 60px;
  padding: 0 20px;
  width: 100vw;
  z-index: 1;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.lightgrey2};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
