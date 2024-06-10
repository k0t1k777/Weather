import './Main.css';
import Chart from './Chart/Chart';
import ContainerDays from './ContainerDays/ContainerDays';

export default function Main({ weather, forecast }) {
  console.log('weather: ', forecast);

  console.log('weather: ', forecast.forecastday?.hour);

  return (
    <div className='main'>
      <div className='main__container-city'>
        <p className='main__city'>{weather.location?.name}</p>
        <p className='main__time'>{weather.location?.localtime}</p>
      </div>

      <div>
        <img
          className='main__image'
          src={weather.current?.condition.icon}
          alt='Иконка картинки'
        />
        <p className='main__weather'>{weather.current?.condition.text}</p>
        <p className='main__degress'>{weather.current?.temp_c}°</p>
      </div>
      <Chart />
      <ContainerDays />
    </div>
  );
}
