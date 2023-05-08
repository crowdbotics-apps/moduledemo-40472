import axios from "axios"
import { CLICKUP_API_INTEGRATION_TOKEN } from "react-native-dotenv"
const clickupIntegration = axios.create({
  baseURL: "https://api.clickup.com/api/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${CLICKUP_API_INTEGRATION_TOKEN}`
  }
})
function clickupintegration_get_team_read(payload) {
  return clickupIntegration.get(`/team`)
}
function clickupintegration_get_team_team_id_space_read(payload) {
  return clickupIntegration.get(`/team/team_id/space`)
}
function clickupintegration_post_team_team_id_space_create(payload) {
  return clickupIntegration.post(`/team/team_id/space`, payload.data)
}
export const apiService = {
  clickupintegration_get_team_read,
  clickupintegration_get_team_team_id_space_read,
  clickupintegration_post_team_team_id_space_create
}
