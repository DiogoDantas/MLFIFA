import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sofifa-api.herokuapp.com/api/v1/',
});

export default api;