import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const cryptocurrencyvalueapi_get_data_price_list = createAsyncThunk(
  "cryptocurrencyvalueapi_response_get_GetCurrentPriceOfCryptoInAnyCountries/cryptocurrencyvalueapi_get_data_price_list",
  async payload => {
    const response = await apiService.cryptocurrencyvalueapi_get_data_price_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cryptocurrencyvalueapi_response_get_GetCurrentPriceOfCryptoInAnyCountriesSlice = createSlice(
  {
    name:
      "cryptocurrencyvalueapi_response_get_GetCurrentPriceOfCryptoInAnyCountries",
    initialState,
    reducers: {},
    extraReducers: {
      [cryptocurrencyvalueapi_get_data_price_list.pending]: (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [cryptocurrencyvalueapi_get_data_price_list.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      },
      [cryptocurrencyvalueapi_get_data_price_list.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      }
    }
  }
)
export default {
  cryptocurrencyvalueapi_get_data_price_list,
  slice: cryptocurrencyvalueapi_response_get_GetCurrentPriceOfCryptoInAnyCountriesSlice
}
