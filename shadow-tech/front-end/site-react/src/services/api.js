import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://nodeshadow.azurewebsites.net'
});

export default api;