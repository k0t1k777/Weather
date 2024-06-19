import { 
  // combineReducers,
   configureStore } from '@reduxjs/toolkit';
import { apiWeather } from './../components/servises/api';
import weatherSlice from './features/slice/weatherSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

// const reducers = combineReducers({
//   weather: weatherSlice,
//   [apiWeather.reducerPath]: apiWeather.reducer,
// })

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
  [apiWeather.reducerPath]: apiWeather.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiWeather.middleware),
});

setupListeners(store.dispatch);