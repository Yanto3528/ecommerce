import styled, { css } from "styled-components";

const invertedStyles = css`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 50px;
  font-size: 2rem;
  padding: 15px 25px;
  color: white;
  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.darkgrey};
  }
`;

const defaultStyles = css`
  background-color: black;
  color: white;
  &:hover {
    background-color: #111;
  }
`;

export default styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.4s;
  ${({ type }) => {
    switch (type) {
      case "inverted":
        return invertedStyles;
      default:
        return defaultStyles;
    }
  }}
`;
