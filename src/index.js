import './css/styles.css';
import { fetchCountries } from './js-parts/api-requests';

const DEBOUNCE_DELAY = 300;

const countryDetails = document.querySelector('.country-info');
const searchInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

searchInput.addEventListener('input', onInputSearch);

function onInputSearch(e) {
  const inputText = e.currentTarget.value.trim();
  if (!inputText) {
    clearRenderField();
    return;
  }
  fetchCountries(inputText)
    .then(countryArr => {
      if (countryArr.length > 1 && countryArr.length <= 5) {
        console.log(countryArr);
        renderSmallCountryList(countryArr);
      } else if (countryArr.length === 1) {
        countryCardRender(countryArr[0]);
      } else {
        console.log('too many');
      }
    })
    .catch(error => console.log(error));
}

function countryCardRender(countryObj) {
  const { flags, name, capital, population, languages } = countryObj;
  clearRenderField();
  const markup = `<img src="${
    flags.png
  }" alt="" class="country-flag" width="50">
    <h1 class="country-name">${name.official}</h1>
     <div class="country-details">
     <p class="capital">Capital:<span class="country-details__text"> ${Object.values(
       capital
     )}</span></p>
     <p class="population">Population:<span class="country-details__text"> ${population}</span></p>
     <p class="languages">Languages:<span class="country-details__text"> ${Object.values(
       languages
     )}</span></p>
   </div>`;
  countryDetails.insertAdjacentHTML('afterbegin', markup);
}

function renderSmallCountryList(countriesArr) {
  clearRenderField();
  const markup = countriesArr
    .map(country => {
      const { flags, name } = country;
      return `<div class="country"><img src="${flags.png}" alt="" class="country-flag" width="30">
      <h1 class="country-name listed">${name.official}</h1></div>`;
    })
    .join('');
  countryList.insertAdjacentHTML('afterbegin', markup);
}

function clearRenderField() {
  countryList.innerHTML = '';
  countryDetails.innerHTML = '';
}
