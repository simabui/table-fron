import axios from 'axios';

axios.defaults.baseURL = 'https://tablepublication.herokuapp.com';

const responseBody = response => response.data;

const requests = {
  get: (url, options = {}) => axios.get(url, options).then(responseBody),
};

const Stat = {
  getStats: () => requests.get('/publication'),
};
export default {
  Stat,
};
