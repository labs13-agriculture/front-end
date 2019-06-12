import { combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import reducerProductStatsVue from "../reducers/reducerProductStatsVue";
import reducerFarmerCardPreviews from "../reducers/reducerFarmerCardPreviews";
import retailerSearchReducer from "../reducers/retailerSearchReducer";
import reducerTransactionCard from "../reducers/reducerTransactionCard";
import reducerInstallmentCard from "../reducers/reducerInstallmentCard";
import reducerYieldCard from "../reducers/reducerYieldCard";
// import getData from '../reducers/getdata';
// import registrationR from '../reducers/registerreducer';
// import getSentiment from '../reducers/sentimentReducer';

export default combineReducers({
  login: loginReducer,
  prodStatData: reducerProductStatsVue,
  farmerCardData: reducerFarmerCardPreviews,
  transactionCardData: reducerTransactionCard,
  installmentCardData: reducerInstallmentCard,
  yieldCardData: reducerYieldCard,
  retailerSearchData: retailerSearchReducer
  // // getData,
  // registrationR,
  // getSentiment
});
