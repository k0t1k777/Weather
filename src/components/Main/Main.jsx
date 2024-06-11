import './Main.css';
import Chart from './Chart/Chart';
import ContainerDays from './ContainerDays/ContainerDays';
import { useState } from 'react';

const data = [
  {
    name: 'Page A',
    pv: 2400,
  },
  {
    name: 'Page B',
    pv: 1398,
  },
  {
    name: 'Page C',
    pv: 9800,
  },
  {
    name: 'Page D',
    pv: 3908,
  },
  {
    name: 'Page W',
    pv: 4800,
  },
  {
    name: 'Page X',
    pv: 4800,
  },
  {
    name: 'Page N',
    pv: 4800,
  },
];

export default function Main({ weather, forecast }) {
  const [hoursWeather, setHoursWeather] = useState([]);

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
      <Chart data={data} />
      <ContainerDays
        forecast={forecast}
        hoursWeather={hoursWeather}
        setHoursWeather={setHoursWeather}
      />
    </div>
  );
}
