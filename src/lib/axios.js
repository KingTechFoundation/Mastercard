import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === 'development'
      ? 'https://mater-card-backend.onrender.com/api'
      : 'https://mater-card-backend.onrender.com/api',
  withCredentials: true,
});
