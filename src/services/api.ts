import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://f60e-2804-7f0-6540-1913-99f1-4113-66f2-dec8.ngrok.io/',
  // baseURL: 'http://localhost:8083'
});
