import { 
  // configureStore, 
  createSlice } from '@reduxjs/toolkit';

const initialState = {
  weather: [],
  forecast: [],
  hours: new Date().getHours(),
  chartData: [],
  hoursWeather: [],
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
    setHours(state, action) {
      state.hours = action.payload;
    },
    setChartData(state, action) {
      state.chartData = action.payload;
    },
    setHoursWeather(state, action) {
      state.hoursWeather = action.payload;
    }
  }
});

export const {
  setWeather,
  setForecast,
  setHours,
  setChartData,
  setHoursWeather,
} = weatherSlice.actions;


export default weatherSlice.reducer;

// export const store = configureStore({
//   reducer: weatherSlice.reducer
// });

// export const store = configureStore({
//   reducer: slice.reducer
// });