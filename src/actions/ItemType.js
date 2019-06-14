import axios from 'axios';
import {BASE_URL} from '../config'
// action functions
// getItemTypes


// GETTING_ITEMTYPES, GETTING_ITEMTYPES_SUCCESS, GETTING_ITEMTYPES_FAILURE
export const GETTING_ITEMTYPES = "GETTING_ITEMTYPES";
export const GETTING_ITEMTYPES_SUCCESS = "GETTING_ITEMTYPES_SUCCESS";
export const GETTING_ITEMTYPES_FAILURE = "GETTING_ITEMTYPES_FAILURE";

export const getItemTypes = () => dispatch => {
    dispatch({type: GETTING_ITEMTYPES});

    const urlString = `${BASE_URL}/itemtype/all`

    return axios
        .get(urlString,{
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
        .then(res =>{
            dispatch({type: GETTING_ITEMTYPES_SUCCESS, payload: res.data})
        })
        .catch(err =>{
            console.log(err);
            dispatch({type: GETTING_ITEMTYPES_FAILURE, payload: err})
        })
}