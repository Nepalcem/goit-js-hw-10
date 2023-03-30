import './css/styles.css';

const countryDetails = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

fetch('https://restcountries.com/v3.1/name/eesti')
  .then(response => {
    return response.json();
  })
  .then(countryArr => {
    return countryArr[0];
  })
  .then(countryCardRender)
  .catch(error => console.log(error));

function countryCardRender (countryObj) {
  const { flags, name, capital, population, languages } = countryObj;

  const markup = `<img src="${flags.png}" alt="" class="country-flag" width="50">
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
  };

