import axios from 'axios';
import { FARMER_SEARCH_START } from './FarmerSearch';

export const ORGANIZATION_SEARCH_START = 'ORGANIZATION_SEARCH_START';
export const ORGANIZATION_SEARCH_SUCCESS = 'ORGANIZATION_SEARCH_SUCCESS';
export const ORGANIZATION_SEARCH_FAILURE = 'ORGANIZATION_SEARCH_FAILURE';

export const OrganizationSearchResults = query => dispatch => {
    dispatch({type: FARMER_SEARCH_START});

    const nameSearch = encodeURI(query.name);
    const locationSearch = encodeURI(query.location);
    const urlString = `https://tieme-ndo-backend.herokuapp.com/organizations/search?name=${nameSearch}&location=${locationSearch}&lead=${query.leads}`
    console.log(urlString);

    return axios
        .get(urlString, {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
        .then(res =>{
            console.log(res);
            dispatch({type: ORGANIZATION_SEARCH_SUCCESS, payload: res.data})
        })
        .catch(err =>{
            console.log(err);
            dispatch({type: ORGANIZATION_SEARCH_FAILURE, payload: err})
        })
}