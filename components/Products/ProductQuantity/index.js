import React from "react";

import Button from "../../Button";

import { QuantityInput } from "./styles";

const ProductQuantity = ({ value, onChange, increment, decrement }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Button type="inverted-black" onClick={decrement}>
        -
      </Button>
      <QuantityInput
        type="number"
        name="quantity"
        id="quantity"
        disabled
        value={value}
        onChange={onChange}
      />
      <Button type="inverted-black" onClick={increment}>
        +
      </Button>
    </div>
  );
};

export default ProductQuantity;
