import axios from "axios";

export const PROD_STAT_START = "PROD_STAT_START";
export const PROD_STAT_SUCCESS = "PROD_STAT_SUCCESS";
export const PROD_STAT_FAILURE = "PROD_STAT_FAILURE";

export const getProductStatData = () => dispatch => {
  dispatch({ type: PROD_STAT_START });
  return axios
    .get("https://tieme-ndo-backend.herokuapp.com/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: PROD_STAT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: PROD_STAT_FAILURE, payload: err });
    });
};
