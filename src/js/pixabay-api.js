import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API = '54255948-743bb2e2e8edc610c07792dbd';
const BASE_URL = 'https://pixabay.com';
axios.defaults.baseURL = BASE_URL;

export function getImagesByQuery(query) {
  return axios
    .get('/api/', {
      params: {
        q: query || '',
        image_type: 'photo',
        key: API,
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(function (response) {
      if (response.data.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          closeOnClick: true,
          close: false,
          position: 'topRight',
          transitionIn: 'fadeInLeft',
          transitionOut: 'fadeOutLeft',
        });
      }
      return response.data.hits;
    })
    .catch(function (error) {
      console.log(error);
    });
}
