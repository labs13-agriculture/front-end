import axios from 'axios';




export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export const initiateLogin = creds => dispatch =>{

    dispatch({type:LOGIN_START});

    const body = `grant_type=password&username=${creds.username}&password=${
        creds.password}`;

    return axios
    // .post('http://localhost:5000/api/login',creds)
    .post('https://build-week.herokuapp.com/login',body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic + token"}})
    .then(
        resp => {
            console.log(resp.data);
            localStorage.setItem('token',resp.data.payload)
            dispatch({type:LOGIN_SUCCESS,payload:resp.data.payload})}
        
    )
    .catch(
        err => {console.log('failuer',err)
        dispatch({type:LOGIN_FAILURE,payload:err.data.payload})}
    )
}
