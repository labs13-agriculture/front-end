import React, { Component } from "react";
import {
  DATA_TRANSACTION_CARD_START,
  DATA_TRANSACTION_CARD_SUCCESS,
  DATA_TRANSACTION_CARD_FAILURE
} from "../actions";

const initialState = {
  transactionCardDataStart: false,
  transactionCardDataSuccess: false,
  transactionCardDataFailure: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_TRANSACTION_CARD_START:
      return {
        ...state,
        transactionCardDataStart: true
      };
    case DATA_TRANSACTION_CARD_SUCCESS:
      return {
        ...state,
        transactionData: action.payload,
        transactionCardDataStart: false,
        transactionCardDataSuccess: true,
        transactionCardDataFailure: false
      };

    case DATA_TRANSACTION_CARD_FAILURE:
      return {
        ...state,
        transactionCardDataStart: false,
        transactionCardDataFailure: true,
        transactionCardDataSuccess: false,
        error: action.payload
      };

    default:
      return state;
  }
};
