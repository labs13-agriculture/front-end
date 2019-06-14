import axios from "axios";

export const DATA_INSTALLMENT_CARD_START = "DATA_INSTALLMENT_CARD_START";
export const DATA_INSTALLMENT_CARD_SUCCESS = "DATA_INSTALLMENT_CARD_SUCCESS";
export const DATA_INSTALLMENT_CARD_FAILURE = "DATA_INSTALLMENT_CARD_FAILURE";

export const getInstallmentCardData = () => dispatch => {
  dispatch({ type: DATA_INSTALLMENT_CARD_START });

  return axios
    .get("https://tieme-ndo-backend.herokuapp.com/installment-list", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })

    .then(res => {
      console.log("installment_card_data", res.data);
      dispatch({ type: DATA_INSTALLMENT_CARD_SUCCESS, payload: res.data });
    })

    .catch(err => {
      console.log(err);
      dispatch({ type: DATA_INSTALLMENT_CARD_FAILURE, payload: err });
    });
};

export const DATA_INSTALLMENT_CARD_ADD = "DATA_INSTALLMENT_CARD_ADD";

export const addInstallment = (newInstallment, clientId) => dispatch => {
  dispatch({ type: DATA_INSTALLMENT_CARD_ADD });

  return axios
    .post(
      `https://tieme-ndo-backend.herokuapp.com/new-installment/${clientId}`,
      newInstallment,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      }
    )
    .then(res => {
      console.log("installment_card_data_add", res.data);
      dispatch({ type: DATA_INSTALLMENT_CARD_SUCCESS, payload: res.data });
    })

    .catch(err => {
      console.log(err);
      dispatch({ type: DATA_INSTALLMENT_CARD_FAILURE, payload: err });
    });
};

export const UPDATE_INSTALLMENT = "UPDATE_INSTALLMENT";
export const UPDATE_INSTALLMENT_SUCCESS = "UPDATE_INSTALLMENT_SUCCESS";
export const UPDATE_INSTALLMENT_FAILURE = "UPDATE_INSTALLMENT_FAILURE";

export const updateInstallmentItem = installment => dispatch => {
  dispatch({ type: UPDATE_INSTALLMENT });
  return axios
    .put(
      `https://tieme-ndo-backend.herokuapp.com/update-installment/${
        installment.id
      }`,
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

export const deleteItemFromInstallment = installmentId => dispatch => {
  dispatch({ type: DELETE_INSTALLMENT });
  return axios
    .delete(
      `https://tieme-ndo-backend.herokuapp.com/installment/${installmentId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      }
    )
    .then(res => {
      console.log("installment_card_data_delete", res.data);
      dispatch({ type: DELETE_INSTALLMENT_SUCCESS, payload: res.data });
    })

    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_INSTALLMENT_FAILURE, payload: err });
    });
};
