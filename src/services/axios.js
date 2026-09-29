import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true,
});

// Conditionally apply the ngrok header based on environment variable
// if (import.meta.env.VITE_USE_NGROK_HEADER === 'true') {
//   api.defaults.headers.common['ngrok-skip-browser-warning'] = '1';
// }

export default api;
