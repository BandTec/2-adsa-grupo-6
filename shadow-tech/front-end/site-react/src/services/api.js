import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nodeshadow.azurewebsites.net'
});

export default api;