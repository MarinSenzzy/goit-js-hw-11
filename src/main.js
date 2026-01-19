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
    toastError('Please fill in the search field!');
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(searchValue.trim())
    .then(function (data) {
      console.log(data);

      if (data.total === 0) {
        toastError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }
      createGallery(data.hits);
    })
    .catch(function (error) {
      // if (error.response) {
      //   toastError(error.response.status);

      //   console.log(error.response.data);
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
      // } else if (error.request) {
      //   toastError('error request');
      //   console.log(error.request);
      // } else {
      //   toastError(error.message);
      //   console.log('Error', error.message);
      // }
      // console.log(error.config);

      toastError(error.message);
    })
    .finally(function () {
      hideLoader();
    });
}
