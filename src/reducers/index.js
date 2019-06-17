import userReducer from "../reducers/UserReducer";
import { combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import retailerReducer from "../reducers/retailerReducer";
import reducerTransactionCard from "../reducers/reducerTransactionCard";
import reducerInstallmentCard from "../reducers/reducerInstallmentCard";
import farmerReducer from "../reducers/farmerReducer";
import organizationSearchReducer from "../reducers/organizationSearchReducer";
import inventoryReducer from "../reducers/inventoryReducer";
import itemTypeReducer from "./itemTypeReducer.js";

// import getData from '../reducers/getdata';
// import registrationR from '../reducers/registerreducer';
// import getSentiment from '../reducers/sentimentReducer';

export default combineReducers({
  userReducer: userReducer,
  login: loginReducer,
  transactionCardData: reducerTransactionCard,
  installmentCardData: reducerInstallmentCard,
  retailerData: retailerReducer,
  farmerData: farmerReducer,
  organizationSearchData: organizationSearchReducer,
  inventory: inventoryReducer,
  itemTypes: itemTypeReducer
  // // getData,
  // registrationR,
  // getSentiment
});
