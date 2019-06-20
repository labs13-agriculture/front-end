import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialState = {
  loginStart: false,
  loginSuccess: false,
  loginFailure: false,
  loggedIn: false,
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
    default:
      return state;
  }
};
