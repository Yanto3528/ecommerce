import { useState } from "react";
import Select from "react-select";

import { ProductsFilterContainer } from "./styles";

const options = [
  { value: "men", label: "Men" },
  { value: "women", label: "Women" },
  { value: "Apparel", label: "Apparel" },
];

const ProductsFilter = () => {
  const [selectedOption, setSelectedOption] = useState();

  const handleChange = (option) => setSelectedOption(option);

  return (
    <ProductsFilterContainer>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Filter"
        isSearchable={false}
      />
    </ProductsFilterContainer>
  );
};

export default ProductsFilter;
