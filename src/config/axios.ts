import axios, { AxiosError, AxiosResponse } from 'axios';

const StatusCode = {
  Unauthorized: 401,
  Forbidden: 403,
  UnprocessableEntity: 422,
  TooManyRequests: 429,
  InternalServerError: 500,
};

/* ~~~~~~~~~~ RESPONSE ~~~~~~~~~~ */

const onFulfilledResponse = (response: AxiosResponse) => {
  return response;
};

const onRejectedResponse = (error: AxiosError) => {
  if (error?.response?.status) {
    if (error.response.status === StatusCode.Unauthorized) {
      // TODO: Handle
    } else if (error.response.status === StatusCode.Forbidden) {
      // TODO: Handle
    } else if (error.response.status === StatusCode.UnprocessableEntity) {
      // TODO: Handle
    } else if (error.response.status === StatusCode.TooManyRequests) {
      // TODO: Handle
    } else if (error.response.status === StatusCode.InternalServerError) {
      // TODO: Handle
    }
  }

  return Promise.reject(error);
};

/* ~~~~~~~~~~ AXIOS INSTANCE ~~~~~~~~~~ */
const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/repos',
});

axiosInstance.interceptors.response.use(onFulfilledResponse, onRejectedResponse);

export default axiosInstance;
