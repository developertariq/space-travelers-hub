import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

const FETCH_URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissionData = createAsyncThunk('spacetravelers/missions/FETCH_DATA', async () => {
  const response = await axios.get(FETCH_URL);
  return response.data;
});

const reArrangeMissions = (missions) => {
  const newMissions = [];
  Object.entries(missions).forEach((mission) => {
    newMissions.push({
      id: mission[1].mission_id,
      name: mission[1].mission_name,
      description: mission[1].description,
      reserved: false,
    });
  });
  return newMissions;
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    updateMission(state, action) {
      return {
        ...state,
        missions: state.missions.map((mission) => (mission.id === action.payload
          ? { ...mission, reserved: !mission.reserved }
          : mission)),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissionData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = reArrangeMissions(action.payload);
      })
      .addCase(fetchMissionData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { updateMission } = missionsSlice.actions;
export default missionsSlice;
