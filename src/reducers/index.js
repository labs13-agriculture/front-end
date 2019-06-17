import userReducer from "../reducers/UserReducer";
import reducerNewSystemUser from "../reducers/reducerNewSystemUser";
import { combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import reducerProductStatsVue from "../reducers/reducerProductStatsVue";
import retailerSearchReducer from "../reducers/retailerSearchReducer";
import reducerTransactionCard from "../reducers/reducerTransactionCard";
import reducerInstallmentCard from "../reducers/reducerInstallmentCard";
import reducerYieldCard from "../reducers/reducerYieldCard";
import reducerInventoryCard from "../reducers/reducerInventoryCard";
import farmerReducer from "../reducers/farmerReducer";
import organizationSearchReducer from "../reducers/organizationSearchReducer";
import inventoryReducer from "../reducers/inventoryReducer";
import itemTypeReducer from "./itemTypeReducer.js";

// import getData from '../reducers/getdata';
// import registrationR from '../reducers/registerreducer';
// import getSentiment from '../reducers/sentimentReducer';

export default combineReducers({
  userReducer: userReducer,
  addSystemUserReducer: reducerNewSystemUser,
  login: loginReducer,
  prodStatData: reducerProductStatsVue,
  transactionCardData: reducerTransactionCard,
  installmentCardData: reducerInstallmentCard,
  inventoryCardData: reducerInventoryCard,
  yieldCardData: reducerYieldCard,
  retailerSearchData: retailerSearchReducer,
  farmerData: farmerReducer,
  organizationSearchData: organizationSearchReducer,
  inventory: inventoryReducer,
  itemTypes: itemTypeReducer
  // // getData,
  // registrationR,
  // getSentiment
});
