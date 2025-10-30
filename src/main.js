import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const query = event.currentTarget.elements['search-text'].value
    .toLowerCase()
    .trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Enter a search term',
      position: 'topRight',
    });
    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(query)
    .then(images => {
      hideLoader();
      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        createGallery(images);
      }
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message:
          'Failed to fetch images. Please check your network connection.',
        position: 'topRight',
      });
      console.error('Error:', error.message);
    })
    .finally(() => {
      searchForm.reset();
    });
}