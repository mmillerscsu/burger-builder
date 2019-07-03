import axios from 'axios';

const dbinstance = axios.create({
    baseURL: 'https://react-my-burger-88b12.firebaseio.com/'
});

export default dbinstance