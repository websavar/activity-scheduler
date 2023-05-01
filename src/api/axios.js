import Axios from 'axios';
import { networkLogger } from 'utils';

const apiUrl = process.env.REACT_APP_API_URL;
const apiVersion = process.env.REACT_APP_API_VERSION;
const enableNetworkLogger = false;

const axios = Axios.create({
  baseURL: `${apiUrl}/data/${apiVersion}`
});

export const createApiRequest = async (
  url,
  method,
  data
) => {
  try {
    const response = await axios({
      url,
      method,
      headers: {
        'Content-Type': null
      },
      data,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

axios.interceptors.response.use(
  function (response) {
    if (enableNetworkLogger) {
      networkLogger(response);
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;