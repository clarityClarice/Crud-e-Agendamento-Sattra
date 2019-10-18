import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.25.13:8089',
});

export default api