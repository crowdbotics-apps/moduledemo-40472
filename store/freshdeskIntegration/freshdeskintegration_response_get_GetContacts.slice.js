import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const freshdeskintegration_get_api_v2_contacts_list = createAsyncThunk(
  "freshdeskintegration_response_get_GetContacts/freshdeskintegration_get_api_v2_contacts_list",
  async payload => {
    const response = await apiService.freshdeskintegration_get_api_v2_contacts_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const freshdeskintegration_response_get_GetContactsSlice = createSlice({
  name: "freshdeskintegration_response_get_GetContacts",
  initialState,
  reducers: {},
  extraReducers: {
    [freshdeskintegration_get_api_v2_contacts_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [freshdeskintegration_get_api_v2_contacts_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [freshdeskintegration_get_api_v2_contacts_list.rejected]: (
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
  freshdeskintegration_get_api_v2_contacts_list,
  slice: freshdeskintegration_response_get_GetContactsSlice
}
