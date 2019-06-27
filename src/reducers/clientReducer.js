import {
  FARMER_SEARCH_START,
  FARMER_SEARCH_SUCCESS,
  FARMER_SEARCH_FAILURE,
  RETAILER_SEARCH_START,
  RETAILER_SEARCH_SUCCESS,
  RETAILER_SEARCH_FAILURE,
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
  CLEAR_CLIENT_UPDATED,
  CLEAR_DELETED,
  CLEAR_ADDED,
  FARMER_PAGE_START,
  FARMER_PAGE_SUCCESS,
  FARMER_PAGE_FAILURE,
  RETAILER_PAGE_START,
  RETAILER_PAGE_SUCCESS,
  RETAILER_PAGE_FAILURE
} from "../actions";

const initialState = {
  deleteStart: false,
  addStart: false,
  searchStart: false,
  farmerListData: [],
  retailerListData: [],
  error: "",
  client: null,
  previousSearch: null,
  updatingFarmer: false,
  updateClientSuccess: false,
  updateClientFailure: false,
  clientDeleted: false,
  clientAdded: false,
  farmerHeaders: [],
  retailerHeaders: []
};

export default (state = initialState, action) => {
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
    case FARMER_SEARCH_START:
      return {
        ...state,
        searchStart: true,
        farmerSearchSuccess: false,
        error: "",
        farmerListData: [],
        previousSearch: action.payload,
        farmerHeaders: []
      };
    case FARMER_SEARCH_SUCCESS:
      return {
        ...state,
        farmerListData: action.payload,
        searchStart: false,
        farmerSearchSuccess: true,
        error: "",
        farmerHeaders: action.headers,
        farmerPrevPage: "prev" in action.headers ? action.headers.prev : false,
        farmerNextPage: "next" in action.headers ? action.headers.next : false
      };
    case FARMER_SEARCH_FAILURE:
      return {
        ...state,
        farmerListData: null,
        farmerSearchSuccess: false,
        searchStart: false,
        error: action.payload,
        farmerHeaders: null,
        farmerPrevPage: null,
        farmerNextPage: null
      };
    case RETAILER_SEARCH_START:
      return {
        ...state,
        searchStart: true,
        retailerSearchSuccess: false,
        error: "",
        retailerListData: [],
        previousSearch: action.payload
      };
    case RETAILER_SEARCH_SUCCESS:
      return {
        ...state,
        retailerListData: action.payload,
        retailerHeaders: action.headers,
        searchStart: false,
        retailerSearchSuccess: true,
        error: "",
        retailerPrevPage:
          "prev" in action.headers ? action.headers.prev : false,
        retailerNextPage: "next" in action.headers ? action.headers.next : false
      };
    case RETAILER_SEARCH_FAILURE:
      return {
        ...state,
        retailerListData: null,
        searchStart: false,
        retailerSearchSuccess: false,
        error: action.payload,
        retailerPrevPage: null,
        retailerNextPage: null,
        retailerHeaders: null
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
        updateClientSuccess: true,
        client: action.payload
      };
    case UPDATE_CLIENT_FAILURE:
      return {
        ...state,
        updatingFarmer: false,
        updateClientFailure: true,
        error: action.payload
      };

    case CLEAR_CLIENT_UPDATED:
      return {
        ...state,
        updateClientSuccess: false,
        updateClientFailure: false
      };

    case FARMER_PAGE_START:
      return {
        ...state,
        fetchingFarmerPage: true
      };

    case FARMER_PAGE_SUCCESS:
      return {
        ...state,
        fetchFarmerPageStart: false,
        fetchFarmerPageSuccess: true,
        farmerListData: action.payload,
        farmerNextPage: action.headers.next,
        farmerHeaders: action.headers,
        farmerPrevPage: "prev" in action.headers ? action.headers.prev : false
      };

    case FARMER_PAGE_FAILURE:
      return {
        ...state,
        fetchFarmerPageStart: false,
        fetchFarmerPageSuccess: true,
        farmerListData: null,
        farmerNextPage: null,
        farmerPrevPage: null,
        error: action.payload,
        farmerHeaders: null
      };

    case RETAILER_PAGE_START:
      return {
        ...state,
        fetchingRetailerPage: true
      };

    case RETAILER_PAGE_SUCCESS:
      return {
        ...state,
        fetchRetailerPageStart: false,
        fetchRetailerPageSuccess: true,
        retailerListData: action.payload,
        retailerNextPage: action.headers.next,
        retailerHeaders: action.headers,
        retailerPrevPage: "prev" in action.headers ? action.headers.prev : false
      };

    case RETAILER_PAGE_FAILURE:
      return {
        ...state,
        fetchRetailerPageStart: false,
        fetchRetailerPageSuccess: true,
        retailerListData: null,
        retailerNextPage: null,
        retailerPrevPage: null,
        retailerHeaders: null,
        error: action.payload
      };

    default:
      return state;
  }
};
