import { AUTH_TOKEN } from '../config'
import { 
    
} from '../actions/loginActions.js'

const initialState = {
    token: window.localStorage.getItem(AUTH_TOKEN) || null,
}

export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}
