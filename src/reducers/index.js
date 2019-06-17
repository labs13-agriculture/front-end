import userReducer from "../reducers/UserReducer";
import reducerNewSystemUser from "../reducers/reducerNewSystemUser";
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
  userReducer: userReducer,
  addSystemUserReducer: reducerNewSystemUser,
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
