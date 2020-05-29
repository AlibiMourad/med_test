import axios from 'axios';

export const getDoctors = () => {
  return axios.get('/doctors', {
    params: {
      total: 1000,
      per_page: 12
    }
  });
};
