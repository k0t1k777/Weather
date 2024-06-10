import './ContainerDays.css';
import DaysImage from './../../../assets/sunny.png';
import { useEffect, useState } from 'react';

export default function ContainerDays({ forecast }) {
  console.log('forecast: ', forecast);
  const [hours, setHours] = useState(new Date().getHours());
  // const [hoursWheater, setHoursWheather] = useState(new Date().getHours())


  useEffect(() => {
    const timer = setInterval(() => {
      setHours(new Date().getHours());
    }, 1000 * 60 * 60);

    return () => clearInterval(timer);
  }, []);

  return (
<>
<div>
      {forecast.forecastday?.map((day, index) => (
        <div key={index}>
          <ul>
            {day.hour.map((hourlyForecast, i) => (
              <li key={i}>{new Date(hourlyForecast.time).getHours()} {hourlyForecast.temp_c}°</li>
            ))}
          </ul>
        </div>
      ))}
    </div>


    <div className='days'>
      <div className='days__containers'>
        <p className='days__item'>{hours - 2}PM</p>
        <img src={DaysImage} alt='иконка картинки' className='days__image' />
        <p className='days__degress'>18°</p>
      </div>
      <div className='days__containers'>
        <p className='days__item'>{hours - 1}PM</p>
        <img src={DaysImage} alt='иконка картинки' className='days__image' />
        <p className='days__degress'>18°</p>
      </div>
      <div className='days__shadow'></div>

      <div className='days__containers days__containers_type_shadow'>
        <p className='days__item'>{hours}PM</p>
        <img src={DaysImage} alt='иконка картинки' className='days__image' />
        <p className='days__degress'>18°</p>
      </div>
      <div className='days__containers'>
        <p className='days__item'>{hours + 1}PM</p>
        <img src={DaysImage} alt='иконка картинки' className='days__image' />
        <p className='days__degress'>18°</p>
      </div>
      <div className='days__containers'>
        <p className='days__item'>{hours + 2}PM</p>
        <img src={DaysImage} alt='иконка картинки' className='days__image' />
        <p className='days__degress'>18°</p>
      </div>
    </div>
    </>
  );
}
