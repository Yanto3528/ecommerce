import styled from "styled-components";

export const HeroContainer = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  background-position: top;
  background-size: cover;
  height: 800px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeroContent = styled.div`
  width: 500px;
  text-align: center;
  h1 {
    font-size: 6rem;
  }
  p {
    margin-bottom: 30px;
  }
`;
