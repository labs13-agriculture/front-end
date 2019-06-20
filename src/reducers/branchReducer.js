import {
    GET_BRANCHES_START,
    GET_BRANCHES_SUCCESS,
    GET_BRANCHES_FAILURE,
    getBranches,
    ADD_BRANCH_START,
    ADD_BRANCH_SUCCESS,
    ADD_BRANCH_FAILURE,
    addBranch,
    UPDATE_BRANCH_START,
    UPDATE_BRANCH_SUCCESS,
    UPDATE_BRANCH_FAILURE,
    updateBranch,
    DELETE_BRANCH_START,
    DELETE_BRANCH_SUCCESS,
    DELETE_BRANCH_FAILURE,
    deleteBranch
} from '../actions';

const initialState={
    branchData: [],
    getBranchStart: false,
    AddBranchStart: false,
    updateBranchStart: false,
    deleteBranchStart: false,
    error: ""
}

export default(state=initialState, action) =>{
    switch(action.type){
        case GET_BRANCHES_START:
            return{
                ...state,
                getBranchStart: true
                error: ""
            }
        case GET_BRANCHES_SUCCESS:
            return{
                ...state,
                branchData: action.payload,
                getBranchStart: false,
                error: ""
            }
        case GET_BRANCHES_FAILURE:
            return{
                ...state,
                branchData: [],
                getBranchStart: false,
                error: action.payload
            }
        case ADD_BRANCH_START:
            return{
                ...state,
                addBranchStart: true,
                error: ""
            }
        case ADD_BRANCH_SUCCESS:
            return{
                ...state,
                branchData: action.payload,
                addBranchStart: false,
                error: ""
            }
        case ADD_BRANCH_FAILURE:
            return{
                ...state,
                branchData: [],
                addBranchStart: false,
                error: action.payload
            }
        case UPDATE_BRANCH_START:
            return{
                ...state,
                updateBranchStart: true;
                error: "",
            }
        case UPDATE_BRANCH_SUCCESS:
            return{
                ...state,
                branchData: action.payload,
                updateBranchStart: false,
                error: ""
            }
        case UPDATE_BRANCH_FAILURE:
            return{
                ...state,
                branchData: [],
                updateBranchStart: false,
                error: action.payload
            }
        case DELETE_BRANCH_START:
            return{
                ...state,
                deleteBranchStart: true,
                error: "",
            }
        case DELETE_BRANCH_SUCCESS:
            return{
                ...state,
                branchData: action.payload,
                deleteBranchStart: false,
                error: ""
            }
        case DELETE_BRANCH_FAILURE:
            return{
                ...state,
                branchData: [],
                deleteBranchStart: false,
                error: action.payload
            }
        default:
            return state;
    }
}