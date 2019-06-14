import axios from 'axios';

// GET_ORGANIZATION, GET_ORGANIZATION_SUCCESS, GET_ORGANIZATION_FAILURE, getOrganizationById

export const GET_ORGANIZATION = 'GET_ORGANIZATION';
export const GET_ORGANIZATION_SUCCESS = 'GET_ORGANIZATION_SUCCESS';
export const GET_ORGANIZATION_FAILURE = 'GET_ORGANIZATION_FAILURE';

export const getOrganizationById = orgId => dispatch =>{
    dispatch({ type: GET_ORGANIZATION })

    return axios
        .get(`https://tieme-ndo-backend.herokuapp.com/organizations/${orgId}`, {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
              }
            })
        .then(res => {
            dispatch({ type: GET_ORGANIZATION_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err)
            dispatch({type:GET_ORGANIZATION_FAILURE, payload:err})
        });
}