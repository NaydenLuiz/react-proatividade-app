import axios from 'axios';
export default axios.create({
 baseURL: 'http://localhost:5047/api/',
 withCredentials: false,
});