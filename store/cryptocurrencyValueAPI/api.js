import axios from "axios"
import { CRYPTOCURRENCY_VALUE_COMPARE_API_TOKEN } from "react-native-dotenv"
const cryptocurrencyValueAPI = axios.create({
  baseURL: "https://min-api.cryptocompare.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${CRYPTOCURRENCY_VALUE_COMPARE_API_TOKEN}`
  }
})
function cryptocurrencyvalueapi_get_data_price_list(payload) {
  return cryptocurrencyValueAPI.get(`/data/price`, {
    params: { fsym: payload.fsym, tsyms: payload.tsyms }
  })
}
export const apiService = { cryptocurrencyvalueapi_get_data_price_list }
