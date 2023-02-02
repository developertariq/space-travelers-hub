import { combineReducers, configureStore } from '@reduxjs/toolkit';
import roketsSlice from './Rockets/roketsSlice';
import missionsSlice from './Missions/missionsSlice';

const reducer = combineReducers({
  rockets: roketsSlice,
  missions: missionsSlice.reducer,
});

const store = configureStore({
  reducer,
});

export default store;
