import React, { Component } from "react";
import {
  DATA_INSTALLMENT_CARD_START,
  DATA_INSTALLMENT_CARD_SUCCESS,
  DATA_INSTALLMENT_CARD_FAILURE,
  DATA_INSTALLMENT_CARD_ADD,
  DELETE_INSTALLMENT,
  DELETE_INSTALLMENT_SUCCESS,
  DELETE_INSTALLMENT_FAILURE
} from "../actions";

const initialState = {
  installmentList: [],
  installmentCardDataStart: false,
  installmentCardDataSuccess: false,
  installmentCardDataFailure: false,
  installmentCardDataAdd: false,
  deletingInstallment: false,
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
    case DATA_INSTALLMENT_CARD_ADD:
      return {
        ...state,
        installmentCardDataAdd: true
      };
    case DELETE_INSTALLMENT:
      return {
        ...state,
        deletingInstallment: true,
        error: false
      };

    case DELETE_INSTALLMENT_SUCCESS:
      return {
        ...state,
        deletingInstallment: false,
        installmentList: action.payload,
        error: false
      };
    case DELETE_INSTALLMENT_FAILURE:
      return {
        ...state,
        deletingInstallment: false,
        error: action.payload
      };
    default:
      return state;
  }
};
