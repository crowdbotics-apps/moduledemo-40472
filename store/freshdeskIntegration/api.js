import axios from "axios"
import {
  FRESHDESK__API_INTEGRATION_USERNAME,
  FRESHDESK__API_INTEGRATION_PASSWORD
} from "react-native-dotenv"
const freshdeskIntegration = axios.create({
  baseURL: "https://crowdbotics.freshdesk.com",
  auth: {
    username: FRESHDESK__API_INTEGRATION_USERNAME,
    password: FRESHDESK__API_INTEGRATION_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function freshdeskintegration_get_api_v2_contacts_list(payload) {
  return freshdeskIntegration.get(`/api/v2/contacts`)
}
function freshdeskintegration_post_api_v2_contacts_create(payload) {
  return freshdeskIntegration.post(`/api/v2/contacts`, payload.data)
}
export const apiService = {
  freshdeskintegration_get_api_v2_contacts_list,
  freshdeskintegration_post_api_v2_contacts_create
}
