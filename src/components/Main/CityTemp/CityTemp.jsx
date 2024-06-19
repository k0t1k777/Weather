import './CityTemp.css';
import { useSelector } from 'react-redux';

export default function CityTemp() {
  const weather = useSelector((state) => state.weather.weather);

  return (
    <>
      <div className='city-temp'>
        <p className='city-temp__city'>{weather?.location?.name}</p>
        <p className='city-temp__time'>{weather?.location?.localtime}</p>
      </div>
      <img
        className='city-temp__image'
        src={weather?.current?.condition?.icon}
        alt='Иконка картинки'
      />
      <p className='city-temp__weather'>{weather?.current?.condition.text}</p>
      <p className='city-temp__degress'>{weather?.current?.temp_c}°</p>
    </>
  );
}
