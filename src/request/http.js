/**
    用于封装axios请求
 */
import axios from 'axios';
import store from '../store'

/**
 *
 * @param status
 * @param other
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {

    }
}

// 创建axios实例
var instance = axios.create({timeout: 1000 * 8});

// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 设置请求拦截器
instance.interceptors.request.use(
    config => {
        // 每次发请求之前判断vuex中是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = store.state.token;
        token && (config.headers.authorization = token);
        return config;
    },
    error => Promise.error(error)
);

// 设置响应拦截器
instance.interceptors.response.use(
    // 如果响应码为200，说明接口请求成功
    response => response.status === 200 ? Promise.resolve(response) : errorHandle(response.status),
    // 可在此处根据后台返回的错误码进行提示及页面跳转
    error => Promise.reject(error)
);


export default instance;