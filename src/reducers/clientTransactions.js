import {
  GET_TRANSACTION_START,
  GET_TRANSACTION_SUCCESS,
  GET_TRANSACTION_FAILURE,
  DELETE_TRANSACTION_START,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAILURE,
  UPDATE_TRANSACTION_START,
  UPDATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_FAILURE,
  ADD_TRANSACTION_START,
  ADD_TRANSACTION_SUCCESS,
  ADD_TRANSACTION_FAILURE,
  CLEAR_TRANSACTION_ALERT
} from "../actions";

const initialState = {
  transactionData: [],
  addTransactionStart: false,
  addTransactionSuccess: false,
  addTransactionFailure: false,
  getTransactionStart: false,
  getTransactionSuccess: false,
  getTransactionFailure: false,
  error: "",
  deleteTransactionStart: false,
  deleteTransactionSuccess: false,
  deleteTransactionFailure: false,
  updateTransactionStart: false,
  updateTransactionSuccess: false,
  updateTransactionFailure: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION_START:
      return {
        ...state,
        error: "",
        addTransactionStart: true,
        addTransactionFailure: false,
        addTransactionSuccess: false
      };
    case ADD_TRANSACTION_SUCCESS:
      return {
        ...state,
        addTransactionFailure: false,
        addTransactionStart: false,
        addTransactionSuccess: true,
        transactionData: action.payload
      };
    case ADD_TRANSACTION_FAILURE:
      return {
        ...state,
        addTransactionFailure: true,
        addTransactionStart: false,
        addTransactionSuccess: false,
        error: action.payload
      };
    case GET_TRANSACTION_START:
      return {
        ...state,
        getTransactionStart: true,
        transactionData: []
      };
    case GET_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactionData: action.payload,
        getTransactionStart: false,
        getTransactionSuccess: true,
        getTransactionFailure: false
      };

    case GET_TRANSACTION_FAILURE:
      return {
        ...state,
        transactionData: null,
        getTransactionStart: false,
        getTransactionFailure: true,
        getTransactionSuccess: false,
        error: action.payload
      };

    case DELETE_TRANSACTION_START:
      return {
        ...state,
        deleteTransactionStart: true,
        deleteTransactionSuccess: false,
        deleteTransactionFailure: false
      };

    case DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        deleteTransactionStart: false,
        deleteTransactionSuccess: true,
        deleteTransactionFailure: false,
        transactionData: action.payload
      };

    case DELETE_TRANSACTION_FAILURE:
      return {
        ...state,
        deleteTransactionStart: false,
        deleteTransactionSuccess: false,
        deleteTransactionFailure: true,
        error: action.payload
      };

    case UPDATE_TRANSACTION_START:
      return {
        ...state,
        updateTransactionStart: true,
        updateTransactionSuccess: false,
        updateTransactionFailure: false
      };

    case UPDATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        updateTransactionStart: false,
        updateTransactionSuccess: true,
        updateTransactionFailure: false,
        transactionData: action.payload
      };

    case UPDATE_TRANSACTION_FAILURE:
      return {
        ...state,
        updateTransactionStart: false,
        updateTransactionSuccess: false,
        updateTransactionFailure: true,
        error: action.payload
      };

    case CLEAR_TRANSACTION_ALERT:
      return {
        ...state,
        addTransactionSuccess: false,
        addTransactionFailure: false,
        deleteTransactionSuccess: false,
        deleteTransactionFailure: false,
        updateTransactionSuccess: false,
        updateTransactionFailure: false
      };

    default:
      return state;
  }
};
