import styled, { css } from "styled-components";

export const ProductColorContainer = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  position: relative;
  transition: all 0.4s;
  ${({ selected }) =>
    selected &&
    css`
      &:after {
        content: "";
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: transparent;
        border: 2px solid black;
        position: absolute;
        top: -5px;
        left: -5px;
        z-index: -1;
        transition: all 0.4s;
      }
    `}
`;
