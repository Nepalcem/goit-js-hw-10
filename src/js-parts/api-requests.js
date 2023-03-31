import Notiflix from 'notiflix';
export const fetchCountries = name => {
  return fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => {
    if (!response.ok) {
      Notiflix.Notify.failure('No such country with this name');
    }
    return response.json();
  });
};
