import axios from 'axios';

export const RETAILER_SEARCH_START = 'RETAILER_SEARCH_START';
export const RETAILER_SEARCH_SUCCESS = 'RETAILER_SEARCH_SUCCESS';
export const RETAILER_SEARCH_FAILURE = 'RETAILER_SEARCH_FAILURE';

export const RetailerSearchResults = (query) => dispatch => {
    dispatch({type: RETAILER_SEARCH_START});

    const nameSearch = encodeURI(query.name);
    const locationSearch = encodeURI(query.location);
    console.log(nameSearch + " " + locationSearch)
    return axios
        .get(`http://localhost:4040/retailer/search?lead=${query.leads}&location=${locationSearch}&name=${nameSearch}&page=2`,{
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