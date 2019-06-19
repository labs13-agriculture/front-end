import {
  GET_TRANSACTION_START,
  GET_TRANSACTION_SUCCESS,
  GET_TRANSACTION_FAILURE,
  DELETE_TRANSACTION_START,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAILURE

} from "../actions";

const initialState = {
    transactionData:[],
  getTransactionStart: false,
  getTransactionSuccess: false,
  getTransactionFailure: false,
  error: "",
  deleteTransactionStart:false,
  deleteTransactionSuccess:false,
  deleteTransactionFailure:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTION_START:
      return {
        ...state,
        getTransactionStart: true,
        transactionData:[]

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
        transactionData:null,
        getTransactionStart: false,
        getTransactionFailure: true,
        getTransactionSuccess: false,
        error: action.payload
      };

      case DELETE_TRANSACTION_START:
      return {
        ...state,
        deleteTransactionStart: true,
        deleteTransactionSuccess:false,
        deleteTransactionFailure:false

      };

      case DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        deleteTransactionStart: false,
        deleteTransactionSuccess:true,
        deleteTransactionFailure:false

      };

      case DELETE_TRANSACTION_FAILURE:
      return {
        ...state,
        deleteTransactionStart: false,
        deleteTransactionSuccess:false,
        deleteTransactionFailure:true,
        error:action.payload

      };

    default:
      return state;
  }
};
