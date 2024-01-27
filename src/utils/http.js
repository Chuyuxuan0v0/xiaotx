// axios 封装
import axios from 'axios';

// 配置axios基础相关
const service = axios.create({
    // baseURL: '/api', // 设置请求的基础地址
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000, // 设置请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // 在发送请求之前
        return config;
    },
    (error) => {
        // 请求错误处理
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        // 响应成功处理
        return response.data;
    },
    (error) => {
        // 响应错误处理
        return Promise.reject(error);
    }
);
export default service;