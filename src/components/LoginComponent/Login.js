import styled, { css } from "styled-components";
import React, { Component } from "react";
import { connect } from "react-redux";
import { initiateLogin } from "../../actions";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Spinner } from "reactstrap";

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
      passwordFailure: false,
      passwordVis: true
    };
  }
  componentDidMount() {
    this.setEnterKeyListener();
  }

  componentDidUnmount() {
    this.setEnterKeyListener();
  }

  setEnterKeyListener() {
    var input = document.querySelector(".styled-login");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(".next").click();
      }
    });
  }

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

  togglePwVis = () => {
    this.setState({ passwordVis: !this.state.passwordVis });
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  login = e => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    if (
      this.state.credentials.password.length > 0 &&
      this.state.credentials.username.length > 0
    ) {
      this.setState({
        enteredPassword: true,
        enteredUsername: true,
        submitpw: true
      });
      this.props
        .initiateLogin(this.state.credentials)

        .then(() => this.props.history.push("/dashboard/statistics"))
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

  render() {
    return (
      <div className="gen-login-container">
        <StyledLoginContainer
          className="styled-login"
          id={this.props.loginStart ? "login-opacity" : ""}
        >
          <StyledLogin
            onClick={e => {
              e.stopPropagation();
              this.escapeAnimate();
            }}
          >
            <div className="title-container">
              <h1 className="welcome-title">
                Tieme Ndo
                <i className="fas fa-seedling" />
              </h1>
            </div>

            <div className="decorative-div" />

            <div className="decorative-container">
              <div className="welcome-brand">
                <i className="fas fa-database" />
                CRM
              </div>
            </div>

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
                <div
                  className="pw-form"
                  //if this was a form the username wouldn't save in browsers
                  onSubmit={e => {
                    e.preventDefault();
                    this.submitPw();
                    this.login(e);
                  }}
                >
                  <input
                    name="username"
                    type="text"
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
                </div>
              </div>
              <div
                className="error-handler-div username"
                id={this.state.enteredUsername ? "hidden" : ""}
              >
                <i className="fas fa-exclamation-triangle" />
                <p>Please enter username</p>
              </div>
              <div
                className="error-handler-div badcredentials"
                id={this.props.loginFailure ? "" : "hidden"}
              >
                <i className="fas fa-exclamation-triangle" />
                <p>Incorrect username or password. Please try again.</p>
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
                <div
                  className="pw-form"
                  onSubmit={e => {
                    e.preventDefault();
                    this.submitPw();
                    this.login(e);
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
                    {this.state.passwordVis ? (
                      <i
                        onClick={() => this.togglePwVis()}
                        className="far fa-eye-slash"
                      />
                    ) : (
                      <i className="fas fa-eye" onClick={this.togglePwVis} />
                    )}
                  </div>
                </div>
              </div>
              <div
                className="error-handler-div password"
                id={this.state.enteredPassword ? "hidden" : ""}
              >
                <i className="fas fa-exclamation-triangle" />
                <p>Please enter password</p>
              </div>
            </div>
            <div className="login-next-steps-cont">
              <Link to="/testdashboard">
                <button className="forgot">Click to test Back-end</button>
              </Link>
              <button
                type="submit"
                className="next"
                id={this.props.loginStart && "processing"}
                onClick={e => {
                  e.stopPropagation();
                  this.submitPw();
                  this.login(e);
                }}
              >
                <p id={this.props.loginStart ? "hidden" : ""}>Next</p>
                <Spinner
                  className={"loadingSpinner"}
                  id={this.props.loginStart ? "" : "hidden"}
                  style={{ width: "2.5rem", height: "2.5rem" }}
                />
              </button>
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

export default connect(
  mapStateToProps,
  { initiateLogin }
)(Login);

//begin styling

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
    ${media.desktop`width:100%;`}


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
        margin:20px;
        align-items: center;
        

        flex-direction: column;
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
        height:40px;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
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

                font-size: 18px;
            }

            .fa-ellipsis-h{
                display:none 
            }
        }
        .fo-placeholder{
            font-family: 'Roboto', sans-serif;
            position:absolute;
            left: 0;
            top: 17px;
            margin-left: 27px;
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
            margin:0px;
            
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
        ${media.desktop`flex-direction:column-reverse;`}
        ${media.desktop`padding:0px;`}
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
        display:flex;
        display: flex;
        justify-content: center;
        width: 100px;
        height: 45px;
        padding: 0px;
        align-items: center;
        position:relative;
        ${media.desktop`width:100%;`}

        p{
          margin:0px;
        }

    

        .loadingSpinner{
          position: absolute;
          color:#6c757d5e;
          
        }
    

        #processing{
          pointer-events: none;
          background:lightgray;
          opacity:.5;
          border:1px solid gray;
        }

        .forgot{
            background:none;
            color:#515151;

            padding:5px;
            &:hover{
                background:#7c7cad1f;
            }
            
        }
    }

    
      

    #bad-credentials{
        border:2px solid #ff4868;
    }

    #hidden{
        display:none;
    }

    #invisible{
      visibility:hidden;
    }

    
    #red-font{
        color:#ff4868;
    }

    .error-handler-div {
        margin: 5px 5px;
        color:#c8591f;
        display:flex;
        align-items: flex-start;
        color:#ff4868;
        /* font-family: 'Poppins', sans-serif; */

        p{
          font-size: 11px;
          letter-spacing: .5px;
          font-weight: 550;
          /* padding:1px; */
        }

        .fas.fa-exclamation-triangle {
            margin-right: 5px;
            font-size:11px;
            
        }
    
    }

    .local-container-div{
        height:100px;
    }
    
      .far.fa-eye-slash{
        color:lightgray;
        &:hover{
          cursor:pointer;
          color:gray;
          z-index:3;
        }
      }

      .fas.fa-eye{
        color:lightgray;
        &:hover{
          cursor:pointer;
          color:gray;
          z-index:3;
        }
      }
`;
