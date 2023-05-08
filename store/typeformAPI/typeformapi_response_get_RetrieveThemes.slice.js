import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const typeformapi_get_themes_read = createAsyncThunk(
  "typeformapi_response_get_RetrieveThemes/typeformapi_get_themes_read",
  async payload => {
    const response = await apiService.typeformapi_get_themes_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const typeformapi_response_get_RetrieveThemesSlice = createSlice({
  name: "typeformapi_response_get_RetrieveThemes",
  initialState,
  reducers: {},
  extraReducers: {
    [typeformapi_get_themes_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [typeformapi_get_themes_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [typeformapi_get_themes_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  typeformapi_get_themes_read,
  slice: typeformapi_response_get_RetrieveThemesSlice
}
