import React from "react";
import Button from "../Button";

import { ButtonListContainer } from "./styles";

const ButtonList = ({ children, title, margin, isPagination }) => {
  return (
    <ButtonListContainer margin={margin}>
      {title && <h3>{title}</h3>}
      <div>
        {isPagination && <Button type="inverted-black">Previous</Button>}
        {children}
        {isPagination && <Button type="inverted-black">Next</Button>}
      </div>
    </ButtonListContainer>
  );
};

export default ButtonList;
