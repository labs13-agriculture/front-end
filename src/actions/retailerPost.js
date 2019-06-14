import axios from 'axios';

export const ADD_RETAILER_START = 'ADD_RETAILER_START';
export const ADD_RETAILER_SUCCESS = 'ADD_RETAILER_SUCCESS';
export const ADD_RETAILER_FAILURE = 'ADD_RETAILER_FAILURE';

export const addRetailer = newRetailer => dispatch =>{
    dispatch({ type: ADD_RETAILER_START })
    console.log("attempting to add", newRetailer);

    return axios
        .post('https://tieme-ndo-backend.herokuapp.com/retailer/new', newRetailer, {
            headers: {
                'Content-Type' : 'application/json',
                
                
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
              }
            })
            .then(res => {
              console.log("added new Retailer", res.data);
              
              dispatch({ type: ADD_RETAILER_SUCCESS, payload: res.data });
              
           
            }).catch(
              err => {console.log(err)
                  dispatch({type:ADD_RETAILER_FAILURE,payload:err})
              }
      
          
              
          );}