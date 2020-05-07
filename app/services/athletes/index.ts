
import axios from 'axios';
import { baseUrl } from 'services/constants';

const fetchAthlete = (athleteId: number) => {
  return axios
    .get(`${baseUrl}/athletes/${athleteId}`, {})
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

const fetchAthleteResults = (athleteId: number) => {
  return axios
    .get(`${baseUrl}/athletes/${athleteId}/results`, {})
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export { fetchAthlete, fetchAthleteResults };