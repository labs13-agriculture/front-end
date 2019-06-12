import React, { Component } from "react";
import {
  DATA_YIELD_CARD_START,
  DATA_YIELD_CARD_SUCCESS,
  DATA_YIELD_CARD_FAILURE
} from "../actions";

const initialState = {
  yieldCardDataStart: false,
  yieldCardDataSuccess: false,
  yieldCardDataFailure: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_YIELD_CARD_START:
      return {
        ...state,
        yieldCardDataStart: true
      };
    case DATA_YIELD_CARD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        yieldCardDataStart: false,
        yieldCardDataSuccess: true,
        yieldCardDataFailure: false
      };
    case DATA_YIELD_CARD_FAILURE:
      return {
        ...state,
        yieldCardDataStart: false,
        yieldCardDataSuccess: false,
        yieldCardDataFailure: true,
        error: action.payload
      };
    default:
      return state;
  }
};
