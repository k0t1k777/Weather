import './CityTemp.css';
import { useSelector } from 'react-redux';

export default function CityTemp() {
  const weather = useSelector((state) => state.weather);

  return (
    <>
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
    </>
  );
}
