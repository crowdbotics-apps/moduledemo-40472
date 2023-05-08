import axios from "axios"
const mixpanel = axios.create({
  baseURL: "https://api.mixpanel.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function mixpanel_post_engageprofileset_create(payload) {
  return mixpanel.post(`/engage#profile-set`, payload.data)
}
function mixpanel_post_engageprofileunset_create(payload) {
  return mixpanel.post(`/engage#profile-unset`, payload.data)
}
export const apiService = {
  mixpanel_post_engageprofileset_create,
  mixpanel_post_engageprofileunset_create
}
