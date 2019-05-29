import axios from 'axios'
axios.defaults.withCredentials = true; //让ajax携带cookie
import {Message} from 'element-ui'

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 10000,
});

export default service
