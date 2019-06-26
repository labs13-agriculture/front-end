import {
  DATA_INSTALLMENT_CARD_START,
  DATA_INSTALLMENT_CARD_SUCCESS,
  DATA_INSTALLMENT_CARD_FAILURE,
  ADD_INSTALLMENT,
  ADD_INSTALLMENT_SUCCESS,
  ADD_INSTALLMENT_FAILURE,
  CLEAR_INSTALLMENT_ADD,
  UPDATE_INSTALLMENT,
  UPDATE_INSTALLMENT_SUCCESS,
  UPDATE_INSTALLMENT_FAILURE,
  CLEAR_INSTALLMENT_UPDATE,
  DELETE_INSTALLMENT,
  DELETE_INSTALLMENT_SUCCESS,
  DELETE_INSTALLMENT_FAILURE,
  CLEAR_INSTALLMENT_DELETE
} from "../actions";

const initialState = {
  data: [],
  installmentCardDataStart: false,
  installmentCardDataSuccess: false,
  installmentCardDataFailure: false,
  installmentCardDataAdd: false,
  deletingInstallment: false,
  updatingInstallment: false,
  updateSuccess: false,
  updateFailure: false,
  addSuccess: false,
  addFailure: false,
  deleteSuccess: false,
  deleteFailure: false,
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
    case ADD_INSTALLMENT:
      return {
        ...state,
        addSuccess: false,
        addFailure: false,
        installmentCardDataAdd: true
      };
    case ADD_INSTALLMENT_SUCCESS:
      return {
        ...state,
        installmentCardDataAdd: false,
        addSuccess: true,
        data: action.payload
      };
    case ADD_INSTALLMENT_FAILURE:
      return {
        ...state,
        installmentCardDataAdd: false,
        addFailure: true,
        error: action.payload
      };
    case CLEAR_INSTALLMENT_ADD:
      return {
        ...state,
        addFailure: false,
        addSuccess: false
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
        updateSuccess: true,
        data: action.payload,
        error: false
      };
    case UPDATE_INSTALLMENT_FAILURE:
      return {
        ...state,
        updatingInstallment: false,
        error: action.payload
      };
    case CLEAR_INSTALLMENT_UPDATE:
      return {
        ...state,
        updateFailure: false,
        updateSuccess: false
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
        deleteSuccess: true,
        data: action.payload,
        error: false
      };
    case DELETE_INSTALLMENT_FAILURE:
      return {
        ...state,
        deletingInstallment: false,
        error: action.payload
      };
    case CLEAR_INSTALLMENT_DELETE:
      return {
        ...state,
        deleteSuccess: false,
        deleteFailure: false
      };
    default:
      return state;
  }
};
