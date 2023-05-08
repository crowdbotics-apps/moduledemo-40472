import axios from "axios"
import { QUICKBOOKS_API_INTEGRATION_TOKEN } from "react-native-dotenv"
const quickbooksAPI = axios.create({
  baseURL: "https://sandbox-quickbooks.api.intuit.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${QUICKBOOKS_API_INTEGRATION_TOKEN}`
  }
})
function quickbooksapi_get_v3_company_4620816365297380250_account_read(
  payload
) {
  return quickbooksAPI.get(`/v3/company/4620816365297380250/account`, {
    params: { account_id: payload.account_id }
  })
}
function quickbooksapi_post_v3_company_4620816365297380250_account_create(
  payload
) {
  return quickbooksAPI.post(
    `/v3/company/4620816365297380250/account`,
    payload.data,
    { params: { minorversion: payload.minorversion } }
  )
}
export const apiService = {
  quickbooksapi_get_v3_company_4620816365297380250_account_read,
  quickbooksapi_post_v3_company_4620816365297380250_account_create
}
