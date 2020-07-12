import React, { useState } from "react";

import ProductQuantity from "../ProductQuantity";
import ProductColor from "../ProductColor";
import ButtonList from "../../ButtonList";
import Button from "../../Button";
import Container from "../../../styles/shared/Container";

import { ProductComponentContainer, ProductDetails } from "./styles";

const sizes = [{ label: "S" }, { label: "M" }, { label: "L" }, { label: "XL" }];
const colors = ["#FF4D4F", "#52C41A", "#1890FF"];

const ProductComponent = () => {
  const [data, setData] = useState({
    quantity: 1,
  });
  const [selectedColor, setSelectedColor] = useState(0);
  const { quantity } = data;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const onChangeColor = (index) => setSelectedColor(index);

  return (
    <Container>
      <ProductComponentContainer>
        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt=""
        />
        <ProductDetails>
          <h1>Product Name</h1>
          <p>$19.99</p>
          <ButtonList title="Size" margin="10px">
            {sizes.map((size) => (
              <Button type="inverted-black">{size.label}</Button>
            ))}
          </ButtonList>
          <ButtonList title="Color" margin="10px">
            {colors.map((color, index) => (
              <ProductColor
                color={color}
                onClick={onChangeColor}
                index={index}
                selected={selectedColor}
              />
            ))}
          </ButtonList>
          <ProductQuantity value={quantity} onChange={handleChange} />
          <Button style={{ marginBottom: "20px" }}>ADD TO CART</Button>
          <div>
            <h3>Description</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              corrupti quae itaque cum culpa deleniti magnam voluptatem
              perferendis, inventore quisquam.
            </p>
          </div>
        </ProductDetails>
      </ProductComponentContainer>
    </Container>
  );
};

export default ProductComponent;
