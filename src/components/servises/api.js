import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'https://api.weatherapi.com/v1';
const API_KEY = 'cfdb47b0be2e469d83d111640240906';

export const apiWeather = createApi({
  reducerPath: 'apiWeather',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getForecast: builder.query({
      query: (args) => `/forecast.json?key=${API_KEY}&q=${args.location}&days=${args.days}&lang=${args.lang}`,
    }),
  }),
});

export const {
  useGetForecastQuery,
} = apiWeather;
