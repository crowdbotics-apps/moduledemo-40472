import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const junipapi_get_products_id_read = createAsyncThunk(
  "junipapi_response_get_GetProducts/junipapi_get_products_id_read",
  async payload => {
    const response = await apiService.junipapi_get_products_id_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const junipapi_response_get_GetProductsSlice = createSlice({
  name: "junipapi_response_get_GetProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [junipapi_get_products_id_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [junipapi_get_products_id_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [junipapi_get_products_id_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  junipapi_get_products_id_read,
  slice: junipapi_response_get_GetProductsSlice
}
