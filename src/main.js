import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

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
    return;
  }
  getImagesByQuery(searchValue.trim()).then(images => {
    createGallery(images);
  });
}
