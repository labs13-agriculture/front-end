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

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 95%;
    color: white;
    margin: 10px auto;


    label{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .name{
        width: 100%;

        input{
            width: 87.5%;
        }
    }
    .location{
        width: 50%;

        input{
            width: 75%;
            margin: auto;
        }
    }

    .checkbox{
        width: 10%;
        justify-content: space-around;
    }

    .submitButton{
        width: 20%;
    }
`;

export default StyledForm;