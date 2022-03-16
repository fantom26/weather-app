import { GlobalSvgSelector } from "../../../images/GlobalSvgSelector";
import { useDispatch, useSelector } from "react-redux";
import { useFetching } from "../../../hooks/useFetching";
import { useEffect } from "react";
import { fetchCurrentWeatherThunk } from "../../../store/reducers/WeatherReducer/Weather.thunks";

export const ThisDay = () => {
  const dispatch = useDispatch();
  const currentWeather = useSelector(state => state.weather);

  const [fetchWheather, isWheatherLoading, wheatherError] = useFetching(async () => {
    dispatch(fetchCurrentWeatherThunk('Kiev'));
  })

  useEffect(() => {
    fetchWheather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="thisDay">
      <div className="thisDay__top">
        <div className="thisDay__inner">
          <div className="thisDay__value">
            {Math.floor(currentWeather.weather.main.temp - 273.1)}
          </div>
          <div className="thisDay__day">
            Сегодня
          </div>
        </div>
        <div className="thisDay__img">
          <GlobalSvgSelector id="sun"/>
        </div>
      </div>
      <div className="thisDay__time">Время: 21:54</div>
      <div className="thisDay__town">Город: {currentWeather.city}</div>
    </div>
  );
};