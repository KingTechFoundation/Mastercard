import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === 'development'
      ? 'http://localhost:5000/api'
      : 'https://mater-card-backend.onrender.com/api',
  withCredentials: true, // Allow credentials for secure communication
});
