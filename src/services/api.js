import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nahasemanaomnistack.herokuapp.com'
});

export default api;