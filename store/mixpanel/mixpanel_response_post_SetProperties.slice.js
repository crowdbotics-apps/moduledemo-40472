import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const mixpanel_post_engageprofileset_create = createAsyncThunk(
  "mixpanel_response_post_SetProperties/mixpanel_post_engageprofileset_create",
  async payload => {
    const response = await apiService.mixpanel_post_engageprofileset_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const mixpanel_response_post_SetPropertiesSlice = createSlice({
  name: "mixpanel_response_post_SetProperties",
  initialState,
  reducers: {},
  extraReducers: {
    [mixpanel_post_engageprofileset_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [mixpanel_post_engageprofileset_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [mixpanel_post_engageprofileset_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  mixpanel_post_engageprofileset_create,
  slice: mixpanel_response_post_SetPropertiesSlice
}
