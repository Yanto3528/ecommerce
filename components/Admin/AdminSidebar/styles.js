import styled from "styled-components";

export const AdminSidebarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 300px;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.lightgrey2};
  background-color: white;
  h1 {
    margin: 10px 0 30px 20px;
    color: ${({ theme }) => theme.primary};
  }
`;

export const AdminSidebarNavItem = styled.li`
  padding: 10px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s;
  a {
    color: ${({ theme }) => theme.darkgrey};
    font-weight: 600;
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
  &:hover {
    a {
      color: ${({ theme }) => theme.primary};
    }
    background-color: ${({ theme }) => theme.lightgrey};
  }
`;
