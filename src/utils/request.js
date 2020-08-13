import axios from 'axios'
import {Notify} from 'vant'


// create an axios instance
const service = axios.create({
    baseURL: 'http://192.168.31.25:8000', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        let token = localStorage.getItem('token')
        if (token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers['X-Token'] = token
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        // if the custom code is not 20000, it is judged as an error.
        if (res.status === false) {
            if (res.message) {
                Notify({
                    message: res.message,
                    color: '#FFFFFF',
                    background: '#d9455f',
                });
            }
        } else {
            if (res.message) {
                Notify({
                    message: res.message,
                    color: '#FFFFFF',
                    background: '#1eb2a6',
                });
            }
            return res
        }
    },
    error => {
        console.log(error) // for debug
        Notify({
            message: 'error',
            color: '#FFFFFF',
            background: '#d9455f',
        });
        return Promise.reject(error)
    }
)

export default service