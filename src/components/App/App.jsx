import './App.css';
import Main from '../Main/Main';
import * as Api from './../servises/api.js';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setForecast,
  setWeather,
} from '../../store/features/slice/weatherSlice.js';

export default function App() {
  const dispatch = useDispatch();
  const location = 'Yevpatoriya';
  const days = 1;
  const lang = 'Ru';

  const forecastData = Api.useGetForecastQuery({ location, days, lang });

  const setWeatherCallback = useCallback(() => {
    if (forecastData.isSuccess) {
      dispatch(setWeather(forecastData.data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forecastData]);

  useEffect(() => {
    setWeatherCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forecastData]);

  const setForecastCallback = useCallback(() => {
    if (forecastData.isSuccess) {
      dispatch(setForecast(forecastData.data.forecast));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forecastData]);

  useEffect(() => {
    setForecastCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forecastData]);

  return <Main />;
}
