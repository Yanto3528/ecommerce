import Button from "../../Button";

import { ProductCardContainer, ProductCardOverlay } from "./styles";

const ProductCard = () => {
  return (
    <ProductCardContainer>
      <img
        src="https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt="t-shirt"
      />
      <ProductCardOverlay>
        <h3>Product Name</h3>
        <p>$19.99</p>
        <Button>ADD TO CART</Button>
      </ProductCardOverlay>
    </ProductCardContainer>
  );
};

export default ProductCard;
