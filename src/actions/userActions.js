import axios from "axios";
import { BASE_URL } from "../config";

export const ADD_SYSTEM_USER_START = "ADD_SYSTEM_USER_START";
export const ADD_SYSTEM_USER_SUCCESS = "ADD_SYSTEM_USER_SUCCESS";
export const ADD_SYSTEM_USER_FAILURE = "ADD_SYSTEM_USER_FAILURE";

export const addNewSystemUser = userDetails => dispatch => {
  dispatch({ type: ADD_SYSTEM_USER_START });

  const body = JSON.stringify(userDetails);
  return axios
    .post(`${BASE_URL}/users/newuser`, body, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: ADD_SYSTEM_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_SYSTEM_USER_FAILURE, payload: err });
    });
};

export const UPDATE_SYSTEM_USER_START = "UPDATE_SYSTEM_USER_START";
export const UPDATE_SYSTEM_USER_SUCCESS = "UPDATE_SYSTEM_USER_SUCCESS";
export const UPDATE_SYSTEM_USER_FAILURE = "UPDATE_SYSTEM_USER_FAILURE";

export const updateSystemUser = (userDetails, id) => dispatch => {
  dispatch({ type: UPDATE_SYSTEM_USER_START });

  const body = JSON.stringify(userDetails);
  return axios
    .put(`${BASE_URL}/users/update-user/${id}`, body, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: UPDATE_SYSTEM_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_SYSTEM_USER_FAILURE, payload: err });
    });
};

export const DELETE_SYSTEM_USER_START = "DELETE_SYSTEM_USER_START";
export const DELETE_SYSTEM_USER_SUCCESS = "DELETE_SYSTEM_USER_SUCCESS";
export const DELETE_SYSTEM_USER_FAILURE = "DELETE_SYSTEM_USER_FAILURE";

export const deleteSystemUser = id => dispatch => {
  dispatch({ type: DELETE_SYSTEM_USER_START });

  return axios
    .delete(`${BASE_URL}/users/user/${id}`, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: DELETE_SYSTEM_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_SYSTEM_USER_FAILURE, payload: err });
    });
};

export const USER_SEARCH_START = "USER_SEARCH_START";
export const USER_SEARCH_SUCCESS = "USER_SEARCH_SUCCESS";
export const USER_SEARCH_FAILURE = "USER_SEARCH_FAILURE";

export const userSearchResults = searchQuery => dispatch => {
  dispatch({ type: USER_SEARCH_START });

  const nameSearch = encodeURI(searchQuery);

  return axios
    .get(`${BASE_URL}/users/username/${nameSearch}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: USER_SEARCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: USER_SEARCH_FAILURE, payload: err });
    });
};

export const CLEAR_USER_ALERTS = "CLEAR_USER_ALERTS";

export const clearUserAlerts = () => dispatch => {
  dispatch({ type: CLEAR_USER_ALERTS });
};
