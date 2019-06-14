import axios from 'axios';

export const DELETE_FARMER_START = 'DELETE_FARMER_START';
export const DELETE_FARMER_SUCCESS = 'DELETE_FARMER_SUCCESS';
export const DELETE_FARMER_FAILURE = 'DELETE_FARMER_FAILURE';

export const deleteFarmer = (id) => dispatch => {
    dispatch({ type: DELETE_FARMER_START });
   
    
    return axios
      .delete(`https://tieme-ndo-backend.herokuapp.com/farmers/farmer/${id}`,{
        headers: {
          'Content-Type' : 'application/json',
          
          
          Authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
      })
      .then(res => {
        console.log("DELETE_FARMER_data", res.data);
        
        dispatch({ type: DELETE_FARMER_SUCCESS, payload: res.data });
        
     
      }).catch(
        err => {console.log(err)
            dispatch({type:DELETE_FARMER_FAILURE,payload:err})
        }

    
        
    );}
  