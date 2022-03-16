import { api } from "../axios/index";

export class WeatherService {
  static getCurrentWeather(city) {
    return api.get(`weather?q=${city}`);
  }
}