import axios from "axios";

export const DATA_YIELD_CARD_START = "DATA_YIELD_CARD_START";
export const DATA_YIELD_CARD_SUCCESS = "DATA_YIELD_CARD_SUCCESS";
export const DATA_YIELD_CARD_FAILURE = "DATA_YIELD_CARD_FAILURE";

export const getYieldCardData = () => dispatch => {
  dispatch({ type: DATA_YIELD_CARD_START });

  return axios
    .get("https://tieme-ndo-backend.herokuapp.com/yield/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })

    .then(res => {
      console.log("yield_card_data", res.data);
      dispatch({ type: DATA_YIELD_CARD_SUCCESS, payload: res.data });
    })

    .catch(err => {
      console.log(err);
      dispatch({ type: DATA_YIELD_CARD_FAILURE, payload: err });
    });
};
