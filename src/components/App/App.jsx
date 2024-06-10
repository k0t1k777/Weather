import './App.css';
import Main from '../Main/Main';
import * as Api from './../servises/requests'
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
const [weather, setWeather] = useState([])
const [forecast, setForecast] = useState([])
const location = 'Ulyanovsk'
const lang = 'Ru'
const days = 1

useEffect(() => {
  Api.getForecast(location, days, lang)
  .then((data) => {
    setWeather(data)
    setForecast(data.forecast)
  })
  .catch((error) => {
    console.error(error)
  })
  }, [location, days, lang])

return (
    <>
      <Main weather={weather} forecast={forecast}/>
    </>
  );
}
