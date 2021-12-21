const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'be2d57f5d3aa33dd15926772637345f6';

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
