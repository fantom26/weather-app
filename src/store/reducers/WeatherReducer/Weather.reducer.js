import { createSlice } from "@reduxjs/toolkit";

// Thunks
import { fetchCurrentWeatherThunk } from "./Weather.thunks";

const initialState = {
  weather: {
    main: {
      temp: 0,
    },
  },
  city: '',
  isLoading: false,
};

export const currentWeatherReducer = createSlice({
  name: "current_weather",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrentWeatherThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCurrentWeatherThunk.fulfilled]: (state, action) => {
      // debugger;
      state.status = 'resolved';
      state.isLoading = false;
      state.weather.main.temp = action.payload.main.temp;
      state.city = action.payload.name;
    },
    [fetchCurrentWeatherThunk.reject]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default currentWeatherReducer.reducer;