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