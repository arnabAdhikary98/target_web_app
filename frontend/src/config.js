const isDevelopment = import.meta.env.MODE === 'development';

// API configuration
export const API_URL = isDevelopment 
  ? 'http://localhost:8080' 
  : 'https://target-web-app-backend.onrender.com';

export const API_CONFIG = {
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
};
