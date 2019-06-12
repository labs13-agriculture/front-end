import { combineReducers } from 'redux';
import loginReducer from '../reducers/loginReducer';
import reducerProductStatsVue from '../reducers/reducerProductStatsVue';
import reducerFarmerCardPreviews from '../reducers/reducerFarmerCardPreviews';
import retailerSearchReducer from '../reducers/retailerSearchReducer';
import farmerSearchReducer from '../reducers/farmerSearchReducer';
import organizationSearchReducer from '../reducers/organizationSearchReducer';

// import getData from '../reducers/getdata';
// import registrationR from '../reducers/registerreducer';
// import getSentiment from '../reducers/sentimentReducer';

export default combineReducers({
  login:loginReducer,
  prodStatData:reducerProductStatsVue,
  farmerCardData:reducerFarmerCardPreviews,
  retailerSearchData: retailerSearchReducer,
  farmerSearchData: farmerSearchReducer,
  organizationSearchData: organizationSearchReducer
  // // getData,
  // registrationR,
  // getSentiment

});