import axios from "axios"
import { TYPEFORM_INTEGRATION_TOKEN } from "react-native-dotenv"
const typeformAPI = axios.create({
  baseURL: "https://api.typeform.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${TYPEFORM_INTEGRATION_TOKEN}`
  }
})
function typeformapi_get_forms_list(payload) {
  return typeformAPI.get(`/forms`)
}
function typeformapi_get_themes_read(payload) {
  return typeformAPI.get(`/themes`)
}
export const apiService = {
  typeformapi_get_forms_list,
  typeformapi_get_themes_read
}
