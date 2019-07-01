import axios from "axios";
import { BASE_URL } from "../config";
export const ADD_TRANSACTION_START = "ADD_TRANSACTION_START";
export const ADD_TRANSACTION_SUCCESS = "ADD_TRANSACTION_SUCCESS";
export const ADD_TRANSACTION_FAILURE = "ADD_TRANSACTION_FAILURE";

export const addNewTransaction = (transactionDetails, id) => dispatch => {
  dispatch({ type: ADD_TRANSACTION_START });

  // const body = JSON.stringify(transactionDetails);
  const body = transactionDetails;
  return axios
    .post(`${BASE_URL}/transaction/add/${id}`, body, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: ADD_TRANSACTION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_TRANSACTION_FAILURE, payload: err });
    });
};

export const GET_TRANSACTION_START = "GET_TRANSACTION_START";
export const GET_TRANSACTION_SUCCESS = "GET_TRANSACTION_SUCCESS";
export const GET_TRANSACTION_FAILURE = "GET_TRANSACTION_FAILURE";

export const getClientTransaction = clientId => dispatch => {
  dispatch({ type: GET_TRANSACTION_START });
  return axios
    .get(`${BASE_URL}/transaction/client/${clientId}`, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: GET_TRANSACTION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_TRANSACTION_FAILURE, payload: err });
    });
};

export const DELETE_TRANSACTION_START = "DELETE_TRANSACTION_START";
export const DELETE_TRANSACTION_SUCCESS = "DELETE_TRANSACTION_SUCCESS";
export const DELETE_TRANSACTION_FAILURE = "DELETE_TRANSACTION_FAILURE";

export const deleteClientTransaction = transactionId => dispatch => {
  dispatch({ type: DELETE_TRANSACTION_START });

  return axios
    .delete(`${BASE_URL}/transaction/delete/${transactionId}`, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: DELETE_TRANSACTION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_TRANSACTION_FAILURE, payload: err });
    });
};

export const UPDATE_TRANSACTION_START = "UPDATE_TRANSACTION_START";
export const UPDATE_TRANSACTION_SUCCESS = "UPDATE_TRANSACTION_SUCCESS";
export const UPDATE_TRANSACTION_FAILURE = "UPDATE_TRANSACTION_FAILURE";

export const updateClientTransaction = (
  transactionDetails,
  transactionId
) => dispatch => {
  const body = transactionDetails;
  dispatch({ type: UPDATE_TRANSACTION_START });

  return axios
    .put(`${BASE_URL}/transaction/update/${transactionId}`, body, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: UPDATE_TRANSACTION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_TRANSACTION_FAILURE, payload: err });
    });
};

export const CLEAR_TRANSACTION_ALERT = "CLEAR_TRANSACTION_ALERT";

export const clearTransactionAlerts = () => dispatch => {
  dispatch({ type: CLEAR_TRANSACTION_ALERT });
};
