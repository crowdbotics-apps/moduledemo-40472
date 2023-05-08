import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const clickupintegration_post_team_team_id_space_create = createAsyncThunk(
  "clickupintegration_response_post_CreateSpaceInWorkspaces/clickupintegration_post_team_team_id_space_create",
  async payload => {
    const response = await apiService.clickupintegration_post_team_team_id_space_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const clickupintegration_response_post_CreateSpaceInWorkspacesSlice = createSlice(
  {
    name: "clickupintegration_response_post_CreateSpaceInWorkspaces",
    initialState,
    reducers: {},
    extraReducers: {
      [clickupintegration_post_team_team_id_space_create.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [clickupintegration_post_team_team_id_space_create.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      },
      [clickupintegration_post_team_team_id_space_create.rejected]: (
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
  clickupintegration_post_team_team_id_space_create,
  slice: clickupintegration_response_post_CreateSpaceInWorkspacesSlice
}
