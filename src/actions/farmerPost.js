import axios from 'axios';

export const ADD_FARMER_START = 'ADD_FARMER_START';
export const ADD_FARMER_SUCCESS = 'ADD_FARMER_SUCCESS';
export const ADD_FARMER_FAILURE = 'ADD_FARMER_FAILURE';

export const addFarmer = newFarmer => dispatch =>{
    dispatch({ type: ADD_FARMER_START })
    console.log("attempting to add", newFarmer);

    return axios
        .post('https://tieme-ndo-backend.herokuapp.com/farmers/add', newFarmer, {
            headers: {
                'Content-Type' : 'application/json',
                
                
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
              }
            })
            .then(res => {
              console.log("added new farmer", res.data);
              
              dispatch({ type: ADD_FARMER_SUCCESS, payload: res.data });
              
           
            }).catch(
              err => {console.log(err)
                  dispatch({type:ADD_FARMER_FAILURE,payload:err})
              }
      
          
              
          );}