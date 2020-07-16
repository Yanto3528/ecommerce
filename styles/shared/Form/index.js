import styled from "styled-components";

export const Form = styled.form`
  padding: 20px;
  width: ${({ width }) => (width ? width : "500px")};
  h1 {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
  label {
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
  }
  p {
    color: red;
  }
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.lightgrey2};
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  transition: all 0.4s;
  &:focus {
    border-color: ${({ theme }) => theme.darkgrey};
  }
`;
