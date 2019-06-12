import axios from "axios";

export const DATA_TRANSACTION_CARD_START = "DATA_TRANSACTION_CARD_START";
export const DATA_TRANSACTION_CARD_SUCCESS = "DATA_TRANSACTION_CARD_SUCCESS";
export const DATA_TRANSACTION_CARD_FAILURE = "DATA_TRANSACTION_CARD_FAILURE";

export const getTransactionCardData = () => dispatch => {
  dispatch({ type: DATA_TRANSACTION_CARD_START });

  return axios
    .get("https://tieme-ndo-backend.herokuapp.com/transaction/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      console.log("transaction_card_data", res.data);
      dispatch({ type: DATA_TRANSACTION_CARD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DATA_TRANSACTION_CARD_FAILURE, payload: err });
    });
};
