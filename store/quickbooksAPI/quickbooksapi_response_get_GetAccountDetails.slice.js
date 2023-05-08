import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const quickbooksapi_get_v3_company_4620816365297380250_account_read = createAsyncThunk(
  "quickbooksapi_response_get_GetAccountDetails/quickbooksapi_get_v3_company_4620816365297380250_account_read",
  async payload => {
    const response = await apiService.quickbooksapi_get_v3_company_4620816365297380250_account_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const quickbooksapi_response_get_GetAccountDetailsSlice = createSlice({
  name: "quickbooksapi_response_get_GetAccountDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [quickbooksapi_get_v3_company_4620816365297380250_account_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [quickbooksapi_get_v3_company_4620816365297380250_account_read.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [quickbooksapi_get_v3_company_4620816365297380250_account_read.rejected]: (
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
  quickbooksapi_get_v3_company_4620816365297380250_account_read,
  slice: quickbooksapi_response_get_GetAccountDetailsSlice
}
