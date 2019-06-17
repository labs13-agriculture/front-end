import axios from 'axios';

export const ADD_SYSTEM_USER_START = 'ADD_SYSTEM_USER_START';
export const ADD_SYSTEM_USER_SUCCESS = 'ADD_SYSTEM_USER_SUCCESS';
export const ADD_SYSTEM_USER_FAILURE = 'ADD_SYSTEM_USER_FAILURE';

export const addNewSystemUser = (userDetails) => dispatch => {
    dispatch({ type: ADD_SYSTEM_USER_START });
   
    const body = JSON.stringify(userDetails);
    console.log("userDetails JSON "+body)
    return axios
      .post("https://tieme-ndo-backend.herokuapp.com/users/newuser", body,{
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

export const UPDATE_SYSTEM_USER_START = 'UPDATE_SYSTEM_USER_START';
export const UPDATE_SYSTEM_USER_SUCCESS = 'UPDATE_SYSTEM_USER_SUCCESS';
export const UPDATE_SYSTEM_USER_FAILURE = 'UPDATE_SYSTEM_USER_FAILURE';

export const updateSystemUser = (userDetails,id) => dispatch => {
    dispatch({ type: UPDATE_SYSTEM_USER_START });
   
    const body = JSON.stringify(userDetails);
    console.log("userDetails JSON "+body)
    return axios
      .put(`https://tieme-ndo-backend.herokuapp.com/users/update-user/${id}`, body,{
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

export const USER_SEARCH_START = 'USER_SEARCH_START';
export const USER_SEARCH_SUCCESS = 'USER_SEARCH_SUCCESS';
export const USER_SEARCH_FAILURE = 'USER_SEARCH_FAILURE';

export const userSearchResults = (searchQuery) => dispatch => {
    dispatch({type: USER_SEARCH_START});

    const nameSearch = encodeURI(searchQuery);
    console.log('name searched '+nameSearch)
    
    return axios
        .get(`https://tieme-ndo-backend.herokuapp.com/users/username/${nameSearch}`,{
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
        .then(res => {
            console.log(res);
            dispatch({type: USER_SEARCH_SUCCESS, payload: res.data});
        })
        .catch(err =>{
            console.log(err);
            dispatch({type: USER_SEARCH_FAILURE, payload: err})
        })
}
  
  