import {
  CLIENT_SEARCH_START,
  CLIENT_SEARCH_SUCCESS,
  CLIENT_SEARCH_FAILURE,
  ADD_CLIENT_START,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_FAILURE,
  DELETE_CLIENT_START,
  DELETE_CLIENT_SUCCESS,
  DELETE_CLIENT_FAILURE,
  GET_CLIENT_START,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAILURE,
  UPDATE_CLIENT,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAILURE,
  CLEAR_DELETED,
  CLEAR_ADDED
} from "../actions";

const initialState = {
  deleteStart: false,
  addStart: false,
  searchStart: false,
  listData: [],
  error: "",
  client: null,
  previousSearch: null,
  updatingFarmer: false,
  clientDeleted: false,
  clientAdded: false
};

export default (state = initialState, action) => {
  console.log(action);
  console.log(action.payload);
  switch (action.type) {
    case CLEAR_DELETED:
      return {
        ...state,
        clientDeleted: false
      };
    case CLEAR_ADDED:
      return {
        ...state,
        clientAdded: false
      };
    case CLIENT_SEARCH_START:
      return {
        ...state,
        searchStart: true,
        error: "",
        listData: [],
        previousSearch: action.payload
      };
    case CLIENT_SEARCH_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        listData: action.payload,
        searchStart: false,
        error: ""
      };
    case CLIENT_SEARCH_FAILURE:
      return {
        ...state,
        listData: null,
        searchStart: false,
        error: action.payload
      };
    case ADD_CLIENT_START:
      return {
        ...state,
        addStart: true,
        clientAdded: false,
        error: null
      };
    case ADD_CLIENT_SUCCESS:
      return {
        ...state,
        addStart: false,
        clientAdded: true,
        client: action.payload
      };
    case ADD_CLIENT_FAILURE:
      return {
        ...state,
        addStart: false,
        error: action.payload
      };
    case DELETE_CLIENT_START:
      return {
        ...state,
        deleteStart: true,
        deleteSuccess: false,
        deleteFailure: false
      };
    case DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        deleteStart: false,
        clientDeleted: true,
        listData: []
      };
    case DELETE_CLIENT_FAILURE:
      return {
        ...state,
        deleteStart: false,
        deleteFailure: true,
        deleteSuccess: false,
        error: action.payload
      };
    case GET_CLIENT_START:
      return {
        ...state,
        getStart: true,
        clientAdded: false,
        getSuccess: false,
        getFailure: false
      };
    case GET_CLIENT_SUCCESS:
      return {
        ...state,
        getStart: false,
        getFailure: false,
        getSuccess: true,
        client: action.payload
      };
    case GET_CLIENT_FAILURE:
      return {
        ...state,
        getStart: false,
        getFailure: true,
        getSuccess: false,
        error: action.payload
      };
    case UPDATE_CLIENT:
      return {
        ...state,
        updatingFarmer: true,
        error: null
      };
    case UPDATE_CLIENT_SUCCESS:
      return {
        ...state,
        updatingFarmer: false,
        client: action.payload
      };
    case UPDATE_CLIENT_FAILURE:
      return {
        ...state,
        updatingFarmer: false,
        error: action.payload
      };
    default:
      return state;
  }
};
