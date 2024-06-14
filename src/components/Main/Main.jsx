import './Main.css';
import Chart from './Chart/Chart';
import ContainerDays from './ContainerDays/ContainerDays';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setChartData,
  setHoursWeather,
} from '../../store/features/slice/slice';
import CityTemp from './CityTemp/CityTemp';

export default function Main() {
  const hoursWeather = useSelector((state) => state.hoursWeather);
  const hours = useSelector((state) => state.hours);
  const forecast = useSelector((state) => state.forecast);
  const dispatch = useDispatch();

  const chartDataInfo = hoursWeather.find((item) => item.time === hours);

  useEffect(() => {
    function updateTimeOfDayClass() {
      if (hours >= 22 || hours < 6) {
        document.documentElement.className = 'root night';
      } else if (hours >= 6 && hours < 12) {
        document.documentElement.className = 'root morning';
      }
    }
    updateTimeOfDayClass();
  }, [hours]);

  const saveHoursWeatherData = useCallback(
    (forecast) => {
      const updatedHoursWeather = [];
      forecast?.forEach((item) => {
        item.hour.forEach((hourlyForecast) => {
          updatedHoursWeather.push({
            time: new Date(hourlyForecast.time).getHours(),
            temperature: hourlyForecast.temp_c,
            image: hourlyForecast.condition.icon,
          });
        });
      });
      dispatch(setHoursWeather(updatedHoursWeather));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [forecast]
  );

  useEffect(() => {
    function updateChartData() {
      if (chartDataInfo) {
        const currentTemperature = chartDataInfo.temperature;
        const nextHour = hoursWeather.find((item) => item.time === hours + 1);
        const nextTwoHours = hoursWeather.find(
          (item) => item.time === hours + 2
        );
        const prevHour = hoursWeather.find((item) => item.time === hours - 1);
        const prevTwoHours = hoursWeather.find(
          (item) => item.time === hours - 2
        );

        const newData = [
          {
            temperature: prevTwoHours
              ? prevTwoHours.temperature
              : currentTemperature,
          },
          { temperature: prevHour ? prevHour.temperature : currentTemperature },
          { temperature: currentTemperature },
          { temperature: nextHour ? nextHour.temperature : currentTemperature },
          {
            temperature: nextTwoHours
              ? nextTwoHours.temperature
              : currentTemperature,
          },
        ];
        dispatch(setChartData(newData));
      }
    }
    updateChartData();
  }, [chartDataInfo, hoursWeather, hours, dispatch]);

  useEffect(() => {
    saveHoursWeatherData(forecast.forecastday);
  }, [forecast, saveHoursWeatherData]);

  return (
    <div className='main'>
      <CityTemp />
      <Chart />
      <ContainerDays />
    </div>
  );
}
