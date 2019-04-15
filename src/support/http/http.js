import axios from 'axios';
import interceptors from '@/support/http/interceptors';

const { requestInterceptors, responseInterceptors } = interceptors;

function registerInterceptor(type, instance, interceptor) {
  instance.interceptors[type].use(interceptor.success, interceptor.error);
}

const instance = axios.create({
  baseURL: '/api',
});

if (requestInterceptors.length) {
  requestInterceptors.forEach((request) => {
    registerInterceptor('request', instance, request);
  });
}

if (responseInterceptors.length) {
  responseInterceptors.forEach((response) => {
    registerInterceptor('response', instance, response);
  });
}

export default instance;
