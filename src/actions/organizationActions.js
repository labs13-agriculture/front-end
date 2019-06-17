import axios from 'axios';

export const ADD_ORGANIZATION_START = 'ADD_ORGANIZATION_START';
export const ADD_ORGANIZATION_SUCCESS = 'ADD_ORGANIZATION_SUCCESS';
export const ADD_ORGANIZATION_FAILURE = 'ADD_ORGANIZATION_FAILURE';

export const addOrganization = newOrganization => dispatch =>{
    dispatch({ type: ADD_ORGANIZATION_START })
    console.log("attempting to add", newOrganization);

    return axios
        .post('https://tieme-ndo-backend.herokuapp.com/organizations/new-organization', newOrganization, {
            headers: {
                'Content-Type' : 'application/json',
                
                
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
              }
            })
            .then(res => {
              console.log("added new Organization", res.data);
              
              dispatch({ type: ADD_ORGANIZATION_SUCCESS, payload: res.data });
              
           
            }).catch(
              err => {console.log(err)
                  dispatch({type:ADD_ORGANIZATION_FAILURE,payload:err})
              }
          );}

export const ORGANIZATION_SEARCH_START = 'ORGANIZATION_SEARCH_START';
export const ORGANIZATION_SEARCH_SUCCESS = 'ORGANIZATION_SEARCH_SUCCESS';
export const ORGANIZATION_SEARCH_FAILURE = 'ORGANIZATION_SEARCH_FAILURE';

export const searchOrganizations = query => dispatch => {
    dispatch({type: ORGANIZATION_SEARCH_START});

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
        });}
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