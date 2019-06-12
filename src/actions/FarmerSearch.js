import axios from 'axios';

export const FARMER_SEARCH_START = 'FARMER_SEARCH_START';
export const FARMER_SEARCH_SUCCESS = 'FARMER_SEARCH_SUCCESS';
export const FARMER_SEARCH_FAILURE = 'FARMER_SEARCH_FAILURE';

export const FarmerSearchResults = query => dispatch =>{
    dispatch({type: FARMER_SEARCH_START});

    const nameSearch = encodeURI(query.name);
    const locationSearch = encodeURI(query.location);
    //console.log(nameSearch + " " + locationSearch);

    const urlString = `https://tieme-ndo-backend.herokuapp.com/farmers/search?name=${nameSearch}&location=${locationSearch}&lead=${query.leads}`
    console.log(urlString);

    return axios
        .post(urlString, query,{
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
        .then(res =>{
            console.log(res);
            dispatch({type: FARMER_SEARCH_SUCCESS, payload: res.data})
        })
        .catch(err =>{
            console.log(err);
            dispatch({type: FARMER_SEARCH_FAILURE, payload: err})
        })
}