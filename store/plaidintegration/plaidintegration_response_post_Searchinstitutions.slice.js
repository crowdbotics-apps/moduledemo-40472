import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const plaidintegration_post_institutions_search_create = createAsyncThunk(
  "plaidintegration_response_post_Searchinstitutions/plaidintegration_post_institutions_search_create",
  async payload => {
    const response = await apiService.plaidintegration_post_institutions_search_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const plaidintegration_response_post_SearchinstitutionsSlice = createSlice({
  name: "plaidintegration_response_post_Searchinstitutions",
  initialState,
  reducers: {},
  extraReducers: {
    [plaidintegration_post_institutions_search_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [plaidintegration_post_institutions_search_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [plaidintegration_post_institutions_search_create.rejected]: (
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
  plaidintegration_post_institutions_search_create,
  slice: plaidintegration_response_post_SearchinstitutionsSlice
}
