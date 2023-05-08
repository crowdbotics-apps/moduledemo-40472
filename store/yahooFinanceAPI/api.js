import axios from "axios"
import { YAHOO_FINANCE_API_SUPPORT_TOKEN } from "react-native-dotenv"
const yahooFinanceAPI = axios.create({
  baseURL: "https://apidojo-yahoo-finance-v1.p.rapidapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${YAHOO_FINANCE_API_SUPPORT_TOKEN}`
  }
})
function yahoofinanceapi_get_stock_v2_getanalysis_read(payload) {
  return yahooFinanceAPI.get(`/stock/v2/get-analysis`, {
    params: { symbol: payload.symbol, region: payload.region }
  })
}
function yahoofinanceapi_get_market_v2_getquotesm_list(payload) {
  return yahooFinanceAPI.get(
    `/market/v2/get-quotesm                                                                                                                                                                                                                                                                                                                                                                                                                                `,
    { params: { region: payload.region, symbols: payload.symbols } }
  )
}
export const apiService = {
  yahoofinanceapi_get_stock_v2_getanalysis_read,
  yahoofinanceapi_get_market_v2_getquotesm_list
}
