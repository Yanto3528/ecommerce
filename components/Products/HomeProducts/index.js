import React from "react";

import ProductCard from "../ProductCard";

import { HomeProductsContainer, ProductGrid } from "./styles";
import Container from "../../../styles/shared/Container";
import Button from "../../Button";

const HomeProducts = ({ title }) => {
  return (
    <Container>
      <HomeProductsContainer>
        <h2>{title}</h2>
        <ProductGrid>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductGrid>
        <Button>View all products</Button>
      </HomeProductsContainer>
    </Container>
  );
};

export default HomeProducts;
