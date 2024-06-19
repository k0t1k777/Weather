// import axios from 'axios';

// const BASE_URL = 'https://api.weatherapi.com/v1';
// const API_KEY = 'cfdb47b0be2e469d83d111640240906';
// axios.defaults.baseURL = BASE_URL

// const getResponseData = (res) => {
//   if (!res.status === 200) {
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }
//   return res.data;
// };

// export const getForecast = (location, days, lang) => {
//   return axios.get(`/forecast.json?key=${API_KEY}&q=${location}&days=${days}&lang=${lang}`, {
//     headers: {
//       'Authorization': `Bearer ${API_KEY}`
//     }
//   }).then(getResponseData);
// }