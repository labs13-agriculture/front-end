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
  color: ${theme.background_dark};

  .header {
    background-color: ${theme.sideNavBackground};
    padding: 15px 20px;
    border-bottom: 4px solid ${theme.activeblue};
  }

  h2 {
    width: 100%;
    color: ${theme.background_light};
  }

  .formContainer {
    background-color: ${theme.background_light};
    color: ${theme.background_dark};
  }

  .updateUser-form {
    width: 90%;
    padding-top: 5px;
    margin: 0 auto 10px;
  }

  .updateUser-buttons {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }

  .addUser-formGroup {
    width: 90%;
    margin: 0 auto 10px;
    padding-top: 10px;
  }

  .addUser-formGroup-button {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin-bottom: none;
    padding-bottom: 10px;
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

  .modal-content {
    color: ${theme.background_dark};
  }
`;

export default FormStyles;
