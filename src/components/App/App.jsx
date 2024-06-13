import './App.css';
import Main from '../Main/Main';
import * as Api from './../servises/requests';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setForecast, setWeather } from '../../store/features/slice/slice';

export default function App() {
  const dispatch = useDispatch();

  const location = 'Yevpatoriya';
  const lang = 'Ru';
  const days = 1;

  useEffect(() => {
    Api.getForecast(location, days, lang)
      .then((data) => {
        dispatch(setWeather(data));
        dispatch(setForecast(data.forecast));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [location, days, lang, dispatch]);

  return <Main />;
}
