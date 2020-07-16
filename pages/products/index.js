import React from "react";

import ProductList from "../../components/Products/ProductList";
import { ProtectedRoute } from "../../contexts/AuthContext";

const Products = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default ProtectedRoute(Products);
