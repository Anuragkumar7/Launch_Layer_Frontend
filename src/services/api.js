import axios from 'axios';

function resolveApiUrl() {
  const fallback = import.meta.env.PROD
    ? 'https://launch-layer-backend.onrender.com/api'
    : '/api';

  const raw = (import.meta.env.VITE_API_URL || fallback).trim().replace(/\/+$/, '');
  if (raw === '/api') return raw;
  return raw.endsWith('/api') ? raw : `${raw}/api`;
}

const API_URL = resolveApiUrl();

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Render free tier can take 30–60s to wake from sleep
  timeout: import.meta.env.PROD ? 90000 : 30000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
      return Promise.reject(
        new Error(
          'The server is taking longer than usual to respond. Please wait a moment and try again.'
        )
      );
    }

    const message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong. Please try again.';
    return Promise.reject(new Error(message));
  }
);

export async function submitContactForm(data) {
  const response = await api.post('/contact', data);
  return response.data;
}

export default api;
