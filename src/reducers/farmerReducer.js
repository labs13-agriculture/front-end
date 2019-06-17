import { FARMER_SEARCH_START, FARMER_SEARCH_SUCCESS, FARMER_SEARCH_FAILURE,
        ADD_FARMER_START, ADD_FARMER_SUCCESS, ADD_FARMER_FAILURE,
        DELETE_FARMER_START, DELETE_FARMER_SUCCESS, DELETE_FARMER_FAILURE 
} from "../actions";

const initialState = {
    deleteStart: false,
    deleteSuccess: false,
    deleteFailure: false,
    addStart: false,
    searchStart: false,
    searchSuccess: false,
    searchFailure: false,
    listData: [],
    error: '',
    farmer: null,
    previousSearch: null,
}

export default (state=initialState, action) => {
    console.log(action);
    console.log(action.payload);
    switch (action.type){
        case FARMER_SEARCH_START:
        return{
            ...state,
            searchStart: true,
            searchSuccess: false,
            searchFailure: false,
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
            searchFailure: false,
            searchSuccess: true,
            error: ''
        }
        case FARMER_SEARCH_FAILURE:
        return{
            ...state,
            listData: null,
            searchStart: false,
            searchSuccess: false,
            searchFailure: true,
            error: action.payload
        }
        case ADD_FARMER_START :
            return{
                ...state,
                addStart: true,
                searchStart: false,
                searchFailure: false,
                searchSuccess: false,
                farmer: null,
                error: null
            }
        case ADD_FARMER_SUCCESS:
            return{
                ...state,
                addStart: false,
                farmer: action.payload
            }
        case ADD_FARMER_FAILURE:
            return{
                ...state,
                addStart: false,
                farmer: null,
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
                deleteFailure: false,
                deleteSuccess: true
            }
        case DELETE_FARMER_FAILURE:
            return{
                ...state,
                deleteStart: false,
                deleteFailure: true,
                deleteSuccess: false,
                error: action.payload                
            }
        default:
            return state;
    }
}