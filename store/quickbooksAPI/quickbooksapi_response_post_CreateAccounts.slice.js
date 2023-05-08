import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const quickbooksapi_post_v3_company_4620816365297380250_account_create = createAsyncThunk(
  "quickbooksapi_response_post_CreateAccounts/quickbooksapi_post_v3_company_4620816365297380250_account_create",
  async payload => {
    const response = await apiService.quickbooksapi_post_v3_company_4620816365297380250_account_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const quickbooksapi_response_post_CreateAccountsSlice = createSlice({
  name: "quickbooksapi_response_post_CreateAccounts",
  initialState,
  reducers: {},
  extraReducers: {
    [quickbooksapi_post_v3_company_4620816365297380250_account_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [quickbooksapi_post_v3_company_4620816365297380250_account_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [quickbooksapi_post_v3_company_4620816365297380250_account_create.rejected]: (
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
  quickbooksapi_post_v3_company_4620816365297380250_account_create,
  slice: quickbooksapi_response_post_CreateAccountsSlice
}
