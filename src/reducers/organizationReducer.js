import { 
    GET_ORGANIZATION, GET_ORGANIZATION_SUCCESS, GET_ORGANIZATION_FAILURE
} from '../actions'

const initialState = {
    organization: null,
    gettingOrganization: false,
    updatingOrganization: false,
    deletingOrganization: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ORGANIZATION:
            return {
                ...state,
                gettingOrganization: true,
                error: null
            }
        case GET_ORGANIZATION_SUCCESS:
            return {
                ...state,
                gettingOrganization: false,
                organization: action.payload
            }
        case GET_ORGANIZATION_FAILURE:
            return {
                ...state,
                gettingOrganization: false,
                error: action.payload
            }
        default:
            return state
    }
}