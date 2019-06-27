import axios from "axios";
import { BASE_URL } from "../config";
export const DATA_INSTALLMENT_CARD_START = "DATA_INSTALLMENT_CARD_START";
export const DATA_INSTALLMENT_CARD_SUCCESS = "DATA_INSTALLMENT_CARD_SUCCESS";
export const DATA_INSTALLMENT_CARD_FAILURE = "DATA_INSTALLMENT_CARD_FAILURE";

export const getInstallmentData = id => dispatch => {
  dispatch({ type: DATA_INSTALLMENT_CARD_START });

  return axios
    .get(`${BASE_URL}/installments/installment-list/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: DATA_INSTALLMENT_CARD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DATA_INSTALLMENT_CARD_FAILURE, payload: err });
    });
};

export const ADD_INSTALLMENT = "ADD_INSTALLMENT";
export const ADD_INSTALLMENT_SUCCESS = "ADD_INSTALLMENT_SUCCESS";
export const ADD_INSTALLMENT_FAILURE = "ADD_INSTALLMENT_FAILURE";

export const addInstallment = (newInstallment, clientId) => dispatch => {
  dispatch({ type: ADD_INSTALLMENT });

  return axios
    .post(
      `${BASE_URL}/installments/new-installment/${clientId}`,
      newInstallment,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      }
    )
    .then(res => {
      dispatch({ type: ADD_INSTALLMENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_INSTALLMENT_FAILURE, payload: err });
    });
};

export const UPDATE_INSTALLMENT = "UPDATE_INSTALLMENT";
export const UPDATE_INSTALLMENT_SUCCESS = "UPDATE_INSTALLMENT_SUCCESS";
export const UPDATE_INSTALLMENT_FAILURE = "UPDATE_INSTALLMENT_FAILURE";

export const updateInstallmentItem = installment => dispatch => {
  dispatch({ type: UPDATE_INSTALLMENT });
  return axios
    .put(
      `${BASE_URL}/installments/update-installment/${installment.id}`,
      installment,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      }
    )
    .then(res => {
      console.log("installment_card_data_update", res.data);
      dispatch({ type: UPDATE_INSTALLMENT_SUCCESS, payload: res.data });
    })

    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_INSTALLMENT_FAILURE, payload: err });
    });
};

export const DELETE_INSTALLMENT = "DATA_INSTALLMENT_CARD_DELETE";
export const DELETE_INSTALLMENT_SUCCESS = "DELETE_INSTALLMENT_SUCCESS";
export const DELETE_INSTALLMENT_FAILURE = "DELETE_INSTALLMENT_FAILURE";

export const deleteInstallment = installmentId => dispatch => {
  dispatch({ type: DELETE_INSTALLMENT });
  return axios
    .delete(`${BASE_URL}/installments/installment/${installmentId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      console.log("installment_card_data_delete", res.data);
      dispatch({ type: DELETE_INSTALLMENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_INSTALLMENT_FAILURE, payload: err });
    });
};

export const CLEAR_INSTALLMENT_UPDATE = "CLEAR_INSTALLMENT_UPDATE";

export const clearInstallmentUpdate = () => dispatch => {
  dispatch({ type: CLEAR_INSTALLMENT_UPDATE });
};

export const CLEAR_INSTALLMENT_ADD = "CLEAR_INSTALLMENT_ADD";

export const clearInstallmentAdd = () => dispatch => {
  dispatch({ type: CLEAR_INSTALLMENT_ADD });
};

export const CLEAR_INSTALLMENT_DELETE = "CLEAR_INSTALLMENT_DELETE";

export const clearInstallmentDelete = () => dispatch => {
  dispatch({ type: CLEAR_INSTALLMENT_DELETE });
};

export const clearInstallmentAlerts = () => dispatch => {
  dispatch({ type: CLEAR_INSTALLMENT_UPDATE });
  dispatch({ type: CLEAR_INSTALLMENT_ADD });
  dispatch({ type: CLEAR_INSTALLMENT_DELETE });
};
