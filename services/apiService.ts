// services/apiService.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your server URL

export const fetchUsers = async () => {
  return axios.get(`${API_URL}/users`);
};
