import React from "react";
import ProductsFilter from "../ProductsFilter";
import ProductCard from "../ProductCard";
import Pagination from "../../Pagination";
import ButtonList from "../../ButtonList";

import {
  ProductListContainer,
  ProductListAction,
  ProductListGrid,
} from "./styles";
import Container from "../../../styles/shared/Container";

const ProductList = () => {
  return (
    <ProductListContainer>
      <Container>
        <h1>All Products</h1>
        <ProductListAction>
          <ProductsFilter />
          <ButtonList margin="10px" isPagination />
        </ProductListAction>
        <ProductListGrid>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductListGrid>
      </Container>
    </ProductListContainer>
  );
};

export default ProductList;
