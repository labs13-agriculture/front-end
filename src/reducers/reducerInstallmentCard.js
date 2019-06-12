import React, { Component } from "react";
import {
  DATA_INSTALLMENT_CARD_START,
  DATA_INSTALLMENT_CARD_SUCCESS,
  DATA_INSTALLMENT_CARD_FAILURE
} from "../actions";

const initialState = {
  installmentCardDataStart: false,
  installmentCardDataSuccess: false,
  installmentCardDataFailure: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_INSTALLMENT_CARD_START:
      return {
        ...state,
        installmentCardDataStart: true
      };
    case DATA_INSTALLMENT_CARD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        installmentCardDataStart: false,
        installmentCardDataSuccess: true,
        installmentCardDataFailure: false
      };
    case DATA_INSTALLMENT_CARD_FAILURE:
      return {
        ...state,
        installmentCardDataStart: false,
        installmentCardDataSuccess: false,
        installmentCardDataFailure: true,
        error: action.payload
      };
    default:
      return state;
  }
};
