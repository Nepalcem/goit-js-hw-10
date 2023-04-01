import Notiflix from 'notiflix';
const BASE_URL = 'https://restcountries.com/v3.1/name';
const URL_FIELDS = 'name,capital,population,languages,flags';
export const fetchCountries = name => {
  return fetch(`${BASE_URL}/${name}?fields=${URL_FIELDS}`).then(response => {
    if (!response.ok) {
      Notiflix.Notify.failure('No such country with this name');
    }
    return response.json();
  });
};
