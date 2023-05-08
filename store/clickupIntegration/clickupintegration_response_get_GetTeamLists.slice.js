import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const clickupintegration_get_team_read = createAsyncThunk(
  "clickupintegration_response_get_GetTeamLists/clickupintegration_get_team_read",
  async payload => {
    const response = await apiService.clickupintegration_get_team_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const clickupintegration_response_get_GetTeamListsSlice = createSlice({
  name: "clickupintegration_response_get_GetTeamLists",
  initialState,
  reducers: {},
  extraReducers: {
    [clickupintegration_get_team_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [clickupintegration_get_team_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [clickupintegration_get_team_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  clickupintegration_get_team_read,
  slice: clickupintegration_response_get_GetTeamListsSlice
}
