import { createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherService } from "../../../API/WeatherService"

export const fetchCurrentWeatherThunk = createAsyncThunk(
  'weather/fetchCurrentWeatherThunk',
  async (city) => {
    const response = await WeatherService.getCurrentWeather(city);
    return response.data;
  }
)