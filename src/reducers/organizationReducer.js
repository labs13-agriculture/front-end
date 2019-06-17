import { 
    GET_ORGANIZATION, GET_ORGANIZATION_SUCCESS, GET_ORGANIZATION_FAILURE,
    ADD_ORGANIZATION_START, ADD_ORGANIZATION_SUCCESS, ADD_ORGANIZATION_FAILURE,
    ORGANIZATION_SEARCH_START, ORGANIZATION_SEARCH_SUCCESS, ORGANIZATION_SEARCH_FAILURE, ADD_ORGANIZATION_START
} from '../actions'

const initialState = {
    organization: null,
    organizationList: [],
    searchStart: false,
    searchSuccess: false,
    searchFailure: false,
    addStart: false,
    addSuccess: false,
    addFailure: false,
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
        case ORGANIZATION_SEARCH_START:
            return{
                ...state,
                searchStart: true,
                searchFailure: false,
                searchSuccess: false,
                error: '',
                organizationList: null
            }
        case ORGANIZATION_SEARCH_SUCCESS:
            return{
                ...state,
                searchStart: false,
                searchSuccess: true,
                searchFailure: false,
                error: '',
                organizationList: action.payload
            }
        case ORGANIZATION_SEARCH_FAILURE:
            return{
                ...state,
                searchStart: false,
                searchSuccess: false,
                searchFailure: true,
                organizationList: []
            }
        case ADD_ORGANIZATION_START:
            return{
                ...state,
                addStart: true,
                addFailure: false,
                addSuccess: false,
                error: ''
            }
        case ADD_ORGANIZATION_SUCCESS:
            return{
                ...state,
                addStart: false,
                addSuccess: true,
                addFailure: false
            }
        case ADD_ORGANIZATION_FAILURE:
            return{
                ...state,
                addStart: false,
                addSuccess: false,
                addFailure: true,
                error: action.payload
            }
        default:
            return state
    }
}