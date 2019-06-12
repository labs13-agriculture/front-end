import axios from "axios";

export const DATA_FARMER_CARD_START = "DATA_FARMER_CARD_START";
export const DATA_FARMER_CARD_SUCCESS = "DATA_FARMER_CARD_SUCCESS";
export const DATA_FARMER_CARD_FAILURE = "DATA_FARMER_CARD_FAILURE";

export const getFarmerCardData = () => dispatch => {
  dispatch({ type: DATA_FARMER_CARD_START });

  return axios
    .get("https://tieme-ndo-backend.herokuapp.com/farmers/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      console.log("farmer_card_data", res.data);
      dispatch({ type: DATA_FARMER_CARD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DATA_FARMER_CARD_FAILURE, payload: err });
    });
};
