import searchUserReducer from "../reducers/searchUserReducer";
import reducerNewSystemUser from "../reducers/reducerNewSystemUser";
import updateSystemUser from "../reducers/reducerUpdateSystemUser";
import deleteSystemUser from "../reducers/deleteSystemUser";
import { combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import reducerProductStatsVue from "../reducers/reducerProductStatsVue";
import reducerFarmerCardPreviews from "../reducers/reducerFarmerCardPreviews";
import retailerSearchReducer from "../reducers/retailerSearchReducer";
import reducerTransactionCard from "../reducers/reducerTransactionCard";
import reducerInstallmentCard from "../reducers/reducerInstallmentCard";
import reducerYieldCard from "../reducers/reducerYieldCard";
import reducerInventoryCard from "../reducers/reducerInventoryCard";
import farmerSearchReducer from "../reducers/farmerSearchReducer";
import organizationSearchReducer from "../reducers/organizationSearchReducer";
import inventoryReducer from "../reducers/inventoryReducer";
import itemTypeReducer from "./itemTypeReducer.js";

// import getData from '../reducers/getdata';
// import registrationR from '../reducers/registerreducer';
// import getSentiment from '../reducers/sentimentReducer';

export default combineReducers({
  searchUserReducer: searchUserReducer,
  addSystemUserReducer: reducerNewSystemUser,
  updateSystemUser: updateSystemUser,
  deleteSystemUser: deleteSystemUser,
  login: loginReducer,
  prodStatData: reducerProductStatsVue,
  farmerCardData: reducerFarmerCardPreviews,
  transactionCardData: reducerTransactionCard,
  installmentCardData: reducerInstallmentCard,
  inventoryCardData: reducerInventoryCard,
  yieldCardData: reducerYieldCard,
  retailerSearchData: retailerSearchReducer,
  farmerSearchData: farmerSearchReducer,
  organizationSearchData: organizationSearchReducer,
  inventory: inventoryReducer,
  itemTypes: itemTypeReducer
  // // getData,
  // registrationR,
  // getSentiment
});
