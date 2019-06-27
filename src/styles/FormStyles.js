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
  background-color: ${theme.background_light};

  .header {
    background-color: ${theme.sideNavBackground};
    padding: 15px 20px;
  }

  h2 {
    width: 100%;
    color: ${theme.background_light};
  }

  .formContainer {
    background-color: ${theme.background_light};
  }

  .addItemForm-content {
    padding: 10px 20px;
  }

  .addItemForm-button-container {
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;

    button {
      max-width: 150px;
      width: 45%;
    }
  }
`;

export default FormStyles;
