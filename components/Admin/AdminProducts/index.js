import React from "react";
import mockup from "../../../mockup";

import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import Button from "../../Button";
import {
  AdminProductsContainer,
  AdminProductHeader,
  AdminProductTable,
  AdminProductTableBody,
  AdminProductsIcon,
} from "./styles";

const AdminProducts = () => {
  return (
    <AdminProductsContainer>
      <AdminProductHeader>
        <h1>Products</h1>
        <Button type="primary">Add Product</Button>
      </AdminProductHeader>
      <AdminProductTable>
        <tr>
          <th>
            <input type="checkbox" /> Name
          </th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
        {mockup.map((product) => (
          <AdminProductTableBody>
            <td>
              <input type="checkbox" />
              {product.name}
            </td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.category}</td>
            <td>
              <AdminProductsIcon>
                <AiOutlineEye size="2rem" />
              </AdminProductsIcon>
              <AdminProductsIcon>
                <AiOutlineEdit size="2rem" />
              </AdminProductsIcon>
              <AdminProductsIcon>
                <AiOutlineDelete size="2rem" />
              </AdminProductsIcon>
            </td>
          </AdminProductTableBody>
        ))}
      </AdminProductTable>
    </AdminProductsContainer>
  );
};

export default AdminProducts;
