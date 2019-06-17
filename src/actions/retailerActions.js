import axios from 'axios';

export const RETAILER_SEARCH_START = 'RETAILER_SEARCH_START';
export const RETAILER_SEARCH_SUCCESS = 'RETAILER_SEARCH_SUCCESS';
export const RETAILER_SEARCH_FAILURE = 'RETAILER_SEARCH_FAILURE';

export const searchRetailers = (query) => dispatch => {
    dispatch({type: RETAILER_SEARCH_START});

    const nameSearch = encodeURI(query.name);
    const locationSearch = encodeURI(query.location);
    console.log(nameSearch + " " + locationSearch)
    return axios
        .get(`https://tieme-ndo-backend.herokuapp.com/retailer/search?lead=${query.leads}&location=${locationSearch}&name=${nameSearch}&page=2`,{
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
        .then(res => {
            console.log(res);
            dispatch({type: RETAILER_SEARCH_SUCCESS, payload: res.data});
        })
        .catch(err =>{
            console.log(err);
            dispatch({type: RETAILER_SEARCH_FAILURE, payload: err})
        })
}

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