import axios from 'axios';
// import {CLIENT_NAME} from '../config';
// import {CLIENT_SECRET} from '../config';



export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export const initiateLogin = creds => dispatch =>{
    
    dispatch({type:LOGIN_START});

    const body = `grant_type=password&username=${creds.username}&password=${
        creds.password}`;

    return axios
    // .post('http://localhost:5000/api/login',creds)
    .post('https://tieme-ndo-backend.herokuapp.com/oauth/token',body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": 'Basic ' + `${window.btoa(process.env.AUTH_CLIENT_ID + ':' + process.env.AUTH_CLIENT_SECRET)}`}
        })
    .then(
        resp => {
            
            localStorage.setItem('token',resp.data.access_token)
            dispatch({type:LOGIN_SUCCESS,payload:resp.data})
        }
        
    )
    .catch(
        err => {console.log(err)
            dispatch({type:LOGIN_FAILURE,payload:err})
        }
    )
    
}