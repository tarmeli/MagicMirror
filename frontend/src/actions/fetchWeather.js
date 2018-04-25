import {
  fetchWeatherBegin,
  fetchWeatherFailure,
  fetchWeatherSuccess
} from "../constants/action_types";
import { weatherKey as key } from "../conf/apikey";

export const fetchWeather = () => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=" +
    key +
    "&units=metric";
  return dispatch => {
    dispatch(fetchWeatherBegin());
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchWeatherSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchWeatherFailure(error)));
  };
};

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
