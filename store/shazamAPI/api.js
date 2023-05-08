import axios from "axios"
import { SHAZAM_API_SUPPORT_TOKEN } from "react-native-dotenv"
const shazamAPI = axios.create({
  baseURL: "https://shazam.p.rapidapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${SHAZAM_API_SUPPORT_TOKEN}`
  }
})
function shazamapi_get_artists_getdetailsid567072lenUS_list(payload) {
  return shazamAPI.get(`/artists/get-details?id=567072&l=en-US`, {
    params: { id: payload.id, l: payload.l }
  })
}
function shazamapi_get_https__shazamprapidapicom_albums_getdetails_list(
  payload
) {
  return shazamAPI.get(`https://shazam.p.rapidapi.com/albums/get-details`, {
    params: { id: payload.id, I: payload.I }
  })
}
export const apiService = {
  shazamapi_get_artists_getdetailsid567072lenUS_list,
  shazamapi_get_https__shazamprapidapicom_albums_getdetails_list
}
