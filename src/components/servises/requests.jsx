const BASE_URL = 'http://api.weatherapi.com/v1';
const API_KEY = 'cfdb47b0be2e469d83d111640240906';

const getResponseData = (res = Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getForecast = (location, days, lang) => {
  return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}&lang=${lang}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  }).then(getResponseData);
}