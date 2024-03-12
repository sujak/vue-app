import service from './service';
import { CONTENT_TYPE } from '@/constants';
import { useUserStoreWithOut } from '@/stores/modules/user';

const request = (option) => {
  const { url, method, params, data, headers, responseType } = option;

  const userStore = useUserStoreWithOut();
  return service.request({
    url: url,
    method: method,
    params: params,
    data: data,
    responseType: responseType,
    headers: {
      'Content-Type': CONTENT_TYPE,
      [userStore.getTokenKey ?? 'Authorization']: userStore.getToken ?? '',
      ...headers
    }
  });
};

export default {
  get: (option) => {
    return request({ method: 'get', ...option });
  },
  post: (option) => {
    return request({ method: 'post', ...option });
  },
  delete: (option) => {
    return request({ method: 'delete', ...option });
  },
  put: (option) => {
    return request({ method: 'put', ...option });
  },
  cancelRequest: (url) => {
    return service.cancelRequest(url);
  },
  cancelAllRequest: () => {
    return service.cancelAllRequest();
  }
};