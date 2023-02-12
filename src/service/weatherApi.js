const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'eb63035653337f135a8d54653000316a';

const weatherApi = name => {
  return fetch(`
  ${BASE_URL}?q=${name}&lang=en&units=metric&appid=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`City ${name} not found!`));
    },
  );
};

export default weatherApi;
