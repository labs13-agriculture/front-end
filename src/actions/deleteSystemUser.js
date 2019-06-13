import axios from 'axios';

export const DELETE_SYSTEM_USER_START = 'DELETE_SYSTEM_USER_START';
export const DELETE_SYSTEM_USER_SUCCESS = 'DELETE_SYSTEM_USER_SUCCESS';
export const DELETE_SYSTEM_USER_FAILURE = 'DELETE_SYSTEM_USER_FAILURE';

export const deleteSystemUser = (id) => dispatch => {
    dispatch({ type: DELETE_SYSTEM_USER_START });
   
    
    return axios
      .delete(`http://localhost:4040/users/user/${id}`,{
        headers: {
          'Content-Type' : 'application/json',
          
          
          Authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
      })
      .then(res => {
        console.log("DELETE_new_sys_user_data", res.data);
        
        dispatch({ type: DELETE_SYSTEM_USER_SUCCESS, payload: res.data });
        
     
      }).catch(
        err => {console.log(err)
            dispatch({type:DELETE_SYSTEM_USER_FAILURE,payload:err})
        }

    
        
    );}
  