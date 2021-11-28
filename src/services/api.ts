import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://lochview-api.herokuapp.com/',
  // baseURL: 'http://localhost:8083'
});
