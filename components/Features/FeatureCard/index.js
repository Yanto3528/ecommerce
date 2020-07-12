import React from "react";
import { FeatureCardContainer } from "./styles";

const FeaturesCard = ({ title, content, icon: IconComponent }) => {
  return (
    <FeatureCardContainer>
      <IconComponent size="3rem" />
      <h3>{title}</h3>
      <p>{content}</p>
    </FeatureCardContainer>
  );
};

export default FeaturesCard;
