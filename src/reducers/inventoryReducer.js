import {
    GETTING_INVENTORY, GETTING_INVENTORY_SUCCESS, GETTING_INVENTORY_FAILURE,
    ADDING_INVENTORY, ADDING_INVENTORY_SUCCESS, ADDING_INVENTORY_FAILURE,
    UPDATING_INVENTORY, UPDATING_INVENTORY_SUCCESS, UPDATING_INVENTORY_FAILURE,
    DELETING_INVENTORY, DELETING_INVENTORY_SUCCESS, DELETING_INVENTORY_FAILURE

} from "../actions"

const initialState = {
    inventoryList: [],
    gettingInventory: false,
    updatingInventory: false,
    addingInventory: false,
    deletingInventory: false,
    error: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case GETTING_INVENTORY:
            return {
                ...state,
                error: false,
                gettingInventory: true
            }
        case GETTING_INVENTORY_SUCCESS:
            return {
                ...state,
                error: false,
                gettingInventory: false,
                inventoryList: action.payload
            }
        case GETTING_INVENTORY_FAILURE:
            return {
                ...state,
                error: action.payload,
                gettingInventory: false
            }
        case UPDATING_INVENTORY:
            return {
                ...state,
                error: false,
                updatingInventory: true
            }
        case UPDATING_INVENTORY_SUCCESS:
            return {
                ...state,
                error: false,
                updatingInventory: false,
                inventoryList: action.payload
            }
        case UPDATING_INVENTORY_FAILURE:
            return {
                ...state,
                error: action.payload,
                updatingInventory: false
            }
        case ADDING_INVENTORY:
            return {
                ...state,
                error: false,
                addingInventory: true
            }
        case ADDING_INVENTORY_SUCCESS:
            return {
                ...state,
                error: false,
                addingInventory: false,
                inventoryList: action.payload
            }
        case ADDING_INVENTORY_FAILURE:
            return {
                ...state,
                error: action.payload,
                addingInventory: false
            }
        case DELETING_INVENTORY:
            return {
                ...state,
                error: false,
                deletingInventory: true
            }
        case DELETING_INVENTORY_SUCCESS:
            return {
                ...state,
                error: false,
                deletingInventory: false,
                inventoryList: action.payload
            }
        case DELETING_INVENTORY_FAILURE:
            return {
                ...state,
                error: action.payload,
                deletingInventory: false
            }
        default:
            return state
    }
}