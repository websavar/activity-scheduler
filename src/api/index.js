import { HTTP_METHODS } from 'constants';
import { createApiRequest } from "./axios";

const errorHandler = (e) => console.log(`Error occurred while fetching data from the server ${e}`);

const apiKey = process.env.REACT_APP_API_KEY;

class ApiCallCreator {
  async getWeatherData(city) {
    return createApiRequest(
      `/weather?q=${city}&units=metric&appid=${apiKey}`,
      HTTP_METHODS.GET,
      {}
    )
      .then(res => res)
      .catch((e) => errorHandler(e));
  }

  getProbabityOfPrecipitation(city) {
    return createApiRequest(
      `/forecast?q=${city}&units=metric&cnt=4&appid=${apiKey}`,
      HTTP_METHODS.GET,
      {}
    )
      .then(res => res)
      .catch((e) => errorHandler(e));
  }
};

const api = new ApiCallCreator();

export default api;