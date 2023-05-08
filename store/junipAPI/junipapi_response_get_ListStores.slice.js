import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const junipapi_get_stores_list = createAsyncThunk(
  "junipapi_response_get_ListStores/junipapi_get_stores_list",
  async payload => {
    const response = await apiService.junipapi_get_stores_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const junipapi_response_get_ListStoresSlice = createSlice({
  name: "junipapi_response_get_ListStores",
  initialState,
  reducers: {},
  extraReducers: {
    [junipapi_get_stores_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [junipapi_get_stores_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [junipapi_get_stores_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  junipapi_get_stores_list,
  slice: junipapi_response_get_ListStoresSlice
}
