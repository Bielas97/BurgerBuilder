import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reac-my-burger-bielas.firebaseio.com/'
});
export default instance;
