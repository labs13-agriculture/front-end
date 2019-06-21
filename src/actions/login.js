import axios from "axios";
import { BASE_URL, AUTH_TOKEN } from "../config.js";
// import {CLIENT_NAME} from '../config';
// import {CLIENT_SECRET} from '../config';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const initiateLogin = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  const body = `grant_type=password&username=${creds.username}&password=${
    creds.password
  }`;

  return (
    axios
      //https://tieme-ndo-backend.herokuapp.com/oauth/token
      // .post('http://localhost:5000/api/login',creds)
      .post(`${BASE_URL}/oauth/token`, body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          //   "Authorization": 'Basic ' + `${window.btoa(process.env.REACT_APP_AUTH_CLIENT_ID + ':' + process.env.REACT_APP_AUTH_CLIENT_SECRET)}`}
          Authorization: `Basic ${window.btoa("lambda-client:lambda-secret")}`
        }
        //   process.env.REACT_APP_AUTH_CLIENT_ID + ':' + process.env.REACT_APP_AUTH_CLIENT_SECRET

        //
      })
      .then(resp => {
        localStorage.setItem(AUTH_TOKEN, resp.data.access_token);
        dispatch({ type: LOGIN_SUCCESS, payload: resp.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: LOGIN_FAILURE, payload: err });
      })
  );
};
