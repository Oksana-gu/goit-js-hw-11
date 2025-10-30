import axios from "axios";

const API_KEY = '52839565-5f9bdab0af4c39050e16b40ec';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      console.error('Error fetching images from Pixabay:', error);
      throw new Error('Failed to fetch images from Pixabay.');
    });
}