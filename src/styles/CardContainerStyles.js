import styled, { css } from "styled-components";
import { theme } from "../config";
const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;

  return acc;
}, {});

const CardContainer = styled.div`
  height: 425px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
  align-content: flex-start;

  &::-webkit-scrollbar {
    display: none;
  }

  .spinner {
    color: ${theme.accent};
    width: 10rem;
    height: 10rem;
    margin: auto;
    border: 1em solid ${theme.activeblue};
    border-right-color: transparent;
  }

  h3 {
    text-decoration: none;
  }

  p {
    text-decoration: none;
  }
`;

export default CardContainer;
