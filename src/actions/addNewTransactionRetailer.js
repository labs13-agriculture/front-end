import axios from 'axios';

export const ADD_TRANSACTION_START = 'ADD_TRANSACTION_START';
export const ADD_TRANSACTION_SUCCESS = 'ADD_TRANSACTION_SUCCESS';
export const ADD_TRANSACTION_FAILURE = 'ADD_TRANSACTION_FAILURE';

export const addNewTransaction = (transactionDetails,id) => dispatch => {
    dispatch({ type: ADD_TRANSACTION_START });
   
    const body = JSON.stringify(transactionDetails);
    console.log("userDetails JSON "+body)
    return axios
      .post(`http://localhost:4040/transaction/add/${id}`, body,{
        headers: {
          'Content-Type' : 'application/json',
          
          
          Authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
      })
      .then(res => {
        console.log("add_new_sys_user_data", res.data);
        
        dispatch({ type: ADD_TRANSACTION_SUCCESS, payload: res.data });
        
     
      }).catch(
        err => {console.log(err)
            dispatch({type:ADD_TRANSACTION_FAILURE,payload:err})
        }

    
        
    );}
  