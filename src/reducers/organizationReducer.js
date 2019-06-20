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
  ORGANIZATION_SEARCH_START,
  ORGANIZATION_SEARCH_SUCCESS,
  ORGANIZATION_SEARCH_FAILURE,
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
  gettingOrganization: false,
  gettingAllOrganizations: false,
  updatingOrganization: false,
  deletingOrganization: false,
  organizationDeleted: false,
  organizationAdded: false,
  error: null
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
        gettingAllOrganizations: true,
        error: null
      };
    case GET_ALL_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        gettingAllOrganizations: false,
        searchSuccess: true,
        listData: action.payload
      };
    case GET_ALL_ORGANIZATIONS_FAILURE:
      return {
        ...state,
        gettingAllOrganizations: false,
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
        listData: action.payload
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
        addFailure: false
      };
    case ADD_ORGANIZATION_FAILURE:
      return {
        ...state,
        addStart: false,
        addSuccess: false,
        addFailure: true,
        error: action.payload
      };
    default:
      return state;
  }
};
