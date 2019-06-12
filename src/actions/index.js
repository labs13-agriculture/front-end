import { fromEventPattern } from "rxjs";

export {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  initiateLogin
} from "./login";
export {
  PROD_STAT_START,
  PROD_STAT_SUCCESS,
  PROD_STAT_FAILURE,
  getProductStatData
} from "./dataProductStatsVue";
export {
  DATA_FARMER_CARD_START,
  DATA_FARMER_CARD_SUCCESS,
  DATA_FARMER_CARD_FAILURE,
  getFarmerCardData
} from "./dataFarmerCardPreviews";
export {
  DATA_TRANSACTION_CARD_START,
  DATA_TRANSACTION_CARD_SUCCESS,
  DATA_TRANSACTION_CARD_FAILURE,
  getTransactionCardData
} from "./dataTransactionCard";

export {
  DATA_INSTALLMENT_CARD_START,
  DATA_INSTALLMENT_CARD_SUCCESS,
  DATA_INSTALLMENT_CARD_FAILURE,
  getInstallmentCardData
} from "./dataInstallmentCard";
