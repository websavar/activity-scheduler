import { useState, useEffect } from "react";
import api from 'api';
import { umbrellaIcon } from 'assets/images/svgIcons';

const apiKey = process.env.REACT_APP_API_KEY;

export default function Weather() {
  const [weather, setWeather] = useState({
    city: "Berlin",
    temperature: "",
    icon: "",
    feelsLike: "",
    description: "",
    rain: "",
    isLoading: false
  });
  const [precipitation, setPrecipitation] = useState('');

  useEffect(() => {
    const getWeather = async () => {
      try {
        setWeather({ isLoading: true });
        const data = await api.getWeatherData(weather.city);
        if (!data) return;

        setWeather({
          temperature: data.main.temp.toFixed(),
          description: data.weather[0].description,
          feelsLike: data.main.feels_like.toFixed(),
          icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          isLoading: false
        });
      } catch (err) {
        console.error(err);
      }
    };

    const getProbabityOfPrecipitation = async () => {
      try {
        const forecastList = await api.getProbabityOfPrecipitation(weather.city);
        const maxPoP = forecastList.list.reduce(
          (acc, cur) => (cur?.pop > acc ? cur?.pop : acc),
          forecastList.list[0]?.pop
        );
        setPrecipitation(maxPoP * 100);
      } catch (err) {
        console.error(err);
      }
    };

    getWeather();
    getProbabityOfPrecipitation();
  }, []);

  return (
    <div className="flex-col w-80 h-40 bg-blue-100 shadow-sm rounded-md p-2 m-3">
      {(!weather.temperature || weather.isLoading) ?
        <div className="text-center">Loading...</div> : (
          <>
            <div className="flex w-full justify-between text-sm">
              <div className="flex-col">
                <h1 className="text-3xl text-gray-700 pt-1 pl-2">
                  {weather.temperature}<sup className="text-xs">°C</sup>
                </h1>
                <p className="mt-3">Feels like {weather.feelsLike}°C</p>
              </div>
              <div className="flex-col">
                <img src={weather.icon} alt="Weather icon" />
                <p>{weather.description}</p>
              </div>
            </div>
            <div>
              {precipitation &&
                <p className="flex mt-2 text-blue-900 text-sm"> {umbrellaIcon} {precipitation}% chance of precipitation</p>
              }
            </div>
          </>)}
    </div>
  );
}
