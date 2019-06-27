import {
  GET_BRANCHES_START,
  GET_BRANCHES_SUCCESS,
  GET_BRANCHES_FAILURE,
  ADD_BRANCH_START,
  ADD_BRANCH_SUCCESS,
  ADD_BRANCH_FAILURE,
  UPDATE_BRANCH_START,
  UPDATE_BRANCH_SUCCESS,
  UPDATE_BRANCH_FAILURE,
  DELETE_BRANCH_START,
  DELETE_BRANCH_SUCCESS,
  DELETE_BRANCH_FAILURE,
  CLEAR_BRANCH_ADD,
  CLEAR_BRANCH_UPDATE,
  CLEAR_BRANCH_DELETE,
  GET_NEXT_BRANCH_START,
  GET_NEXT_BRANCH_SUCCESS,
  GET_NEXT_BRANCH_FAILURE
} from "../actions";

const initialState = {
  branchData: [],
  getBranchStart: false,
  AddBranchStart: false,
  updateBranchStart: false,
  deleteBranchStart: false,
  updateSuccess: false,
  updateFailure: false,
  addSuccess: false,
  addFailure: false,
  deleteSuccess: false,
  deleteFailure: false,
  nextPage: null,
  prevPage: null,
  currentPage: null,
  totalPages: null,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BRANCHES_START:
      return {
        ...state,
        getBranchStart: true,
        error: ""
      };
    case GET_BRANCHES_SUCCESS:
      return {
        ...state,
        branchData: action.payload,
        getBranchStart: false,
        nextPage: action.payload.headers.next,
        prevPage: action.payload.headers.prev,
        currentPage: action.payload.headers.number,
        totalPages: action.payload.headers.total_pages,
        numResults: action.payload.headers.results,
        error: ""
      };
    case GET_BRANCHES_FAILURE:
      return {
        ...state,
        branchData: [],
        getBranchStart: false,
        error: action.payload
      };
    case ADD_BRANCH_START:
      return {
        ...state,
        addBranchStart: true,
        error: ""
      };
    case ADD_BRANCH_SUCCESS:
      return {
        ...state,
        branchData: action.payload,
        addBranchStart: false,
        addSuccess: true,
        error: ""
      };
    case ADD_BRANCH_FAILURE:
      return {
        ...state,
        branchData: [],
        addBranchStart: false,
        addSuccess: true,
        error: action.payload
      };
    case UPDATE_BRANCH_START:
      return {
        ...state,
        updateBranchStart: true,
        error: ""
      };
    case UPDATE_BRANCH_SUCCESS:
      return {
        ...state,
        branchData: action.payload,
        updateBranchStart: false,
        updateSuccess: true,
        error: ""
      };
    case UPDATE_BRANCH_FAILURE:
      return {
        ...state,
        branchData: [],
        updateBranchStart: false,
        updateFailure: true,
        error: action.payload
      };
    case DELETE_BRANCH_START:
      return {
        ...state,
        deleteBranchStart: true,
        error: ""
      };
    case DELETE_BRANCH_SUCCESS:
      return {
        ...state,
        branchData: action.payload,
        deleteBranchStart: false,
        deleteSuccess: true,
        error: ""
      };
    case DELETE_BRANCH_FAILURE:
      return {
        ...state,
        branchData: [],
        deleteBranchStart: false,
        deleteFailure: true,
        error: action.payload
      };
    case CLEAR_BRANCH_ADD:
      return {
        ...state,
        addSuccess: false,
        addFailure: false
      };
    case CLEAR_BRANCH_UPDATE:
      return {
        ...state,
        updateSuccess: false,
        updateFailure: false
      };
    case CLEAR_BRANCH_DELETE:
      return {
        ...state,
        deleteSuccess: false,
        deleteFailure: false
      };

    case GET_NEXT_BRANCH_START:
      return {
        ...state
      };
    case GET_NEXT_BRANCH_SUCCESS:
      return {
        ...state,
        branchData: action.payload.data,
        nextPage: action.payload.headers.next,
        prevPage: action.payload.headers.prev,
        currentPage: action.payload.headers.number,
        totalPages: action.payload.headers.total_pages,
        numResults: action.payload.headers.results
      };
    case GET_NEXT_BRANCH_FAILURE:
      return {
        ...state,

        error: action.payload
      };

    default:
      return state;
  }
};
