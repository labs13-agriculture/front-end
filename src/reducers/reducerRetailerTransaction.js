import {
  ADD_TRANSACTION_START,
  ADD_TRANSACTION_SUCCESS,
  ADD_TRANSACTION_FAILURE
} from "../actions";

const initialState = {
  addTransactionStart: false,
  addTransactionSuccess: false,
  addTransactionFailure: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION_START:
      return {
        ...state,
        addTransactionStart: true
      };
    case ADD_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactionData: action.payload,
        addTransactionStart: false,
        addTransactionSuccess: true,
        addTransactionFailure: false
      };

    case ADD_TRANSACTION_FAILURE:
      return {
        ...state,
        addTransactionStart: false,
        addTransactionFailure: true,
        addTransactionSuccess: false,
        error: action.payload
      };

    default:
      return state;
  }
};
