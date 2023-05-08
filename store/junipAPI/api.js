import axios from "axios"
import { JUNIP_API_INTEGRATION_TOKEN } from "react-native-dotenv"
const junipAPI = axios.create({
  baseURL: "https://api.juniphq.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${JUNIP_API_INTEGRATION_TOKEN}`
  }
})
function junipapi_get_stores_list(payload) {
  return junipAPI.get(`/stores`)
}
function junipapi_get_products_id_read(payload) {
  return junipAPI.get(`/products/id`)
}
export const apiService = {
  junipapi_get_stores_list,
  junipapi_get_products_id_read
}
