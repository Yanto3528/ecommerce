import React from "react";

import { FaShippingFast } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import { RiPriceTagLine } from "react-icons/ri";
import FeatureCard from "./FeatureCard";

import { FeaturesContainer, FeaturesGrid } from "./styles";
import Container from "../../styles/shared/Container";

const Features = () => {
  return (
    <FeaturesContainer>
      <Container>
        <FeaturesGrid>
          <FeatureCard
            title="Fast Shipping"
            content="Experience lightning fast shipping to your house in just 2 days"
            icon={FaShippingFast}
          />
          <FeatureCard
            title="Free Shipping"
            content="Free shipping for orders exceeds $75"
            icon={MdCardMembership}
          />
          <FeatureCard
            title="Best Price"
            content="We are the only one that offer the cheapest price of all"
            icon={RiPriceTagLine}
          />
        </FeaturesGrid>
      </Container>
    </FeaturesContainer>
  );
};

export default Features;
