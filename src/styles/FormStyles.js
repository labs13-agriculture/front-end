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

const FormStyles = styled.div`
  .header {
    background-color: ${theme.sideNavBackground};
    padding: 15px 20px;
    border-bottom:4px solid ${theme.activeblue};
  }

  h2 {
    width: 100%;
    color: ${theme.background_light};
  }

  .formContainer {
    background-color: ${theme.background_light};
  }
`;

export default FormStyles;
