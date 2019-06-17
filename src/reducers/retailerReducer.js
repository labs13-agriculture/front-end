import { 
    RETAILER_SEARCH_START, RETAILER_SEARCH_SUCCESS, RETAILER_SEARCH_FAILURE,
    ADD_RETAILER_START, ADD_RETAILER_SUCCESS, ADD_RETAILER_FAILURE
} from "../actions"

const initialState = {
    addStart: false,
    retailerList: [],
    searchStart: false,
    searchSuccess: false,
    searchFailure: false,
    error: '',
    retailer: null
}

export default (state=initialState, action) => {
    switch (action.type){
        case RETAILER_SEARCH_START:
        return{
            ...state,
            searchStart: true,
            searchSuccess: false,
            searchFailure: false,
            error: '',
            retailerList: null
        }
        case RETAILER_SEARCH_SUCCESS:
        return{
            ...state,
            data: action.payload,
            searchStart: false,
            searchFailure: false,
            searchSuccess: true,
            retailerList: ''
        }
        case RETAILER_SEARCH_FAILURE:
        return{
            ...state,
            data: null,
            searchStart: false,
            searchSuccess: false,
            searchFailure: true,
            retailerList: action.payload
        }
        case ADD_RETAILER_START:
            return{
                ...state,
                retailer: null,
                addStart: true,
                error: null
            }
        case ADD_RETAILER_SUCCESS:
            return{
                ...state,
                retailer: action.payload,
                addStart: false,
                error: null
            }
        case ADD_RETAILER_FAILURE:
            return{
                ...state,
                retailer: null,
                addStart: false,
                error: action.payload
            }
        default:
            return state;
    }
}