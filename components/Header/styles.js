import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  a {
    color: ${({ theme }) => theme.darkgrey};
  }
`;

export const NavIcon = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
