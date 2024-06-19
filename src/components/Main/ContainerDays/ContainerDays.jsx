import { useDispatch, useSelector } from 'react-redux';
import './ContainerDays.css';
import { useEffect } from 'react';
import { setHours } from '../../../store/features/slice/weatherSlice';

export default function ContainerDays() {
  const hours = useSelector((state) => state.weather.hours);
  const hoursWeather = useSelector((state) => state.weather.hoursWeather);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setHours(new Date().getHours()));
    }, 1000 * 60 * 60);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='days'>
      <div className='days__containers'>
        <p className='days__item'>{hours - 3}PM</p>
        <img
          src={hoursWeather?.find((item) => item.time === hours - 3)?.image}
          alt='иконка картинки'
          className='days__image'
        />
        {hoursWeather?.find((item) => item.time === hours - 3)?.temperature}°
      </div>
      <div className='days__containers'>
        <p className='days__item'>{hours - 2}PM</p>
        <img
          src={hoursWeather?.find((item) => item.time === hours - 2)?.image}
          alt='иконка картинки'
          className='days__image'
        />
        {hoursWeather?.find((item) => item.time === hours - 2)?.temperature}°
      </div>
      <div className='days__containers days__containers_type_relative'>
        <div className='days__shadow'></div>
        <p className='days__item'>{hours - 1}PM</p>
        <img
          src={hoursWeather?.find((item) => item.time === hours - 1)?.image}
          alt='иконка картинки'
          className='days__image'
        />
        <p className='days__degress'>
          {hoursWeather?.find((item) => item.time === hours - 1)?.temperature}°
        </p>
      </div>
      <div className='days__containers'>
        <p className='days__item'>{hours}PM</p>
        <img
          src={hoursWeather?.find((item) => item.time === hours)?.image}
          alt='иконка картинки'
          className='days__image'
        />
        {hoursWeather?.find((item) => item.time === hours)?.temperature}°
      </div>
      <div className='days__containers'>
        <p className='days__item'>{hours + 1}PM</p>
        <img
          src={hoursWeather?.find((item) => item.time === hours + 1)?.image}
          alt='иконка картинки'
          className='days__image'
        />
        {hoursWeather?.find((item) => item.time === hours + 1)?.temperature}°
      </div>
    </div>
  );
}
