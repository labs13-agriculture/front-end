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
