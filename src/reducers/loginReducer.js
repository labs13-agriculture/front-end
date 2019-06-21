import { AUTH_TOKEN } from "../config";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialState = {
  loginStart: false,
  loginSuccess: false,
  loginFailure: false,
  // double bang to coerce it to a boolean value
  loggedIn: !!localStorage.getItem(AUTH_TOKEN),
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loginStart: true,
        loggedIn: false
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
        loginFailure: false,
        loginStart: false,
        loggedIn: true
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loginSuccess: false,
        loginFailure: true,
        loginStart: false,

        error: action.payload
      };
    case "LOGGED_OUT":
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
};
