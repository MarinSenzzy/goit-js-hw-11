import axios from 'axios';
import { toastError } from './toast';

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
        toastError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      return response.data.hits;
    })
    .catch(function (error) {
      if (error.response) {
        toastError(error.response.status);

        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        toastError('error request');
        console.log(error.request);
      } else {
        toastError(error.message);
        console.log('Error', error.message);
      }
      // console.log(error.config);
      return [];
    });
}
