import axios from "axios"
const plaidintegration = axios.create({
  baseURL: "https://sandbox.plaid.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function plaidintegration_post_institutions_get_create(payload) {
  return plaidintegration.post(`/institutions/get`, payload.data)
}
function plaidintegration_post_institutions_search_create(payload) {
  return plaidintegration.post(`/institutions/search`, payload.data)
}
export const apiService = {
  plaidintegration_post_institutions_get_create,
  plaidintegration_post_institutions_search_create
}
