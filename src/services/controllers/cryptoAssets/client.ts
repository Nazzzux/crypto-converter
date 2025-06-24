import { AxiosInstance } from 'axios';
import axios from 'axios';
import qs from 'query-string';

import { axiosErrorInterceptor } from '../interceptors/handleError';

export const cryptoAssetsApi = init();

function init(): AxiosInstance {
  const client = axios.create({
    baseURL: import.meta.env.VITE_CRYPTO_ASSETS_API_URL,
    paramsSerializer: params => qs.stringify(params),
  });

  client.interceptors.response.use(undefined, axiosErrorInterceptor);

  return client;
}
