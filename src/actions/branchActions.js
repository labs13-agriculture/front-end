import axios from 'axios';
import {BASE_URL} from "../config"
export const GET_BRANCHES_START = "GET_BRANCHES_START";
export const GET_BRANCHES_SUCCESS = "GET_BRANCHES_SUCCESS";
export const GET_BRANCHES_FAILURE = "GET_BRANCHES_FAILURE";

export const getBranches = (clientId) => dispatch =>{
    dispatch({type: GET_BRANCHES_START})

    axios
        .get(`${BASE_URL}/organizations/contacts/${clientId}`, {
            headers: {
              'Content-Type' : 'application/json',
              
              
              Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
          }).then(res => {
              console.log(res);
              dispatch({type: GET_BRANCHES_SUCCESS, payload: res.data})
          }).catch(err =>{
              console.log(err);
              dispatch({type: GET_BRANCHES_FAILURE, payload: err})
          });
}

export const ADD_BRANCH_START = "ADD_BRANCH_START";
export const ADD_BRANCH_SUCCESS = "ADD_BRANCH_SUCCESS";
export const ADD_BRANCH_FAILURE = "ADD_BRANCH_FAILURE";

export const addBranch = (clientId, newBranch) => dispatch =>{
    dispatch({type: ADD_BRANCH_START})

    axios
        .post(`${BASE_URL}/organizations/branch/${clientId}`, newBranch, {
            headers: {
              'Content-Type' : 'application/json',
              
              
              Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
          }).then(res =>{
              console.log(res.data);
              dispatch({type: ADD_BRANCH_SUCCESS, payload: res.data});
          }).catch(err =>{
              console.log(err);
              dispatch({type: ADD_BRANCH_FAILURE, payload: err});
          })
}

export const UPDATE_BRANCH_START = "UPDATE_BRANCH_START";
export const UPDATE_BRANCH_SUCCESS = "UPDATE_BRANCH_SUCCESS";
export const UPDATE_BRANCH_FAILURE = "UPDATE_BRANCH_FAILURE";

export const updateBranch = (branchId, newBranch) => dispatch =>{
    dispatch({type: UPDATE_BRANCH_START});

    axios
        .put(`${BASE_URL}/organizations/branch/update/${branchId}`, newBranch,{
            headers: {
              'Content-Type' : 'application/json',
              
              
              Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
          }).then(res =>{
              console.log(res.data);
              dispatch({type: UPDATE_BRANCH_SUCCESS, payload: res.data})
          }).catch(err =>{
              console.log(err);
              dispatch({type: UPDATE_BRANCH_FAILURE, payload: err})
          })
}

export const DELETE_BRANCH_START = "DELETE_BRANCH_START";
export const DELETE_BRANCH_SUCCESS = "DELETE_BRANCH_SUCCESS";
export const DELETE_BRANCH_FAILURE = "DELETE_BRANCH_FAILURE";

export const deleteBranch = (branchId) => dispatch =>{
    dispatch({type: DELETE_BRANCH_START});

    axios
        .delete(`${BASE_URL}/organizations/contact/${branchId}`, {
            headers: {
              'Content-Type' : 'application/json',
              
              
              Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
          }).then(res =>{
              console.log(res);
              dispatch({type: DELETE_BRANCH_SUCCESS, payload: res.data})
          }).catch(err =>{
              console.log(err);
              dispatch({type: DELETE_BRANCH_FAILURE, payload: err})
          })
}