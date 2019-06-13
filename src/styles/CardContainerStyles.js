import styled, { css } from "styled-components";
const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;

  return acc;
}, {});

const CardContainer = styled.div`
    border: 2px solid turquoise;
    height: 100%;
    width: 100%;
`;

export default CardContainer