import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const shazamapi_get_artists_getdetailsid567072lenUS_list = createAsyncThunk(
  "shazamapi_response_get_ArtistDetails/shazamapi_get_artists_getdetailsid567072lenUS_list",
  async payload => {
    const response = await apiService.shazamapi_get_artists_getdetailsid567072lenUS_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const shazamapi_response_get_ArtistDetailsSlice = createSlice({
  name: "shazamapi_response_get_ArtistDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [shazamapi_get_artists_getdetailsid567072lenUS_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [shazamapi_get_artists_getdetailsid567072lenUS_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [shazamapi_get_artists_getdetailsid567072lenUS_list.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  shazamapi_get_artists_getdetailsid567072lenUS_list,
  slice: shazamapi_response_get_ArtistDetailsSlice
}
