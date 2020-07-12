import React from "react";

import Button from "../../Button";

import { QuantityInput } from "./styles";

const ProductQuantity = ({ value, onChange }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Button type="inverted-black">-</Button>
      <QuantityInput
        type="number"
        name="quantity"
        id="quantity"
        value={value}
        onChange={onChange}
      />
      <Button type="inverted-black">+</Button>
    </div>
  );
};

export default ProductQuantity;
