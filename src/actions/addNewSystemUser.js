import axios from 'axios';

export const ADD_SYSTEM_USER_START = 'ADD_SYSTEM_USER_START';
export const ADD_SYSTEM_USER_SUCCESS = 'ADD_SYSTEM_USER_SUCCESS';
export const ADD_SYSTEM_USER_FAILURE = 'ADD_SYSTEM_USER_FAILURE';

export const addNewSystemUser = (userDetails) => dispatch => {
    dispatch({ type: ADD_SYSTEM_USER_START });
   
    const body = JSON.stringify(userDetails);
    console.log("userDetails JSON "+body)
    return axios
      .post("http://localhost:4040/users/newuser", body,{
        headers: {
          'Content-Type' : 'application/json',
          
          
          Authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
      })
      .then(res => {
        console.log("add_new_sys_user_data", res.data);
        
        dispatch({ type: ADD_SYSTEM_USER_SUCCESS, payload: res.data });
        
     
      }).catch(
        err => {console.log(err)
            dispatch({type:ADD_SYSTEM_USER_FAILURE,payload:err})
        }

    
        
    );}
  