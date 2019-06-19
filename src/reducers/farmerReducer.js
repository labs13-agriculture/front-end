import { FARMER_SEARCH_START, FARMER_SEARCH_SUCCESS, FARMER_SEARCH_FAILURE,
        ADD_FARMER_START, ADD_FARMER_SUCCESS, ADD_FARMER_FAILURE,
        DELETE_FARMER_START, DELETE_FARMER_SUCCESS, DELETE_FARMER_FAILURE,
        GET_FARMER_START, GET_FARMER_SUCCESS, GET_FARMER_FAILURE,
        UPDATE_FARMER, UPDATE_FARMER_SUCCESS, UPDATE_FARMER_FAILURE,
        CLEAR_DELETED, CLEAR_ADDED
} from "../actions";

const initialState = {
    deleteStart: false,
    addStart: false,
    searchStart: false,
    listData: [],
    error: '',
    farmer: null,
    previousSearch: null,
    updatingFarmer: false,
    farmerDeleted: false,
    farmerAdded: false
}

export default (state=initialState, action) => {
    console.log(action);
    console.log(action.payload);
    switch (action.type){
        case CLEAR_DELETED:
            return {
                ...state,
                farmerDeleted: false
            }
        case CLEAR_ADDED:
            return {
                ...state,
                farmerAdded: false
            }
        case FARMER_SEARCH_START:
            return{
                ...state,
                searchStart: true,
                error: '',
                listData: [],
                previousSearch: action.payload
            }
        case FARMER_SEARCH_SUCCESS:
            console.log(action.payload)
            return{
                ...state,
                listData: action.payload,
                searchStart: false,
                error: ''
            }
        case FARMER_SEARCH_FAILURE:
            return{
                ...state,
                listData: null,
                searchStart: false,
                error: action.payload
            }
        case ADD_FARMER_START :
            return{
                ...state,
                addStart: true,
                farmerAdded: false,
                error: null
            }
        case ADD_FARMER_SUCCESS:
            return{
                ...state,
                addStart: false,
                farmerAdded: true,
                farmer: action.payload
            }
        case ADD_FARMER_FAILURE:
            return{
                ...state,
                addStart: false,
                error: action.payload
            }
        case DELETE_FARMER_START:
            return{
                ...state,
                deleteStart: true,
                deleteSuccess: false,
                deleteFailure: false
            }
        case DELETE_FARMER_SUCCESS:
            return{
                ...state,
                deleteStart: false,
                farmerDeleted: true,
                listData: []
            }
        case DELETE_FARMER_FAILURE:
            return{
                ...state,
                deleteStart: false,
                deleteFailure: true,
                deleteSuccess: false,
                error: action.payload                
            }
        case GET_FARMER_START:
            return{
                ...state,
                getStart: true,
                farmerAdded: false,
                getSuccess: false,
                getFailure: false
            }
        case GET_FARMER_SUCCESS:
            return{
                ...state,
                getStart: false,
                getFailure: false,
                getSuccess: true,
                farmer:action.payload
            }
        case GET_FARMER_FAILURE:
            return{
                ...state,
                getStart: false,
                getFailure: true,
                getSuccess: false,
                error: action.payload                
            }
        case UPDATE_FARMER :
            return{
                ...state,
                updatingFarmer: true,
                error: null
            }
        case UPDATE_FARMER_SUCCESS:
            return{
                ...state,
                updatingFarmer: false,
                farmer: action.payload
            }
        case UPDATE_FARMER_FAILURE:
            return{
                ...state,
                updatingFarmer: false,
                error: action.payload
            }
        default:
            return state;
    }
}