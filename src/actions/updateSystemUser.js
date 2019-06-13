import axios from 'axios';

export const UPDATE_SYSTEM_USER_START = 'UPDATE_SYSTEM_USER_START';
export const UPDATE_SYSTEM_USER_SUCCESS = 'UPDATE_SYSTEM_USER_SUCCESS';
export const UPDATE_SYSTEM_USER_FAILURE = 'UPDATE_SYSTEM_USER_FAILURE';

export const updateSystemUser = (userDetails,id) => dispatch => {
    dispatch({ type: UPDATE_SYSTEM_USER_START });
   
    const body = JSON.stringify(userDetails);
    console.log("userDetails JSON "+body)
    return axios
      .put(`http://localhost:4040/users/update-user/${id}`, body,{
        headers: {
          'Content-Type' : 'application/json',
          
          
          Authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
      })
      .then(res => {
        console.log("UPDATE_new_sys_user_data", res.data);
        
        dispatch({ type: UPDATE_SYSTEM_USER_SUCCESS, payload: res.data });
        
     
      }).catch(
        err => {console.log(err)
            dispatch({type:UPDATE_SYSTEM_USER_FAILURE,payload:err})
        }

    
        
    );}
  