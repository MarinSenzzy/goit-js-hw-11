import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';
import { toastError } from './js/toast';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', searchSubmitFn);

function searchSubmitFn(event) {
  event.preventDefault();
  const form = event.target;

  const {
    'search-text': { value: searchValue },
  } = form.elements;

  if (!searchValue.trim()) {
    console.log('empty input!');
    toastError('Please fill in the search field!');
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(searchValue.trim()).then(images => {
    hideLoader();
    createGallery(images);
  });
}
