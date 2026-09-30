import axios from 'axios';

// Base URL configuration based on Presence API documentation
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://presence-backend-hnix.onrender.com';

// Create a central Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // CRITICAL: Automatically attaches and accepts HttpOnly cookies[cite: 3]
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Concurrency lock and queue variables to prevent multiple simultaneous refresh requests
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Response Interceptor: Recovers when an access token has expired (401 Unauthorized)[cite: 2, 3]
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if error is 401 and the request has not been retried yet
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      
      // EXCEPTION: Prevent infinite loops if the refresh endpoint itself returns 401
      if (originalRequest.url.includes('/authentication/refresh_user_tokens')) {
        localStorage.removeItem('store_time');
        window.location.href = '/login';
        return Promise.reject(error);
      }

      // If a refresh is already in progress, queue this request until completion[cite: 2]
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            return axiosInstance(originalRequest);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Call the Django token rotation endpoint via GET[cite: 2, 3]
        await axiosInstance.get('/authentication/refresh_user_tokens');

        // Record the new access token issuance time for proactive scheduling[cite: 2]
        localStorage.setItem('store_time', Date.now().toString());

        isRefreshing = false;
        processQueue(null);

        // Retry the original failed request[cite: 2]
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        processQueue(refreshError, null);
        
        // Refresh token is invalid/expired -> Clear session and redirect to login[cite: 2, 3]
        localStorage.removeItem('store_time');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;