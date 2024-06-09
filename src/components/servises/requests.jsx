const BASE_URL = 'http://api.weatherapi.com/v1';

const getResponseData = (res = Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getWeather = () => {
  return fetch(`${BASE_URL}/current/`, {
    method: 'GET',
  }).then(getResponseData);
};
