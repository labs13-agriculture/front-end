import { NEED_HELP, GOT_HELP } from "../actions";

const initialState = {
    needsHelp: false
}

export default (state = initialState, action) =>{
    switch(action.type){
        case NEED_HELP:
            return{
                ...state,
                needsHelp:action.payload
            }
        default:
            return state;
    }
}