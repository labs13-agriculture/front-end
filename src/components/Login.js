import styled, { css } from "styled-components";
import React, { Component } from "react";
import { connect } from "react-redux";
// import {Graphic} from './Graphic';
// import twit from '../svg/twitter-brands (1).svg'
import { initiateLogin } from "../actions";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

// ${media.desktop`background:green;`}

const StyledLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
`;
const StyledLogin = styled.div`
    border: 1px solid #d3d3d369;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    width:460px;
    min-height:500px;
    
    border-radius:10px;
    padding:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position:relative;
    overflow: hidden;

    ${media.desktop`border:none;`}
    ${media.desktop`padding:0px;`}
    ${media.desktop`box-shadow:none;`}

    .animation-div{
        height:7px;
        position:absolute;
        z-index:5;
        width:100%;
        top:0;
        border-radius:5px;
       
    }

    .decorative-div{
        height: 1px;
        margin-top: 14px;
        width: 400px;

        background-image: linear-gradient(120deg,#4f009d00 0%,#a7a7a7,#00ffb300);
    }
    .fab.fa-pagelines {
        font-size: 26px;

        margin-top: -34px;
        
        padding: 19px;
        
        background: white;
        
        color: #d3d3d35e;
        
        background: white;
    }
    .fas.fa-database{
        margin-right:4px;
    }

    .title-container{
        display:flex;
        margin:40px;
        align-items: center;
    }
    .welcome-title{
        
        margin: 30px auto;
        font-family: 'Josefin Sans', sans-serif;
        text-shadow: 0 1px 3px rgba(57, 55, 70, 0.4);
        font-size: 23px;
        color: #2800a9;
        letter-spacing: -2px;
        letter-spacing: -1px;
        font-weight: 400;
        margin-right: 2px;
        
        .fas.fa-seedling {
            margin-left: 4px;
            animation:plant-tilt  20s infinite;
            font-size: 22px;
            
        }
    }

    .decorative-container{
        height: 100px;

        width: 145px;

        padding: 0px 2px 0px 2px;

        background: white;

        display: flex;

        align-items: center;

        justify-content: center;

        margin-top: -45px;
    }

    .brandwrapper{
        
    }
    .welcome-brand{
        text-shadow: 0 1px 3px rgb(0, 53, 255);
    
       display:flex;
       align-items:center;
        
        
        padding: 20px;
        font-size: 12px;

       font-family:'Mandali', sans-serif;
       font-size:13px;

        

        color: #a93dff;

        font-weight: 800;

        padding: 4px 4px 4px opx;

        border: 1px solid #a93dff;

       

        background: #a93dff;

        color: white;

        border-top-right-radius: 15px;
        border-bottom-left-radius: 15px;
        
    

      

        margin-bottom: 10px;

        display: flex;

        align-content: center;
        

        width: 100px;

        justify-content: center;

        background-image: linear-gradient(134deg,#4f009d70 20%,#1300ff91,#00ffb387);
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    }

   
    .flock-output-ani{
        position:relative;
        display:flex;
        justify-content:center;
        height:100px;
        width:200px;
        

        h2{
            height: 60px;
            
            width: 60px;
            z-index:1;
        }

        .output-items{
            height:100px;
            width:200px;
            position:absolute;

            .output{
                height:20px;
                width:20px;
                animation:infinite-spinning 3s linear infinite,move-out 4s linear infinite;
                position:absolute;
                top:50%;
                left:50%;

                &.two{
                    animation:up-spinning 4s linear infinite,move-out 4s linear infinite;
                }

                &.three{
                    opacity:.5;
                    top:80%;
                    left:20%;
                    animation:forwardup-spinning 3.5s linear infinite,move-out 4s linear infinite;
                }

                &.four{
                    opacity:.5;
                    top:0%;
                    left:10%;
                    animation:forward-spinning 4s linear infinite,move-out 4s linear infinite;
                }

                &.five{
                    opacity:.5;
                    top:0%;
                    left:10%;
                    top:20%;
                    animation:forward-spinning 3s linear infinite,move-out 4s linear infinite;
                }
                
                @keyframes infinite-spinning {
                    from {
                      transform: rotate(0deg);
                      opacity:1;
                    }
                    to {
                      transform: translate(350%, 50%) rotate(300deg) ;
                      opacity:0;
                    }
                }

                @keyframes plant-tilt {
                    0% {
                      transform: rotate(0deg);
                      
                    }
                    10% {
                      transform:  rotate(10deg);
                     
                    }

                    /* 10%{

                        transform:  rotate(0deg);


                    } */

                    100%{
                       

                        transform:  rotate(0deg);

                    }

                    
                }

                @keyframes forward-spinning {
                    from {
                        transform: translate(0%, 0%) rotate(5deg) ;
                      
                    }
                    to {
                        opacity:1;
                        transform: translate(400%, 200%) rotate(180deg)
                        
                    }
                }

                @keyframes forwardup-spinning {
                    from {
                        transform: translate(0%, 0%) rotate(20deg) ;
                      
                    }
                    to {
                        opacity:1;
                        transform: translate(300%, -100%)
                        
                    }
                }

                @keyframes forwardhash-spinning {
                    from {
                        transform: translate(0%, 0%) rotate(20deg) ;
                      
                    }
                    to {
                        opacity:1;
                        transform: translate(300%, 100%)
                        
                    }
                }

                @keyframes up-spinning {
                    from {
                      transform: rotate(0deg);
                      opacity:1;
                    }
                    to {
                      transform: translate(350%, -100%) rotate(-300deg) ;
                      opacity:0;
                    }
                }

                @keyframes move-out {
                    from {
                      transform: rotate(0deg);
                      
                    }
                    to {
                      transform: translateX(100px) translateY(50px);
                      opacity:0;
                    }
                }
                
            }
        }

    }
    
    .slogan-container{
        display:flex;
        width:100%;
        height:55px;
        justify-content:space-evenly;
        border-bottom:1px solid lightgray;
        position:relative;
        
        .slogan{
            top: 18px;
            position:absolute;
            padding: 5px;
            color:gray;
            z-index: 1;

            background: white;
        }
        
    }
    h3{
        font-weight:250;
        
    }
    
    .inputdiv {

        margin: 20px auto 0px;
        font-family: 'Roboto', sans-serif;
        display:flex;
        justify-content:center;
        height: 58px;
        width: 400px;
        border-radius:5px;
        border:1px solid lightgray;
        padding:10px;
        position:relative;

       
        .credential-input{
           
            width:326px;
            border:none;
            font-size:15px;
            
        }

        .pw-form{
            display:flex;
        }
        .input-icon-cont{
            display: flex;
            justify-content: center;
            align-items: center;
            color:light-gray;

            .fas{
                padding: 5px;

                margin: auto;

                color: lightgray;

                font-size: 20px;
            }

            .fa-ellipsis-h{
                display:none 
            }
        }
        .fo-placeholder{
            font-family: 'Roboto', sans-serif;
            position:absolute;
            left: 0;
            top: 20px;
            padding-left: 27px;
            font-size:16px;
            font-weight:500;
            color:#00000040;
            z-index:1;
            transition: transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);
            background:white;
        }

        .transform-placeholder{
            padding:0px 10px;
            transform: scale(.75) translateY(-39px);
            color:#4f009d;
            
        }
       
    }
    .password{
        margin-bottom:0px;
    }

    .transform-inputdiv{
        border:2px solid #4f009d;
    }
    .login-next-steps-cont{
        width:100%;
        padding:10px;
        display:flex;
        justify-content:space-between;
        font-family: 'Roboto', sans-serif;
    }

    button{
        border:none;
        padding: 10px 30px;
        font-size:15px;
        border-radius:5px;
        font-weight:600;
        &:hover{
            cursor:pointer;
            opacity:.8;
        }
        
        
    }
    .next{
        color:white;
        background-image: linear-gradient(134deg,#4f009d 20%,#1300ff91);
        font-family: 'Roboto', sans-serif;
    }

    .forgot{
        background:none;
        color:#515151;

        padding:5px;
        &:hover{
            background:#7c7cad1f;
        }
        
    }

    .pulse {
        animation: pulse  3s  infinite;
        -webkit-animation:pulse ease 2s  infinite;
        -moz-animation: pulse ease 2s  infinite;
      }
      
      @keyframes pulse {
        0% {
          background-color: lightgray;
          margin-left:-300%;
          
          
        }

        20%{
            
            background-color: #00e4ff;
            
        }

        30%{
            background-color: #00e4ff;
            
        }

        80% {
            background-color: white;
            
        }
        100% {
          background-color: white;
          margin-right:-300%;
        }
    }

    #bad-credentials{
        border:2px solid #d02929;
    }

    #hidden{
        display:none;
    }

    #red-font{
        color:#d02929;
    }

    .error-handler-div {
        margin: 5px 5px;
        color:#d02929;
        display:flex;
        align-items:flex-start;
        font-size:12px;

        .fas.fa-exclamation-triangle {
            margin-right: 5px;
            font-size:12px;
        }
    
    }

    .local-container-div{
        height:100px;
    }

    
    
      
     
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "",
        password: ""
      },
      clicked: false,
      submitpw: false,
      enteredUsername: true,
      enteredPassword: true,
      passwordFailure: false
    };
  }

  componentDidUpdate() {}

  handleChanges = e =>
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });

  loginAnimate() {
    this.setState({ clicked: true });
  }

  focusCursor() {
    const field = document.querySelector(".credential-input");

    field.focus();
  }

  focusCursorPassword() {
    const field = document.querySelector("#password");

    field.focus();
  }
  escapeAnimate() {
    if (
      this.state.credentials.password.length > 0 ||
      this.state.credentials.username.length > 0
    ) {
    } else {
      this.setState({ clicked: false });
    }
  }

  submitPw() {
    this.setState({ submitpw: true });
  }

  login = e => {
    e.preventDefault();
    if (
      this.state.credentials.password.length > 0 &&
      this.state.credentials.username.length > 0
    ) {
      this.setState({ enteredPassword: true, enteredUsername: true });
      this.props
        .initiateLogin(this.state.credentials)

        .then(() => this.props.history.push("/dashboard"))
        .catch(err => {
          console.log(err);
        });
    } else if (
      this.state.credentials.password.length > 0 &&
      this.state.credentials.username.length < 1
    ) {
      this.setState({ enteredPassword: true, enteredUsername: false });
    } else if (
      this.state.credentials.password.length < 1 &&
      this.state.credentials.username.length > 0
    ) {
      this.setState({ enteredPassword: false, enteredUsername: true });
    } else if (
      this.state.credentials.password.length < 1 &&
      this.state.credentials.username.length < 1
    ) {
      this.setState({ enteredPassword: false, enteredUsername: false });
    }
  };

  testfunction() {
    this.props.history.push("/testdashboard");
  }

  render() {
    return (
      <div className="gen-login-container">
        <StyledLoginContainer>
          <StyledLogin
            onClick={e => {
              e.stopPropagation();
              this.escapeAnimate();
            }}
            >
            <div
              className={`animation-div${
                this.state.loginStart ? " pulse" : ""
              }`}
            />

            <div className="title-container">
              <h1 className="welcome-title">
                Tieme Ndo
                <i class="fas fa-seedling" />
              </h1>

              {/* <div className='welcome-brand'><i class="fas fa-database"></i>CRM</div> */}
            </div>

            <div className="decorative-div" />
            {/* <i class="fab fa-pagelines"></i> */}
            <div className="decorative-container">
              <div className="welcome-brand">
                <i className="fas fa-database" />
                CRM
              </div>
            </div>

            {/* <div className='flock-output-ani'>
                  <div className='output-items'>
                    
                    <div className='output one'><i className="fas fa-chart-line"></i></div>
                    <div className='output two'><i className="far fa-paper-plane"></i></div>
                    <div className='output three'><i className="far fa-grin"></i></div>
                    <div className='output four'><i className="fab fa-twitter"></i></div>
                    <div className='output five'><i className="fas fa-hashtag"></i></div>
                    </div> */}
            {/* <h2>
                
                  <svg className="login-icon">
                    <circle fill="#0f0f14" cx="33" cy="33" r="33"></circle>
                    <path d="M38.4 15l1-3h1l1.2 3c.2.2.5.2.7.3l2.2-2.5 1 .4-.2 3.3c.2 0 .3.2.5.4l3-1.5.7.7-1.4 3 .5.5h3.3l.4.8-2.5 2.2c0 .2 0 .5.2.7l3 1v1l-3 1.2-.3.8 2.5 2-.4 1-3.3-.2-.4.7 1.5 2.8-.7.7-3-1.4c0 .2-.4.4-.6.5l.2 3.3-1 .4-2-2.5c-.3 0-.6 0-1 .2l-1 3h-1l-1-3c-.2-.2-.5-.2-.8-.3l-2 2.5-1-.4.2-3.3-.7-.4-2.8 1.5-.7-.7 1.4-3c-.2 0-.4-.4-.5-.6l-3.3.2-.4-1 2.5-2c0-.3 0-.6-.2-1l-3-1v-1l3-1c.2-.2.2-.4.3-.7l-2.5-2.2.4-1 3.3.2c0-.2.2-.3.4-.5l-1.5-3 .7-.7 3 1.4.5-.5v-3.3l.8-.4 2.2 2.5s.5 0 .7-.2z" fill="#00b6cc" transform="rotate(143.20083851999883 40 25)">
                    <animateTransform attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="360 40 25"
                  to="0 40 25"
                  dur="10s"
                  repeatCount="indefinite"/></path>
                    <circle fill="#0f0f14" cx="40" cy="25" r="2"></circle>
                    <path d="M21.6 26.8L19 25l-1.3 1 1.4 3c0 .2-.3.4-.5.6l-3-.8-1 1.4 2.4 2.3-.4.8-3.2.3-.3 1.6 3 1.4v.8l-3 1.4.4 1.6 3.2.3c0 .3.2.5.3.8l-2.4 2.3.8 1.4 3-.8.7.6-1.3 3 1.3 1 2.6-1.8c.3 0 .5.3.8.4l-.3 3.2 1.6.6 2-2.7c.2 0 .5 0 .7.2l1 3h1.5l1-3c0-.2.4-.2.7-.3l2 2.7 1.4-.6-.4-3.2c.3 0 .5-.3.8-.4L37 49l1.3-1-1.4-3c0-.2.3-.4.5-.6l3 .8 1-1.4-2.4-2.3.4-.8 3.2-.3.3-1.6-3-1.4v-.8l3-1.4-.4-1.6-3.2-.3c0-.3-.2-.5-.3-.8l2.4-2.3-.8-1.4-3 .8-.7-.6 1.3-3-1.3-1-2.6 1.8c-.3 0-.5-.3-.8-.4l.3-3.2-1.6-.6-2 2.7c-.2 0-.5 0-.7-.2l-1-3h-1.5l-1 3c0 .2-.4.2-.7.3l-2-2.7-1.4.6.4 3.2c-.3 0-.5.3-.8.4z" fill="#00e4ff" > 
                    <animateTransform attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 28 37"
                  to="360 28 37"
                  dur="10s"
                  repeatCount="indefinite"/></path>
                    <circle fill="#0f0f14" cx="28" cy="37" r="3"></circle>
                </svg>
            </h2>  */}
            {/* </div> */}
            {/* <div className='slogan-container'>
                            <h3 className="slogan">social sentiment analysis</h3>
                            </div> */}
            <div className="local-container-div">
              <div
                onClick={e => {
                  e.stopPropagation();
                  this.loginAnimate();
                  this.focusCursor();
                }}
                className={`inputdiv password${
                  this.state.clicked ? " transform-inputdiv" : ""
                }`}
                id={this.state.enteredUsername ? "" : "bad-credentials"}
              >
                <form className="pw-form">
                  <input
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChanges}
                    className="credential-input"
                  />
                  <div
                    className={`fo-placeholder${
                      this.state.clicked ? " transform-placeholder" : ""
                    }`}
                    id={this.state.enteredUsername ? "" : "red-font"}
                  >
                    Enter Your Username
                  </div>
                  <div className="input-icon-cont">
                    <i className="fas fa-user-lock" />
                  </div>
                </form>
              </div>
              <div
                className="error-handler-div username"
                id={this.state.enteredUsername ? "hidden" : ""}
              >
                <i className="fas fa-exclamation-triangle" />
                Please enter username
              </div>
              <div
                className="error-handler-div badcredentials"
                id={this.props.loginFailure ? "" : "hidden"}
              >
                <i className="fas fa-exclamation-triangle" />
                Incorrect username or password. Please try agian.
              </div>
            </div>
            <div className="local-container-div">
              <div
                onClick={e => {
                  e.stopPropagation();
                  this.loginAnimate();
                  this.focusCursorPassword();
                }}
                className={`inputdiv${
                  this.state.clicked ? " transform-inputdiv" : ""
                }`}
                id={this.state.enteredPassword ? "" : "bad-credentials"}
              >
                <form
                  className="pw-form"
                  onSubmit={e => {
                    e.preventDefault();
                    this.submitPw();
                    setTimeout(() => this.login(e), 2000);
                  }}
                >
                  <input
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChanges}
                    className="credential-input"
                    id="password"
                  />
                  <div
                    className={`fo-placeholder${
                      this.state.clicked ? " transform-placeholder" : ""
                    }`}
                    id={this.state.enteredPassword ? "" : "red-font"}
                  >
                    Enter Your Password
                  </div>
                  <div className="input-icon-cont">
                    <i className="fas fa-key" />
                  </div>
                </form>
              </div>
              <div
                className="error-handler-div password"
                id={this.state.enteredPassword ? "hidden" : ""}
              >
                <i className="fas fa-exclamation-triangle" />
                Please enter password
              </div>
            </div>
            <div className="login-next-steps-cont">
              <Link to="/testdashboard">
                <button className="forgot">Click to test Back-end</button>
              </Link>
              <button
                className="next"
                onClick={e => {
                  e.stopPropagation();
                  this.submitPw();
                  this.login(e);
                }}
              >
                Next
              </button>
              {/* setTimeout((()=>this.login(e)),2000)} */}
            </div>
          </StyledLogin>
        </StyledLoginContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginStart: state.login.loginStart,
    error: state.login.error,
    loginFailure: state.login.loginFailure
  };
};

//Make sure you do not have two copies of react or react-dom between your friends folder directory and outside of your friends folder directory
//nmp ls react  or npm ls react-dom in each to identify
//removing duplicate copies from /friends did the tricks
export default connect(
  mapStateToProps,
  { initiateLogin }
)(Login);
