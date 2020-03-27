// Libraries
import axios from 'axios';
// Constants and utils
import {Config} from './constants/consts';

const Error = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  SERVER_UNAVAILABLE: 503
};

export const createAPI = (onNoResponse = () => {}, onUnauthorized = () => {}, onBadRequest = () => {}, onServerUnavailable = () => {}) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: Config.REQUEST_TIMEOUT,
    withCredentials: true
  });

  const onLoad = (response) => response;

  const onError = (error) => {
    const {response} = error;

    if (!response) {
      onNoResponse();

      throw error;
    }

    const {status} = response;

    switch (status) {
      case Error.UNAUTHORIZED:
        onUnauthorized();

        throw error;

      case Error.BAD_REQUEST:
        onBadRequest();

        throw error;

      case Error.SERVER_UNAVAILABLE:
        onServerUnavailable();

        throw error;

      default:
        throw error;
    }
  };

  api.interceptors.response.use(onLoad, onError);

  return api;
};
