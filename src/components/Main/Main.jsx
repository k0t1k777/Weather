import './Main.css';
import Chart from './Chart/Chart';
import ContainerDays from './ContainerDays/ContainerDays';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Main() {
  const [hoursWeather, setHoursWeather] = useState([]);
  const [hours, setHours] = useState(new Date().getHours());
  const [chartData, setChartData] = useState([]);

  const weather = useSelector((state) => state.weather);
  const forecast = useSelector((state) => state.forecast);

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

  const saveHoursWeatherData = useCallback((forecast) => {
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
    setHoursWeather(updatedHoursWeather);
  }, []);

  const chartDataInfo = hoursWeather.find((item) => item.time === hours);

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
        setChartData(newData);
      }
    }

    updateChartData();
  }, [chartDataInfo, hoursWeather, hours]);

  useEffect(() => {
    saveHoursWeatherData(forecast.forecastday);
  }, [forecast, saveHoursWeatherData]);

  return (
    <div className='main'>
      <div className='main__container-city'>
        <p className='main__city'>{weather.location?.name}</p>
        <p className='main__time'>{weather.location?.localtime}</p>
      </div>
      <img
        className='main__image'
        src={weather.current?.condition.icon}
        alt='Иконка картинки'
      />
      <p className='main__weather'>{weather.current?.condition.text}</p>
      <p className='main__degress'>{weather.current?.temp_c}°</p>
      <Chart data={chartData} />
      <ContainerDays
        hours={hours}
        setHours={setHours}
        hoursWeather={hoursWeather}
      />
    </div>
  );
}
