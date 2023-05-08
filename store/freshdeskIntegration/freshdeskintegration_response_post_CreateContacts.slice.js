import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const freshdeskintegration_post_api_v2_contacts_create = createAsyncThunk(
  "freshdeskintegration_response_post_CreateContacts/freshdeskintegration_post_api_v2_contacts_create",
  async payload => {
    const response = await apiService.freshdeskintegration_post_api_v2_contacts_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const freshdeskintegration_response_post_CreateContactsSlice = createSlice({
  name: "freshdeskintegration_response_post_CreateContacts",
  initialState,
  reducers: {},
  extraReducers: {
    [freshdeskintegration_post_api_v2_contacts_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [freshdeskintegration_post_api_v2_contacts_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [freshdeskintegration_post_api_v2_contacts_create.rejected]: (
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
  freshdeskintegration_post_api_v2_contacts_create,
  slice: freshdeskintegration_response_post_CreateContactsSlice
}
