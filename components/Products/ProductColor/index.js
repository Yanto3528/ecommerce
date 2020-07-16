import React from "react";

import { ProductColorContainer } from "./styles";

// const ProductColor = ({ onClick, color, selected, index }) => {
//   const isSelected = selected === index;

//   const onChangeColor = (e) => {
//     onClick(index);
//   };

//   return (
//     <ProductColorContainer
//       onClick={onChangeColor}
//       color={color}
//       selected={isSelected}
//     />
//   );
// };

const ProductColor = ({ selected, onClick, ...props }) => {
  return (
    <ProductColorContainer selected={selected} onClick={onClick} {...props} />
  );
};

export default ProductColor;
