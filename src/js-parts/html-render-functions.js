const countryDetails = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

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

export { countryCardRender, renderSmallCountryList, clearRenderField };
