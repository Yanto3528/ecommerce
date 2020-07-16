import React, { useState } from "react";

import ProductQuantity from "../ProductQuantity";
import ProductColor from "../ProductColor";
import ButtonList from "../../ButtonList";
import Button from "../../Button";
import Select from "../../Select";
import Container from "../../../styles/shared/Container";

import { ProductComponentContainer, ProductDetails } from "./styles";

const sizes = [{ label: "S" }, { label: "M" }, { label: "L" }, { label: "XL" }];
const colors = ["#FF4D4F", "#52C41A", "#1890FF"];

const ProductComponent = () => {
  const [data, setData] = useState({
    quantity: 1,
  });
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const { quantity } = data;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const incrementQuantity = () =>
    setData((prevState) => ({
      ...prevState,
      quantity: prevState.quantity + 1,
    }));
  const decrementQuantity = () => {
    if (quantity > 1) {
      setData((prevState) => ({
        ...prevState,
        quantity: prevState.quantity - 1,
      }));
    }
  };

  const onChangeColor = (index) => setSelectedColor(index);
  const onChangeSize = (index) => setSelectedSize(index);

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
            {sizes.map((size, index) => (
              <Select
                type="inverted-black"
                selected={selectedSize}
                onClick={onChangeSize}
                index={index}
                component={Button}
              >
                {size.label}
              </Select>
            ))}
          </ButtonList>
          <ButtonList title="Color" margin="10px">
            {colors.map((color, index) => (
              <Select
                color={color}
                onClick={onChangeColor}
                index={index}
                selected={selectedColor}
                component={ProductColor}
              />
            ))}
          </ButtonList>
          <ProductQuantity
            value={quantity}
            onChange={handleChange}
            increment={incrementQuantity}
            decrement={decrementQuantity}
          />
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
