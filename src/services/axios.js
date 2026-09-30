import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Conditionally apply the ngrok header based on environment variable
// if (import.meta.env.VITE_USE_NGROK_HEADER === 'true') {
//   api.defaults.headers.common['ngrok-skip-browser-warning'] = '1';
// }

export default api;
