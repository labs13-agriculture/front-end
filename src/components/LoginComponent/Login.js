import styled from "styled-components";
import React, { Component } from "react";
import { connect } from "react-redux";
import { initiateLogin } from "../../actions";
import { Spinner } from "reactstrap";
import { media } from "../../styles/searchStyles";
import { theme } from "../../config";
import logo from "../../tiemeNdo.svg";

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

  componentWillUnmount() {
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

        .then(() => this.props.history.push("/search"))
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
      <Container className="gen-login-container">
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
                <img alt="logo" src={logo} />
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
              {/* <Link to="/testdashboard">
                <button className="forgot">Click to test Back-end</button>
              </Link> */}
              <button
                type="submit"
                className="next"
                id={this.props.loginStart ? "processing" : null}
                onClick={e => {
                  e.stopPropagation();
                  this.submitPw();
                  this.login(e);
                }}
              >
                <p id={this.props.loginStart ? "hidden" : ""}>Login</p>
                <Spinner
                  className={"loadingSpinner"}
                  id={this.props.loginStart ? "" : "hidden"}
                  style={{ width: "2.5rem", height: "2.5rem" }}
                />
              </button>
            </div>
          </StyledLogin>
        </StyledLoginContainer>
      </Container>
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.background_dark};

  @media (max-width: 500px) {
    background: ${theme.navgrey};
  }

  width: 100%;
  height: 100vh;
`;

const StyledLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  width: 100%;
`;

const StyledLogin = styled.div`
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  max-width: 460px;
  width: 100%;
  min-height: 500px;

  background: ${theme.navgrey};

  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;

  ${media.desktop`box-shadow:none;`}
  ${media.desktop`width:100%;`}


  .decorative-div {
    height: 1px;
    margin-top: 14px;
    max-width: 400px;
    width: 100%;
    background-image: ${`linear-gradient(90deg, ${theme.navgrey}, ${
      theme.background_light
    }, ${theme.navgrey})`};
    position: relative;
    top: 22px;
  }

  .fab.fa-pagelines {
    font-size: 26px;

    margin-top: -34px;

    padding: 19px;

    background: white;

    color: #d3d3d35e;
  }

  .fas.fa-database {
    margin-right: 4px;
  }

  .title-container {
    margin: 20px 20px 0;
  }

  .welcome-title {
    margin: 30px auto 0px;
    font-family: "Josefin Sans", sans-serif;
    text-shadow: 0 1px 3px rgba(57, 55, 70, 0.4);
    font-size: 23px;
    color: ${theme.background_light};
    letter-spacing: -1px;
    font-weight: 400;
    position: relative;
    left: 10px;

    img {
      width: 30px;
      height: 30px;
      margin: 4px;
      position: relative;
      top: -10px;
      left: -15px;
    }
  }

  .decorative-container {
    padding: 0px 2px 0px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .welcome-brand {
    /* text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); */

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    margin-bottom: 10px;
    padding: 4px 4px 4px opx;
    border: 1px solid ${theme.navgrey};

    font-size: 12px;
    font-family: "Mandali", sans-serif;
    font-size: 13px;
    color: ${theme.background_dark};
    font-weight: 800;

    background: ${theme.accent};
    width: 100px;
    background-image: ${`linear-gradient(134deg, white, ${
      theme.background_light
    }, white)`};
    height: 40px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }

  .slogan-container {
    display: flex;
    width: 100%;
    height: 55px;
    justify-content: space-evenly;
    border-bottom: 1px solid lightgray;
    position: relative;

    .slogan {
      top: 18px;
      position: absolute;
      padding: 5px;
      color: gray;
      z-index: 1;

      background: white;
    }
  }
  h3 {
    font-weight: 250;
  }

  .inputdiv {
    margin: 20px auto 0px;
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    height: 58px;
    max-width: 400px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 10px;
    position: relative;

    .credential-input {
      width: 100%;
      border: none;
      font-size: 15px;
      background: ${theme.navgrey};
      color: ${theme.background_light};
    }

    .pw-form {
      display: flex;
      width: 100%;
    }

    .input-icon-cont {
      display: flex;
      justify-content: center;
      align-items: center;
      color: light-gray;

      .fas {
        padding: 5px;

        margin: auto;

        color: lightgray;

        font-size: 18px;
      }

      .fa-ellipsis-h {
        display: none;
      }
    }
    .fo-placeholder {
      font-family: "Roboto", sans-serif;
      position: absolute;
      left: 0;
      top: 17px;
      margin-left: 27px;
      font-size: 16px;
      font-weight: 500;
      color: ${theme.background_light};
      z-index: 1;
      transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
      background: ${theme.navgrey};
    }

    .transform-placeholder {
      padding: 0px 10px;
      transform: scale(0.75) translateY(-39px);
      color: ${theme.activeblue};
      margin: 0px;
    }
  }

  .transform-inputdiv {
    border: 2px solid ${theme.activeblue};
  }
  .login-next-steps-cont {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    font-family: "Roboto", sans-serif;
    ${media.desktop`flex-direction:column-reverse;`}
    ${media.desktop`padding:0px;`}
  }

  button {
    border: none;
    padding: 10px 30px;
    font-size: 15px;
    border-radius: 5px;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
  .next {
    color: ${theme.background_light};
    text-shadow: 0px 0px 2px rgba(0, 144, 107);
    background-image: ${`linear-gradient(134deg, ${theme.accent} 20%, ${
      theme.activeblue
    })`};
    font-family: "Roboto", sans-serif;
    display: flex;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 45px;
    padding: 0px;
    align-items: center;
    position: relative;

    p {
      margin: 0px;
    }

    .loadingSpinner {
      position: absolute;
      color: #6c757d5e;
    }

    #processing {
      pointer-events: none;
      background: lightgray;
      opacity: 0.5;
      border: 1px solid gray;
    }

    .forgot {
      background: none;
      color: #515151;

      padding: 5px;
      &:hover {
        background: #7c7cad1f;
      }
    }
  }

  #bad-credentials {
    border: 2px solid #ff4868;
  }

  #hidden {
    display: none;
  }

  #invisible {
    visibility: hidden;
  }

  #red-font {
    color: #ff4868;
  }

  .error-handler-div {
    margin: 5px 5px;
    color: #c8591f;
    display: flex;
    align-items: flex-start;
    color: #ff4868;
    /* font-family: 'Poppins', sans-serif; */

    p {
      font-size: 11px;
      letter-spacing: 0.5px;
      font-weight: 550;
      /* padding:1px; */
    }

    .fas.fa-exclamation-triangle {
      margin-right: 5px;
      font-size: 11px;
    }
  }

  .local-container-div {
    height: 100px;
    width: 100%;
  }

  .far.fa-eye-slash {
    color: lightgray;
    &:hover {
      cursor: pointer;
      color: gray;
      z-index: 3;
    }
  }

  .fas.fa-eye {
    color: lightgray;
    &:hover {
      cursor: pointer;
      color: gray;
      z-index: 3;
    }
  }
`;
