import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const yahoofinanceapi_get_market_v2_getquotesm_list = createAsyncThunk(
  "yahoofinanceapi_response_get_GetMarketQuotes/yahoofinanceapi_get_market_v2_getquotesm_list",
  async payload => {
    const response = await apiService.yahoofinanceapi_get_market_v2_getquotesm_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const yahoofinanceapi_response_get_GetMarketQuotesSlice = createSlice({
  name: "yahoofinanceapi_response_get_GetMarketQuotes",
  initialState,
  reducers: {},
  extraReducers: {
    [yahoofinanceapi_get_market_v2_getquotesm_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [yahoofinanceapi_get_market_v2_getquotesm_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [yahoofinanceapi_get_market_v2_getquotesm_list.rejected]: (
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
  yahoofinanceapi_get_market_v2_getquotesm_list,
  slice: yahoofinanceapi_response_get_GetMarketQuotesSlice
}
