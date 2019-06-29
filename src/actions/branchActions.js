import axios from "axios";
import { BASE_URL } from "../config";
export const GET_BRANCHES_START = "GET_BRANCHES_START";
export const GET_BRANCHES_SUCCESS = "GET_BRANCHES_SUCCESS";
export const GET_BRANCHES_FAILURE = "GET_BRANCHES_FAILURE";

export const getBranches = clientId => dispatch => {
  dispatch({ type: GET_BRANCHES_START });

  axios
    .get(`${BASE_URL}/organizations/contacts/${clientId}`, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: GET_BRANCHES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_BRANCHES_FAILURE, payload: err });
    });
};

export const ADD_BRANCH_START = "ADD_BRANCH_START";
export const ADD_BRANCH_SUCCESS = "ADD_BRANCH_SUCCESS";
export const ADD_BRANCH_FAILURE = "ADD_BRANCH_FAILURE";

export const addBranch = (clientId, newBranch) => dispatch => {
  dispatch({ type: ADD_BRANCH_START });

  axios
    .post(`${BASE_URL}/organizations/branch/${clientId}`, newBranch, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: ADD_BRANCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_BRANCH_FAILURE, payload: err });
    });
};

export const UPDATE_BRANCH_START = "UPDATE_BRANCH_START";
export const UPDATE_BRANCH_SUCCESS = "UPDATE_BRANCH_SUCCESS";
export const UPDATE_BRANCH_FAILURE = "UPDATE_BRANCH_FAILURE";

export const updateBranch = (branchId, newBranch) => dispatch => {
  dispatch({ type: UPDATE_BRANCH_START });

  axios
    .put(`${BASE_URL}/organizations/branch/update/${branchId}`, newBranch, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: UPDATE_BRANCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_BRANCH_FAILURE, payload: err });
    });
};

export const DELETE_BRANCH_START = "DELETE_BRANCH_START";
export const DELETE_BRANCH_SUCCESS = "DELETE_BRANCH_SUCCESS";
export const DELETE_BRANCH_FAILURE = "DELETE_BRANCH_FAILURE";

export const deleteBranch = branchId => dispatch => {
  dispatch({ type: DELETE_BRANCH_START });

  axios
    .delete(`${BASE_URL}/organizations/contact/${branchId}`, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: DELETE_BRANCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_BRANCH_FAILURE, payload: err });
    });
};

export const CLEAR_BRANCH_UPDATE = "CLEAR_BRANCH_UPDATE";

export const clearBranchpdate = () => dispatch => {
  dispatch({ type: CLEAR_BRANCH_UPDATE });
};

export const CLEAR_BRANCH_ADD = "CLEAR_BRANCH_ADD";

export const clearBranchAdd = () => dispatch => {
  dispatch({ type: CLEAR_BRANCH_ADD });
};

export const CLEAR_BRANCH_DELETE = "CLEAR_BRANCH_DELETE";

export const clearBranchDelete = () => dispatch => {
  dispatch({ type: CLEAR_BRANCH_DELETE });
};

export const clearBranchAlerts = () => dispatch => {
  dispatch({ type: CLEAR_BRANCH_UPDATE });
  dispatch({ type: CLEAR_BRANCH_ADD });
  dispatch({ type: CLEAR_BRANCH_DELETE });
};

export const GET_NEXT_BRANCH_START = "GET_NEXT_BRANCH_START";
export const GET_NEXT_BRANCH_SUCCESS = "GET_NEXT_BRANCH_SUCCESS";
export const GET_NEXT_BRANCH_FAILURE = "GET_NEXT_BRANCH_FAILURE";

export const getNextBranchPage = nextLink => dispatch => {
  dispatch({ type: GET_NEXT_BRANCH_START });
  return axios
    .get(nextLink, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: GET_NEXT_BRANCH_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_NEXT_BRANCH_FAILURE, payload: err });
    });
};
