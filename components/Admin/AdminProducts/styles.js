import styled from "styled-components";

export const AdminProductsContainer = styled.section`
  width: 100%;
  padding: 20px;
`;

export const AdminProductHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const AdminProductTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 5px;
  th {
    color: ${({ theme }) => theme.darkgrey2};
    background-color: white;
  }
  td {
    color: ${({ theme }) => theme.darkgrey};
    font-weight: 600;
  }
  th,
  td {
    padding: 20px;
    border-top: 1px solid ${({ theme }) => theme.lightgrey};
    border-bottom: 1px solid ${({ theme }) => theme.lightgrey};
    &:first-child {
      border-left: 1px solid ${({ theme }) => theme.lightgrey};
    }
    &:last-child {
      border-right: 1px solid ${({ theme }) => theme.lightgrey};
    }
    text-align: left;
  }
  td input,
  th input {
    margin-right: 10px;
  }
  td:last-child {
    width: 150px;
  }
`;

export const AdminProductTableBody = styled.tr`
  background-color: white;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    box-shadow: 0 1px 5px rgba(47, 76, 212, 0.25);
  }
`;

export const AdminProductsIcon = styled.span`
  display: inline-block;
  cursor: pointer;
  transition: all 0.4s;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    svg {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
