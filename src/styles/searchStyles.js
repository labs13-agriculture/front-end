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

    ${media.phone`flex-direction: column;`}
    ${media.phone`align-items: center;`}

    input{
      ${media.phone`margin-top: 5px;`}
    }

    div{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-content: center;
      width: 30%;
      padding-top: 10px;

      ${media.phone`width: 90%;`}

      input{
        margin-left: 5px;
        ${media.phone`margin-left: 2px;`}
      }
    }

    label{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        ${media.phone`flex-direction: column;`}
    }

    .name{
        width: 100%;

        input{
            width: 90.5%;
            ${media.desktop`width:90%;`}
            ${media.tablet`width:88.5%;`}
            ${media.phone`width: 90%;`}
        }
    }
    .location{
        width: 50%;
        ${media.phone`width:100%;`}

        input{
            width: 75%;
            ${media.phone`width: 90%;`}
        }
    }

    .checkbox{
        width: 10%;
        justify-content: space-around;
        ${media.phone`flex-direction: row;`}
        ${media.phone`width: 25%;`}
    }

    .submitButton{
        width: 20%;
        ${media.phone`width: 95%;`}
    }
`;

export default StyledForm;