import axios from 'axios';

const instance = axios.create();

instance.defaults.baseURL = 'http://localhost:3001';
instance.defaults.timeout = 3000;

export default axios;
