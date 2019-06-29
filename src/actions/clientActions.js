import axios from "axios";
import { BASE_URL } from "../config";

//Need to do separate action types so we can store search result data separately
export const FARMER_SEARCH_START = "FARMER_SEARCH_START";
export const FARMER_SEARCH_SUCCESS = "FARMER_SEARCH_SUCCESS";
export const FARMER_SEARCH_FAILURE = "FARMER_SEARCH_FAILURE";
export const RETAILER_SEARCH_START = "RETAILER_SEARCH_START";
export const RETAILER_SEARCH_SUCCESS = "RETAILER_SEARCH_SUCCESS";
export const RETAILER_SEARCH_FAILURE = "RETAILER_SEARCH_FAILURE";

export const searchClients = (query, type) => dispatch => {
  const nameSearch = encodeURI(query.name);
  const locationSearch = encodeURI(query.location);

  let urlString = ";";

  if (!nameSearch && !locationSearch) {
    // If not search params are passed we'll hit a find all
    urlString = `${BASE_URL}/${type}${
      type === "farmer" ? "s/all" : "/retailers"
    }?lead=${query.leads}`;
  } else {
    // this maps out to something like
    // https://backendurl.com/farmer/search?name=john&location=town&lead=false
    // or the equivalent for retailer
    urlString = `${BASE_URL}/${type}${
      type === "farmer" ? "s" : ""
    }/search?name=${nameSearch}&location=${locationSearch}&lead=${query.leads}`;
    // could be cleaned up by making the endpoints on backend uniform or using a general client controller
  }

  if (type === "farmer") {
    dispatch({
      type: FARMER_SEARCH_START,
      payload: { name: nameSearch, location: locationSearch }
    });
    return axios
      .get(urlString, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      })
      .then(res => {
        dispatch({
          type: FARMER_SEARCH_SUCCESS,
          payload: res.data,
          headers: res.headers
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FARMER_SEARCH_FAILURE, payload: err });
      });
  } else {
    dispatch({
      type: RETAILER_SEARCH_START,
      payload: { name: nameSearch, location: locationSearch }
    });
    return axios
      .get(urlString, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      })
      .then(res => {
        dispatch({
          type: RETAILER_SEARCH_SUCCESS,
          payload: res.data,
          headers: res.headers
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: RETAILER_SEARCH_FAILURE, payload: err });
      });
  }
};

export const DELETE_CLIENT_START = "DELETE_CLIENT_START";
export const DELETE_CLIENT_SUCCESS = "DELETE_CLIENT_SUCCESS";
export const DELETE_CLIENT_FAILURE = "DELETE_CLIENT_FAILURE";

export const deleteClient = (id, type) => dispatch => {
  dispatch({ type: DELETE_CLIENT_START });

  let urlString = "";

  if (type === "farmer") {
    urlString = `${BASE_URL}/farmers/farmer/${id}`;
  } else if (type === "retailer") {
    urlString = `${BASE_URL}/retailer/delete/${id}`;
  } else {
    throw new TypeError(`Could not find a URL for client type: ${type}`);
  }

  return axios
    .delete(urlString, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
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

export const addClient = (newClient, type) => dispatch => {
  dispatch({ type: ADD_CLIENT_START });

  let urlString = "";
  if (type === "farmer") {
    urlString = `${BASE_URL}/farmers/add`;
  } else if (type === "retailer") {
    urlString = `${BASE_URL}/retailer/new`;
  } else {
    throw new TypeError(`Could not find a URL for client type: ${type}`);
  }

  return axios
    .post(urlString, newClient, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
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

export const getClient = (clientId, type) => dispatch => {
  dispatch({ type: GET_CLIENT_START });

  let urlString = "";
  if (type === "farmer") {
    urlString = `${BASE_URL}/farmers/farmer/${clientId}`;
  } else if (type === "retailer") {
    urlString = `${BASE_URL}/retailer/${clientId}`;
  } else {
    throw new TypeError(`Could not find a URL for client type: ${type}`);
  }

  return axios
    .get(urlString, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: GET_CLIENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_CLIENT_FAILURE, payload: err });
    });
};

export const UPDATE_CLIENT = "UPDATE_CLIENT";
export const UPDATE_CLIENT_SUCCESS = "UPDATE_CLIENT_SUCCESS";
export const UPDATE_CLIENT_FAILURE = "UPDATE_CLIENT_FAILURE";

export const updateClient = client => dispatch => {
  dispatch({ type: UPDATE_CLIENT });

  let urlString = "";
  if (client.type.toLowerCase() === "farmer") {
    urlString = `${BASE_URL}/farmers/farmer/${client.id}`;
  } else if (client.type.toLowerCase() === "retailer") {
    urlString = `${BASE_URL}/retailer/update/${client.id}`;
  } else {
    throw new TypeError(`Could not find a URL for client type: ${client.type}`);
  }

  return axios
    .put(urlString, client, {
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

export const updateClientSuccess = () => dispatch => {
  dispatch({ type: UPDATE_CLIENT_SUCCESS });
};

export const updateClientFailure = () => dispatch => {
  dispatch({ type: UPDATE_CLIENT_FAILURE });
};

export const CLEAR_CLIENT_UPDATED = "CLEAR_CLIENT_UPDATED";
export const clearClientUpdated = () => dispatch => {
  dispatch({ type: CLEAR_CLIENT_UPDATED });
};

export const CLEAR_DELETED = "CLEAR_DELETED";

export const clearDeleted = () => dispatch => {
  dispatch({ type: CLEAR_DELETED });
};

export const CLEAR_ADDED = "CLEAR_ADDED";

export const clearAdded = () => dispatch => {
  dispatch({ type: CLEAR_ADDED });
};

export const FARMER_PAGE_START = "FARMER_PAGE_START";
export const FARMER_PAGE_SUCCESS = "FARMER_PAGE_SUCCESS";
export const FARMER_PAGE_FAILURE = "FARMER_PAGE_FAILURE";
export const RETAILER_PAGE_START = "RETAILER_PAGE_START";
export const RETAILER_PAGE_SUCCESS = "RETAILER_PAGE_SUCCESS";
export const RETAILER_PAGE_FAILURE = "RETAILER_PAGE_FAILURE";

export const pageClient = (pageString, type) => dispatch => {
  if (type === "farmer") {
    dispatch({
      type: FARMER_PAGE_START
    });
    return axios
      .get(pageString, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      })
      .then(res => {
        dispatch({
          type: FARMER_PAGE_SUCCESS,
          payload: res.data,
          headers: res.headers
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FARMER_PAGE_FAILURE, payload: err });
      });
  } else {
    dispatch({
      type: RETAILER_PAGE_START
    });
    return axios
      .get(pageString, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      })
      .then(res => {
        dispatch({
          type: RETAILER_PAGE_SUCCESS,
          payload: res.data,
          headers: res.headers
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: RETAILER_PAGE_FAILURE, payload: err });
      });
  }
};
