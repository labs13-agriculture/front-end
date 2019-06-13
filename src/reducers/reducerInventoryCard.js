import React, { Component } from "react";
import {
  DATA_INVENTORY_CARD_START,
  DATA_INVENTORY_CARD_SUCCESS,
  DATA_INVENTORY_CARD_FAILURE
} from "../actions";

const initialState = {
  inventoryCardDataStart: false,
  inventoryCardDataSuccess: false,
  inventoryCardDataFailure: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_INVENTORY_CARD_START:
      return {
        ...state,
        inventoryCardDataStart: true
      };
    case DATA_INVENTORY_CARD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        inventoryCardDataStart: false,
        inventoryCardDataSuccess: true,
        inventoryCardDataFailure: false
      };
    case DATA_INVENTORY_CARD_FAILURE:
      return {
        ...state,
        inventoryCardDataStart: false,
        inventoryCardDataSuccess: false,
        inventoryCardDataFailure: true,
        error: action.payload
      };
    default:
      return state;
  }
};
