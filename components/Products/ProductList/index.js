import React from "react";
import ProductsFilter from "../ProductsFilter";
import ProductCard from "../ProductCard";
import Pagination from "../../Pagination";
import ButtonList from "../../ButtonList";
import Button from "../../Button";

import {
  ProductListContainer,
  ProductListAction,
  ProductListGrid,
} from "./styles";
import Container from "../../../styles/shared/Container";

const pages = [1, 2, 3, 4, 5];

const ProductList = () => {
  return (
    <ProductListContainer>
      <Container>
        <h1>All Products</h1>
        <ProductListAction>
          <ProductsFilter />
          <ButtonList margin="10px" isPagination>
            {pages.map((page, index) => (
              <Button type="inverted-black" key={index}>
                {page}
              </Button>
            ))}
          </ButtonList>
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
