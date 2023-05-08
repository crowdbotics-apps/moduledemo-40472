import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const typeformapi_get_forms_list = createAsyncThunk(
  "typeformapi_response_get_RetrieveForms/typeformapi_get_forms_list",
  async payload => {
    const response = await apiService.typeformapi_get_forms_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const typeformapi_response_get_RetrieveFormsSlice = createSlice({
  name: "typeformapi_response_get_RetrieveForms",
  initialState,
  reducers: {},
  extraReducers: {
    [typeformapi_get_forms_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [typeformapi_get_forms_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [typeformapi_get_forms_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  typeformapi_get_forms_list,
  slice: typeformapi_response_get_RetrieveFormsSlice
}
