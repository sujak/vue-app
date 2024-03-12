import axios from 'axios';
import { defaultRequestInterceptors, defaultResponseInterceptors } from './config';

import { AxiosInstance, InternalAxiosRequestConfig, RequestConfig, AxiosResponse } from './types';
import { ElMessage } from 'element-plus';
import { REQUEST_TIMEOUT } from '@/constants';

export const PATH_URL = import.meta.env.VITE_API_BASE_PATH;

const abortControllerMap = new Map();

const axiosInstance = axios.create({
  timeout: REQUEST_TIMEOUT,
  baseURL: PATH_URL
});

axiosInstance.interceptors.request.use((res) => {
  const controller = new AbortController();
  const url = res.url || '';
  res.signal = controller.signal;
  abortControllerMap.set(
    import.meta.env.VITE_USE_MOCK === 'true' ? url.replace('/mock', '') : url,
    controller
  );
  return res;
});

axiosInstance.interceptors.response.use(
  (res) => {
    const url = res.config.url || '';
    abortControllerMap.delete(url);
    // 여기서는 아무 처리도 할 수 없습니다. 그렇지 않으면 후속의 interceptors에서 완전한 컨텍스트를 얻을 수 없습니다.
    return res;
  },
  (error) => {
    console.log('err： ' + error); // 디버그용
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(defaultRequestInterceptors);
axiosInstance.interceptors.response.use(defaultResponseInterceptors);

const service = {
  request: (config) => {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }

      axiosInstance
        .request(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  cancelRequest: (url) => {
    const urlList = Array.isArray(url) ? url : [url];
    for (const _url of urlList) {
      abortControllerMap.get(_url)?.abort();
      abortControllerMap.delete(_url);
    }
  },
  cancelAllRequest() {
    for (const [_, controller] of abortControllerMap) {
      controller.abort();
    }
    abortControllerMap.clear();
  }
};

export default service;