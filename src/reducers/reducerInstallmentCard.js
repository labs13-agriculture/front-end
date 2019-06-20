import {
  DATA_INSTALLMENT_CARD_START,
  DATA_INSTALLMENT_CARD_SUCCESS,
  DATA_INSTALLMENT_CARD_FAILURE,
  DATA_INSTALLMENT_CARD_ADD,
  UPDATE_INSTALLMENT,
  UPDATE_INSTALLMENT_SUCCESS,
  UPDATE_INSTALLMENT_FAILURE,
  DELETE_INSTALLMENT,
  DELETE_INSTALLMENT_SUCCESS,
  DELETE_INSTALLMENT_FAILURE
} from "../actions";

const initialState = {
  data: [],
  installmentCardDataStart: false,
  installmentCardDataSuccess: false,
  installmentCardDataFailure: false,
  installmentCardDataAdd: false,
  deletingInstallment: false,
  updatingInstallment: false,
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
        installmentCardDataSuccess: true
      };
    case DATA_INSTALLMENT_CARD_FAILURE:
      return {
        ...state,
        error: action.payload,
        installmentCardDataStart: false,
        installmentCardDataFailure: true
      };
    case DATA_INSTALLMENT_CARD_ADD:
      return {
        ...state,
        installmentCardDataAdd: true
      };
    case UPDATE_INSTALLMENT:
      return {
        ...state,
        updatingInstallment: true,
        error: false
      };

    case UPDATE_INSTALLMENT_SUCCESS:
      return {
        ...state,
        updatingInstallment: false,
        data: action.payload,
        error: false
      };
    case UPDATE_INSTALLMENT_FAILURE:
      return {
        ...state,
        updatingInstallment: false,
        error: action.payload
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
        data: action.payload,
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
