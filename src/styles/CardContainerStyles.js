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
    height: 425px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }


  h3{
    text-decoration: none;
  }

  p{
    text-decoration: none;
  }

`;

export default CardContainer