import { combineReducers } from "redux";
import userReducer from "../reducers/UserReducer";
import loginReducer from "../reducers/loginReducer";
import clientTransactions from "../reducers/clientTransactions";
import reducerInstallmentCard from "../reducers/reducerInstallmentCard";
import clientReducer from "../reducers/clientReducer";
import organizationReducer from "../reducers/organizationReducer";
import inventoryReducer from "../reducers/inventoryReducer";

// import getData from '../reducers/getdata';
// import registrationR from '../reducers/registerreducer';
// import getSentiment from '../reducers/sentimentReducer';

export default combineReducers({
  userReducer: userReducer,
  login: loginReducer,
  installments: reducerInstallmentCard,
  clientData: clientReducer,
  organizationData: organizationReducer,
  inventory: inventoryReducer,
  clientTransactions: clientTransactions
});
