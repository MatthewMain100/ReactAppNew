import * as axios from "axios"

const baseUrl= 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API_KEY":"df86c421-1d48-4bfd-864f-eb14fb0b66ac"
    }
})

instance.interceptors.request.use(function (config) {
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    config.headers.Accept = 'application/json';
    config.headers['Cache-Control'] = 'no-cache';
    return config;
    }, function (error) {
    return Promise.reject(error);
    });

export const getUsers2=(currentPage =1, pageSize=10)=>{

    return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
        .then(response=>{
            return response.data;
        })
}










export const getUsers=(currentPage =1, pageSize=10)=>{
    return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true,
        })
        .then(response=>{
            return response.data;
        })
}