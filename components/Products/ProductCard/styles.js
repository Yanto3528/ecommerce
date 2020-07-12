import styled from "styled-components";

export const ProductCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.5)
  );
  overflow: hidden;
  opacity: 0;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;
  h3,
  p {
    opacity: 0;
    transition: all 0.4s;
    transform: translateY(-100px);
    margin-bottom: 30px;
  }
  h3 {
    margin-bottom: 0;
  }
  button {
    opacity: 0;
    transform: translateY(100px);
  }
`;

export const ProductCardContainer = styled.div`
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover ${ProductCardOverlay} {
    opacity: 1;
    h3,
    p,
    button {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
