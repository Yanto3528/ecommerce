import React, { useState } from "react";
import Button from "../Button";

import { PaginationContainer } from "./styles";

const Pagination = ({ pageCount }) => {
  return (
    <PaginationContainer>
      <Button type="pagination">Previous</Button>
      <Button type="pagination">1</Button>
      <Button type="pagination">2</Button>
      <Button type="pagination">3</Button>
      <Button type="pagination">4</Button>
      <Button type="pagination">Next</Button>
    </PaginationContainer>
  );
};

export default Pagination;
