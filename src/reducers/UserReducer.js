import { USER_SEARCH_START, USER_SEARCH_SUCCESS, USER_SEARCH_FAILURE,
         DELETE_SYSTEM_USER_START,DELETE_SYSTEM_USER_SUCCESS,DELETE_SYSTEM_USER_FAILURE,
         UPDATE_SYSTEM_USER_START,UPDATE_SYSTEM_USER_SUCCESS,UPDATE_SYSTEM_USER_FAILURE,
         ADD_SYSTEM_USER_START,ADD_SYSTEM_USER_SUCCESS,ADD_SYSTEM_USER_FAILURE
        } from '../actions';


const initialState = {
    addSystemUserStart:false,
    addSystemUserSuccess:false,
    addSystemUserFailure:false,
    updateSystemUserStart:false,
    updateSystemUserSuccess:false,
    updateystemUserFailure:false,
    deleteSystemUserStart:false,
    deleteSystemUserSuccess:false,
    deleteSystemUserFailure:false,
    userSearchStart:false,
    userSearchSuccess:false,
    userSearchFailure:false,
    data:[],
    error:''
    

}

export default (state=initialState,action) => {
    switch(action.type){
        case USER_SEARCH_START:
        return{
            ...state,
            userSearchStart:true,
            data:[],
        }

        case USER_SEARCH_SUCCESS:
        return{
            ...state,
            data:action.payload,
            userSearchSuccess:true,
            userSearchFailure:false,
            userSearchStart:false,
            
        }

        case USER_SEARCH_FAILURE:
        return{
            ...state,
            userSearchSuccess:false,
            userSearchFailure:true,
            userSearchStart:false,
            error:action.payload
        }
        case DELETE_SYSTEM_USER_START:
        return{
            ...state,
            deleteSystemUserStart:true
        }

        case DELETE_SYSTEM_USER_SUCCESS:
        return{
            ...state,
            
            deleteSystemUserStart:false,
            deleteSystemUserSuccess:true,
            deleteSystemUserFailure:false,
            
            
        }

        case DELETE_SYSTEM_USER_FAILURE:
        return{
            ...state,
            deleteSystemUserStart:false,
            deleteSystemUserFailure:true,
            deleteSystemUserSuccess:false,
            error:action.payload,
           
        }
        case UPDATE_SYSTEM_USER_START:
        return{
            ...state,
            updateSystemUserStart:true
        }

        case UPDATE_SYSTEM_USER_SUCCESS:
        return{
            ...state,
            data:[action.payload],
            updateSystemUserStart:false,
           updateSystemUserSuccess:true,
            updateSystemUserFailure:false
            
        }

        case UPDATE_SYSTEM_USER_FAILURE:
        return{
            ...state,
            updateSystemUserStart:false,
            updateSystemUserFailure:true,
            updateSystemUserSuccess:false,
            error:action.payload,
           
        }
        case ADD_SYSTEM_USER_START:
        return{
            ...state,
            addSystemUserStart:true
        }

        case ADD_SYSTEM_USER_SUCCESS:
        return{
            ...state,
            data:[action.payload],
            addSystemUserStart:false,
            addSystemUserSuccess:true,
            addSystemUserFailure:false
            
        }

        case ADD_SYSTEM_USER_FAILURE:
        return{
            ...state,
            addSystemUserStart:false,
            addSystemUserFailure:true,
            addSystemUserSuccess:false,
            error:action.payload,
           
        }
        default:

            return state;
        
        
    }


}

