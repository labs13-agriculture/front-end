import { combineReducers } from 'redux';
import loginReducer from '../reducers/loginReducer';
import reducerProductStatsVue from '../reducers/reducerProductStatsVue';
import reducerFarmerCardPreviews from '../reducers/reducerFarmerCardPreviews';
import retailerSearchReducer from '../reducers/retailerSearchReducer';
import searchUserReducer from '../reducers/searchUserReducer';
import reducerNewSystemUser from "../reducers/reducerNewSystemUser";
import updateSystemUser from "../reducers/reducerUpdateSystemUser";
import deleteSystemUser from "../reducers/deleteSystemUser";
// import getData from '../reducers/getdata';
// import registrationR from '../reducers/registerreducer';
// import getSentiment from '../reducers/sentimentReducer';

export default combineReducers({
  login:loginReducer,
  prodStatData:reducerProductStatsVue,
  farmerCardData:reducerFarmerCardPreviews,
  retailerSearchData: retailerSearchReducer,
  searchUserReducer: searchUserReducer,
  addSystemUserReducer: reducerNewSystemUser,
  updateSystemUser:updateSystemUser,
  deleteSystemUser:deleteSystemUser
  // // getData,
  // registrationR,
  // getSentiment

});