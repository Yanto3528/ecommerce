import styled from "styled-components";

export const TestimonialContainer = styled.div`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  display: flex;
  align-items: flex-start;
  transform: skew(-10deg);
  > * {
    transform: skew(10deg);
  }
  blockquote {
    font-style: italic;
    margin-bottom: 10px;
  }
  div:last-child {
    flex: 1;
  }
`;

export const TestimonialImage = styled.div`
  background-image: ${({ src }) => `url("${src}")`};
  background-position: center;
  background-size: cover;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
`;
