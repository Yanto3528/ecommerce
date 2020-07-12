import styled from "styled-components";

export const QuantityInput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.lightgrey2};
  color: ${({ theme }) => theme.darkgrey};
  padding: 10px 0;
  text-align: center;
  width: 50px;
  -moz-appearance: textfield;
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
