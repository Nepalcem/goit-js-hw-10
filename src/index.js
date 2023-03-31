import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js-parts/api-requests';
import Notiflix from 'notiflix';
import {
  countryCardRender,
  renderSmallCountryList,
  clearRenderField,
} from './js-parts/html-render-functions';

const DEBOUNCE_DELAY = 300;
const searchInput = document.querySelector('#search-box');

searchInput.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

Notiflix.Notify.init({ position: 'center-top' });

function onInputSearch(e) {
  const inputText = e.target.value.trim();
  if (!inputText) {
    clearRenderField();
    return;
  }
  fetchCountries(inputText)
    .then(countryArr => {
      if (countryArr.length > 1 && countryArr.length <= 10) {
        renderSmallCountryList(countryArr);
      } else if (countryArr.length === 1) {
        countryCardRender(countryArr[0]);
      } else if (countryArr.length > 10) {
        clearRenderField();
        Notiflix.Notify.warning(
          'Too many countries with such name, be more specific'
        );
      }
    })
    .catch(error => {
      console.log(error);
    });
}
