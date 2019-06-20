import axios from "axios";
import { BASE_URL } from "../config";

export const CLIENT_SEARCH_START = "CLIENT_SEARCH_START";
export const CLIENT_SEARCH_SUCCESS = "CLIENT_SEARCH_SUCCESS";
export const CLIENT_SEARCH_FAILURE = "CLIENT_SEARCH_FAILURE";

export const searchClients = query => dispatch => {
  const nameSearch = encodeURI(query.name);
  const locationSearch = encodeURI(query.location);
  dispatch({
    type: CLIENT_SEARCH_START,
    payload: { name: nameSearch, location: locationSearch }
  });
  //console.log(nameSearch + " " + locationSearch);

  const urlString = `${BASE_URL}/farmers/search?name=${nameSearch}&location=${locationSearch}&lead=${
    query.leads
  }`;

  return axios
    .get(urlString, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      console.log("OUTPUTTING RES");
      console.log(res.data);
      dispatch({ type: CLIENT_SEARCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: CLIENT_SEARCH_FAILURE, payload: err });
    });
};

export const DELETE_CLIENT_START = "DELETE_CLIENT_START";
export const DELETE_CLIENT_SUCCESS = "DELETE_CLIENT_SUCCESS";
export const DELETE_CLIENT_FAILURE = "DELETE_CLIENT_FAILURE";

export const deleteClient = id => dispatch => {
  dispatch({ type: DELETE_CLIENT_START });

  return axios
    .delete(`${BASE_URL}/farmers/farmer/${id}`, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      console.log("DELETE_CLIENT_data", res.data);

      dispatch({ type: DELETE_CLIENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_CLIENT_FAILURE, payload: err });
    });
};

export const ADD_CLIENT_START = "ADD_CLIENT_START";
export const ADD_CLIENT_SUCCESS = "ADD_CLIENT_SUCCESS";
export const ADD_CLIENT_FAILURE = "ADD_CLIENT_FAILURE";

export const addClient = newClient => dispatch => {
  dispatch({ type: ADD_CLIENT_START });
  console.log("attempting to add", newClient);

  return axios
    .post(`${BASE_URL}/farmers/add`, newClient, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      console.log("added new client", res.data);

      dispatch({ type: ADD_CLIENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_CLIENT_FAILURE, payload: err });
    });
};

export const GET_CLIENT_START = "GET_CLIENT_START";
export const GET_CLIENT_SUCCESS = "GET_CLIENT_SUCCESS";
export const GET_CLIENT_FAILURE = "GET_CLIENT_FAILURE";

export const getClient = clientId => dispatch => {
  dispatch({ type: GET_CLIENT_START });
  console.log("starting get client action");

  return axios
    .get(`${BASE_URL}/farmers/farmer/${clientId}`, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      console.log("get client demographics", res.data);

      dispatch({ type: GET_CLIENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("get demographics failure", err);
      dispatch({ type: GET_CLIENT_FAILURE, payload: err });
    });
};

export const UPDATE_CLIENT = "UPDATE_CLIENT";
export const UPDATE_CLIENT_SUCCESS = "UPDATE_CLIENT_SUCCESS";
export const UPDATE_CLIENT_FAILURE = "UPDATE_CLIENT_FAILURE";

export const updateClient = client => dispatch => {
  dispatch({ type: UPDATE_CLIENT });
  console.log("attempting to update", client);
  return axios
    .put(`${BASE_URL}/farmers/farmer/${client.id}`, client, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: UPDATE_CLIENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_CLIENT_FAILURE, payload: err });
    });
};

export const CLEAR_DELETED = "CLEAR_DELETED";

export const clearDeleted = () => dispatch => {
  dispatch({ type: CLEAR_DELETED });
};

export const CLEAR_ADDED = "CLEAR_ADDED";

export const clearAdded = () => dispatch => {
  dispatch({ type: CLEAR_ADDED });
};
