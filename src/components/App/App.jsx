import './App.css';
import Main from '../Main/Main';
import * as Api from './../servises/requests'
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
const [weather, setWeather] = useState([])
const [forecast, setForecast] = useState([])
console.log('forecast: ', forecast);
console.log('weather: ', weather);
const location = 'Ulyanovsk'
const lang = 'Ru'
const days = 7

// useEffect(() => {
// Api.getWeather(location, lang)
// .then((data) => {
//   setWeather(data)
// })
// .catch((error) => {
//   console.error(error)
// })
// }, [location, lang])


useEffect(() => {
  Api.getForecast(location, days, lang)
  .then((data) => {
    setWeather(data.current)
    setForecast(data.forecast)
  })
  .catch((error) => {
    console.error(error)
  })
  }, [location, days, lang])

return (
    <>
      <Main />
    </>
  );
}
