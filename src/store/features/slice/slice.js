import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  weather: [],
  forecast: [],
};

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    }
  }
});

export const {
  setWeather,
  setForecast
} = slice.actions;

export const store = configureStore({
  reducer: slice.reducer
});
