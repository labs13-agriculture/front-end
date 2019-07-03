import {
  GET_ORGANIZATION,
  GET_ORGANIZATION_SUCCESS,
  GET_ORGANIZATION_FAILURE,
  GET_ALL_ORGANIZATIONS,
  GET_ALL_ORGANIZATIONS_SUCCESS,
  GET_ALL_ORGANIZATIONS_FAILURE,
  ADD_ORGANIZATION_START,
  ADD_ORGANIZATION_SUCCESS,
  ADD_ORGANIZATION_FAILURE,
  DELETE_ORGANIZATION_START,
  DELETE_ORGANIZATION_SUCCESS,
  DELETE_ORGANIZATION_FAILURE,
  UPDATE_ORGANIZATION,
  UPDATE_ORGANIZATION_SUCCESS,
  UPDATE_ORGANIZATION_FAILURE,
  CLEAR_ORGANIZATION_UPDATED,
  ORGANIZATION_SEARCH_START,
  ORGANIZATION_SEARCH_SUCCESS,
  ORGANIZATION_SEARCH_FAILURE,
  GET_NEXT_ORGS_START,
  GET_NEXT_ORGS_FAILURE,
  GET_NEXT_ORGS_SUCCESS,
  CLEAR_ADDED_ORGS,
  CLEAR_DELETED_ORGS
} from "../actions";

const initialState = {
  organization: null,
  listData: [],
  searchStart: false,
  searchSuccess: false,
  searchFailure: false,
  addStart: false,
  addSuccess: false,
  addFailure: false,
  deleteStart: false,
  gettingOrganization: false,
  updatingOrganization: false,
  deletingOrganization: false,
  organizationDeleted: false,
  organizationAdded: false,
  error: null,
  nextPage: null,
  prevPage: null,
  currentPage: null,
  totalPages: null,
  updateOrganizationSuccess: false,
  updateOrganizationFailure: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_DELETED_ORGS:
      return {
        ...state,
        organizationDeleted: false
      };
    case CLEAR_ADDED_ORGS:
      return {
        ...state,
        organizationAdded: false
      };
    case GET_ORGANIZATION:
      return {
        ...state,
        gettingOrganization: true,
        error: null
      };
    case GET_ORGANIZATION_SUCCESS:
      return {
        ...state,
        gettingOrganization: false,
        organization: action.payload
      };
    case GET_ORGANIZATION_FAILURE:
      return {
        ...state,
        gettingOrganization: false,
        error: action.payload
      };
    case GET_ALL_ORGANIZATIONS:
      return {
        ...state,
        searchStart: true,
        error: null,
        listData: []
      };
    case GET_ALL_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        searchStart: false,
        searchSuccess: true,
        listData: action.payload.data,
        nextPage: action.payload.headers.next,
        prevPage: action.payload.headers.prev,
        currentPage: action.payload.headers.number,
        totalPages: action.payload.headers.total_pages,
        numResults: action.payload.headers.results
      };
    case GET_ALL_ORGANIZATIONS_FAILURE:
      return {
        ...state,
        searchStart: false,
        error: action.payload
      };
    case ORGANIZATION_SEARCH_START:
      return {
        ...state,
        searchStart: true,
        searchFailure: false,
        searchSuccess: false,
        error: "",
        listData: []
      };
    case ORGANIZATION_SEARCH_SUCCESS:
      return {
        ...state,
        searchStart: false,
        searchSuccess: true,
        searchFailure: false,
        error: "",
        listData: action.payload.data,
        nextPage: action.payload.headers.next,
        prevPage: action.payload.headers.prev,
        currentPage: action.payload.headers.number,
        totalPages: action.payload.headers.total_pages,
        numResults: action.payload.headers.results
      };
    case ORGANIZATION_SEARCH_FAILURE:
      return {
        ...state,
        searchStart: false,
        searchSuccess: false,
        searchFailure: true,
        listData: null
      };
    case ADD_ORGANIZATION_START:
      return {
        ...state,
        addStart: true,
        addFailure: false,
        addSuccess: false,
        error: ""
      };
    case ADD_ORGANIZATION_SUCCESS:
      return {
        ...state,
        addStart: false,
        addSuccess: true,
        organizationAdded: true,
        addFailure: false,
        organization: action.payload
      };
    case ADD_ORGANIZATION_FAILURE:
      return {
        ...state,
        addStart: false,
        addSuccess: false,
        addFailure: true,
        error: action.payload
      };

    case DELETE_ORGANIZATION_START:
      return {
        ...state,
        deleteStart: true,
        deleteSuccess: false,
        deleteFailure: false
      };
    case DELETE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        deleteStart: false,
        organizationDeleted: true,
        listData: []
      };
    case DELETE_ORGANIZATION_FAILURE:
      return {
        ...state,
        deleteStart: false,
        deleteFailure: true,
        deleteSuccess: false,
        error: action.payload
      };
    case UPDATE_ORGANIZATION:
      return {
        ...state,
        updatingOrganization: true,
        error: null
      };
    case UPDATE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        updatingOrganization: false,
        updateOrganizationSuccess: true,
        organization: action.payload
      };
    case UPDATE_ORGANIZATION_FAILURE:
      return {
        ...state,
        updatingOrganization: false,
        updateOrganizationFailure: true,
        error: action.payload
      };
    case GET_NEXT_ORGS_START:
      return {
        ...state,
        // searchStart: true
        getNextOrgsStart:true,
      };
    case GET_NEXT_ORGS_SUCCESS:
      return {
        ...state,
        searchStart: false,
        getNextOrgsStart:false,
        listData: action.payload.data,
        nextPage: action.payload.headers.next,
        prevPage: action.payload.headers.prev,
        currentPage: action.payload.headers.number,
        totalPages: action.payload.headers.total_pages,
        numResults: action.payload.headers.results
      };
    case GET_NEXT_ORGS_FAILURE:
      return {
        ...state,
        // searchStart: false,
        getNextOrgsStart:false,
        error: action.payload
      };
    case CLEAR_ORGANIZATION_UPDATED:
      return {
        ...state,
        updateOrganizationSuccess: false,
        updateOrganizationFailure: false
      };
    default:
      return state;
  }
};
