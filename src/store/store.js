import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherReducer from "./reducers/WeatherReducer/Weather.reducer";

const rootReducer = combineReducers({
  weather: currentWeatherReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefautlMiddleware =>
    getDefautlMiddleware(
      {
        serializableCheck: false,
      }),
});