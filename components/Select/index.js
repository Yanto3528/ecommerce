import React from "react";

const Select = ({
  component: SelectComponent,
  onClick,
  selected,
  index,
  ...props
}) => {
  const isSelected = selected === index;
  console.log("selected", selected);
  console.log("index", index);

  const onChangeColor = (e) => {
    onClick(index);
  };

  return (
    <SelectComponent onClick={onChangeColor} selected={isSelected} {...props} />
  );
};

export default Select;
