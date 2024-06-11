import './ContainerDays.css';
import { useCallback, useEffect } from 'react';

export default function ContainerDays({
  forecast,
  hours,
  setHours,
  hoursWeather,
  setHoursWeather,
}) {
  
  const saveHoursWeatherData = useCallback((forecast) => {
    const updatedHoursWeather = [];
    forecast?.forEach((day) => {
      day.hour.forEach((hourlyForecast) => {
        updatedHoursWeather.push({
          time: new Date(hourlyForecast.time).getHours(),
          temperature: hourlyForecast.temp_c,
          image: hourlyForecast.condition.icon,
        });
      });
    });
    setHoursWeather(updatedHoursWeather);
  }, []);

  console.log('hoursWeather: ', hoursWeather);

  useEffect(() => {
    saveHoursWeatherData(forecast.forecastday);
  }, [forecast, saveHoursWeatherData]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHours(new Date().getHours());
    }, 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, []);

  console.log('hours: ', hours);

  return (
    <div className='days'>
      <div className='days__containers'>
        <p className='days__item'>{hours - 2}PM</p>
        <img
          src={hoursWeather.find((item) => item.time === hours - 2)?.image}
          alt='иконка картинки'
          className='days__image'
        />
        {hoursWeather.find((item) => item.time === hours - 2)?.temperature}°
      </div>
      <div className='days__containers'>
        <p className='days__item'>{hours - 1}PM</p>
        <img
          src={hoursWeather.find((item) => item.time === hours - 1)?.image}
          alt='иконка картинки'
          className='days__image'
        />
        {hoursWeather.find((item) => item.time === hours - 1)?.temperature}°
      </div>
      <div className='days__shadow'></div>
      <div className='days__containers days__containers_type_shadow'>
        <p className='days__item'>{hours}PM</p>
        <img
          src={hoursWeather.find((item) => item.time === hours)?.image}
          alt='иконка картинки'
          className='days__image'
        />
        <p className='days__degress'>
          {hoursWeather.find((item) => item.time === hours)?.temperature}°
        </p>
      </div>
      <div className='days__containers'>
        <p className='days__item'>{hours + 1}PM</p>
        <img
          src={hoursWeather.find((item) => item.time === hours + 1)?.image}
          alt='иконка картинки'
          className='days__image'
        />
        {hoursWeather.find((item) => item.time === hours + 1)?.temperature}°
      </div>
      <div className='days__containers'>
        <p className='days__item'>{hours + 2}PM</p>
        <img
          src={hoursWeather.find((item) => item.time === hours + 2)?.image}
          alt='иконка картинки'
          className='days__image'
        />
        {hoursWeather.find((item) => item.time === hours + 2)?.temperature}°
      </div>
    </div>
  );
}
