import axios from "axios";

export const DATA_INVENTORY_CARD_START = "DATA_INVENTORY_CARD_START";
export const DATA_INVENTORY_CARD_SUCCESS = "DATA_INVENTORY_CARD_SUCCESS";
export const DATA_INVENTORY_CARD_FAILURE = "DATA_INVENTORY_CARD_FAILURE";

export const getInventoryCardData = () => dispatch => {
  dispatch({ type: DATA_INVENTORY_CARD_START });

  return axios
    .get("https://tieme-ndo-backend.herokuapp.com/inventory/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })

    .then(res => {
      console.log("inventory_card_data", res.data);
      dispatch({ type: DATA_INVENTORY_CARD_SUCCESS, payload: res.data });
    })

    .catch(err => {
      console.log(err);
      dispatch({ type: DATA_INVENTORY_CARD_FAILURE, payload: err });
    });
};
