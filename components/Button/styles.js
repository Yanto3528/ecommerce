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

const activeInvertedBlackStyles = css`
  background-color: ${({ theme }) => theme.darkgrey};
  color: white;
`;

const invertedBlackStyles = css`
  background-color: transparent;
  color: ${({ theme }) => theme.darkgrey};
  border: 1px solid ${({ theme }) => theme.lightgrey2};
  &:hover {
    ${activeInvertedBlackStyles}
  }
`;

const primaryStyles = css`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 5px;
  transition: all 0.4s;
  &:hover {
    opacity: 0.9;
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
      case "inverted-black":
        return invertedBlackStyles;
      case "primary":
        return primaryStyles;
      default:
        return defaultStyles;
    }
  }}
  ${({ selected }) => selected && activeInvertedBlackStyles}
  ${({ block }) =>
    block &&
    css`
      display: block;
      width: 100%;
    `}
`;
