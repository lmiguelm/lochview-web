import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://915a-2804-7f0-6540-1913-8469-6bb2-7b8b-28d5.ngrok.io/', // trocar a url do back-end...
  // baseURL: 'http://localhost:8083'
});
