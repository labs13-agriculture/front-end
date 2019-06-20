import userReducer from "../reducers/UserReducer";
import { combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import retailerReducer from "../reducers/retailerReducer";
import clientTransactions from "../reducers/clientTransactions";
import reducerInstallmentCard from "../reducers/reducerInstallmentCard";
import clientReducer from "../reducers/clientReducer";
import organizationReducer from "../reducers/organizationReducer";
import inventoryReducer from "../reducers/inventoryReducer";
import itemTypeReducer from "./itemTypeReducer.js";
import reducerRetailerTransaction from "./reducerRetailerTransaction";
import branchReducer from './branchReducer';

// import getData from '../reducers/getdata';
// import registrationR from '../reducers/registerreducer';
// import getSentiment from '../reducers/sentimentReducer';

export default combineReducers({
  userReducer: userReducer,
  login: loginReducer,
  installments: reducerInstallmentCard,
  retailerData: retailerReducer,
  clientData: clientReducer,
  organizationData: organizationReducer,
  addTransactionRetailer: reducerRetailerTransaction,
  inventory: inventoryReducer,
  itemTypes: itemTypeReducer,
  clientTransactions: clientTransactions,
  branchData: branchReducer
  // // getData,
  // registrationR,
  // getSentiment
});
