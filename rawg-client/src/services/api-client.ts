import axios from 'axios';

const apiClient = axios.create({
    baseURL: "http://localhost:5000",
    // baseURL: import.meta.env.VITE_API_BASE_URL,
    // baseURL: 'https://api.rawg.io/api', FOR PUBLIC API
    params: {
      key: import.meta.env.VITE_API_KEY,
    }
    
  });

export default apiClient;