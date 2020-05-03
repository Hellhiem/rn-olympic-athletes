import axios from 'axios';
import { baseUrl } from 'services/constants';

const fetchGames = () => {
  return axios
    .get(`${baseUrl}/games`, {})
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export { fetchGames };