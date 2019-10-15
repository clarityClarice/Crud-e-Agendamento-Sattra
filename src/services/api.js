import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.25.36:8089',
});

export default api