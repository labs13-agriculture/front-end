import {
    GETTING_ITEMTYPES, GETTING_ITEMTYPES_SUCCESS, GETTING_ITEMTYPES_FAILURE
} from "../actions"

const initialState = {
    itemTypes: [],
    gettingItemTypes: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GETTING_ITEMTYPES:
            return {
                ...state,
                error: null,
                gettingItemType: true
            }
        case GETTING_ITEMTYPES_SUCCESS:
            return {
                ...state,
                error: null,
                gettingItemType: false,
                itemType: action.payload
            }
        case GETTING_ITEMTYPES_FAILURE:
            return {
                ...state,
                error: action.payload,
                gettingItemType: false
            }
        default:
            return state
    }
}