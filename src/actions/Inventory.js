import axios from "axios";
import { BASE_URL } from "../config.js";

// action functions
// getInventoryList, addItemToInventory, updateItemInInventory, deleteItemFromInventory, getItemTypes

// GETTING_INVENTORY, GETTING_INVENTORY_SUCCESS, GETTING_INVENTORY_FAILURE
export const GETTING_INVENTORY = "GETTING_INVENTORY";
export const GETTING_INVENTORY_SUCCESS = "GETTING_INVENTORY_SUCCESS";
export const GETTING_INVENTORY_FAILURE = "GETTING_INVENTORY_FAILURE";

export const getInventoryList = () => dispatch => {
  dispatch({ type: GETTING_INVENTORY });

  const urlString = `${BASE_URL}/itemtype/all`;

  return axios
    .get(urlString, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: GETTING_INVENTORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GETTING_INVENTORY_FAILURE, payload: err });
    });
};

// ADDING_INVENTORY, ADDING_INVENTORY_SUCCESS, ADDING_INVENTORY_FAILURE
export const ADDING_INVENTORY = "ADDING_INVENTORY";
export const ADDING_INVENTORY_SUCCESS = "ADDING_INVENTORY_SUCCESS";
export const ADDING_INVENTORY_FAILURE = "ADDING_INVENTORY_FAILURE";

export const addItemToInventory = item => dispatch => {
  dispatch({ type: ADDING_INVENTORY });

  const urlString = `${BASE_URL}/itemtype/add`;

  return axios
    .post(urlString, item, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: ADDING_INVENTORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADDING_INVENTORY_FAILURE, payload: err });
    });
};

// UPDATING_INVENTORY, UPDATING_INVENTORY_SUCCESS, UPDATING_INVENTORY_FAILURE
export const UPDATING_INVENTORY = "UPDATING_INVENTORY";
export const UPDATING_INVENTORY_SUCCESS = "UPDATING_INVENTORY_SUCCESS";
export const UPDATING_INVENTORY_FAILURE = "UPDATING_INVENTORY_FAILURE";

export const updateItemInInventory = item => dispatch => {
  dispatch({ type: UPDATING_INVENTORY });

  const urlString = `${BASE_URL}/itemtype/update/${item.id}`;

  return axios
    .put(urlString, item, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: UPDATING_INVENTORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATING_INVENTORY_FAILURE, payload: err });
    });
};

// DELETING_INVENTORY, DELETING_INVENTORY_SUCCESS, DELETING_INVENTORY_FAILURE
export const DELETING_INVENTORY = "DELETING_INVENTORY";
export const DELETING_INVENTORY_SUCCESS = "DELETING_INVENTORY_SUCCESS";
export const DELETING_INVENTORY_FAILURE = "DELETING_INVENTORY_FAILURE";

export const deleteItemFromInventory = itemid => dispatch => {
  dispatch({ type: DELETING_INVENTORY });

  const urlString = `${BASE_URL}/itemtype/delete/${itemid}`;

  return axios
    .delete(urlString, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: DELETING_INVENTORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETING_INVENTORY_FAILURE, payload: err });
    });
};

// GETTING_ITEMTYPES, GETTING_ITEMTYPES_SUCCESS, GETTING_ITEMTYPES_FAILURE
export const GETTING_ITEMTYPES = "GETTING_ITEMTYPES";
export const GETTING_ITEMTYPES_SUCCESS = "GETTING_ITEMTYPES_SUCCESS";
export const GETTING_ITEMTYPES_FAILURE = "GETTING_ITEMTYPES_FAILURE";

export const getItemTypes = () => dispatch => {
  dispatch({ type: GETTING_ITEMTYPES });

  const urlString = `${BASE_URL}/itemtype/all`;

  return axios
    .get(urlString, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: GETTING_ITEMTYPES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GETTING_ITEMTYPES_FAILURE, payload: err });
    });
};

export const CLEAR_INVENTORY_UPDATE = "CLEAR_INVENTORY_UPDATE";

export const clearInvetoryUpdate = () => dispatch => {
  dispatch({ type: CLEAR_INVENTORY_UPDATE });
};

export const CLEAR_INVENTORY_ADD = "CLEAR_INVENTORY_ADD";

export const clearInventoryAdd = () => dispatch => {
  dispatch({ type: CLEAR_INVENTORY_ADD });
};

export const CLEAR_INVENTORY_DELETE = "CLEAR_INVENTORY_DELETE";

export const clearInventoryDelete = () => dispatch => {
  dispatch({ type: CLEAR_INVENTORY_DELETE });
};

export const clearInventoryAlerts = () => dispatch => {
  dispatch({ type: CLEAR_INVENTORY_UPDATE });
  dispatch({ type: CLEAR_INVENTORY_ADD });
  dispatch({ type: CLEAR_INVENTORY_DELETE });
};
