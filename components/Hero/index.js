import React from "react";

import { HeroContainer, HeroContent } from "./styles";
import Button from "../Button";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Main Header</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          necessitatibus facere fugiat
        </p>
        <Button type="inverted">Shop now</Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
