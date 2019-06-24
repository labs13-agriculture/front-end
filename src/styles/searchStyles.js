import styled, { css } from "styled-components";
export const sizes = {
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

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    ${"" /* width: 95%; */}
    color: white;
    ${"" /* margin: 10px auto; */}

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
            width: 100%;
            height: 70px;
            margin-bottom: 10px;
            background: #00000047;
            border: none;
            border-radius: 0px;
            font-size: 30px;
            font-weight: 600;
            font-family: "Josefin Sans", sans-serif;
            color: white;
            caret-color: #40E0D0;
            padding: 16px 0px 10px 40px;
            ::placeholder{
                color:gray;
                size:30px;
            }
            ${media.desktop`width:100%;`}
            ${media.tablet`width:100%;`}
            ${media.phone`width: 100%;`}
        }
    }
    .location{
        width: 58%;
        ${media.phone`width:100%;`}

        input{
          width: 100%;
            height: 70px;
            margin-bottom: 40px;
            background: #00000047;
            border: none;
            border-radius: 0px;
            font-size: 30px;
            font-weight: 600;
            font-family: "Josefin Sans", sans-serif;
            color: white;
            caret-color: #40E0D0;
            padding: 16px 0px 10px 40px;
            ::placeholder{
                color:gray;
                size:25px;
            }
            ${media.phone`width: 100%;`}
        }
    }

    .checkbox{
        width: 10%;
        justify-content: space-around;
        ${media.phone`flex-direction: row;`}
        ${media.phone`width: 25%;`}
    }

    .submitButton{
      height: 70px;
      width: 20%;
      padding: 0px;

      border-radius: 0px;

      border: none;
      background:#40e0d0;
      &:hover{
        opacity:.8;
      }

      font-family: "Josefin Sans", sans-serif;
        ${media.phone`width: 95%;`}
    }

    .toggleLead{
      height: 70px;
      width: 20%;
      padding: 0px;

      border-radius: 0px;

      border: none;
      opacity:.8;
      
      &:hover{
        opacity: 1;
      }

      font-family: "Josefin Sans", sans-serif;
        ${media.phone`width: 95%;`}
    }

`;

export default StyledForm;
