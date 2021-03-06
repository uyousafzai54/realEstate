import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const server = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  withCredentials: true,
});

export default server;
