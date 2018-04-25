export const FETCH_WEATHER_BEGIN = "FETCH_WEATHER_BEGIN";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";
export const FETCH_NEWS_BEGIN = "FETCH_NEWS_BEGIN";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

export const fetchWeatherBegin = () => ({
  type: FETCH_WEATHER_BEGIN
});

export const fetchWeatherSuccess = weather => {
  console.log("fetched weather succesfully");
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: { weather }
  };
};

export const fetchWeatherFailure = error => ({
  type: FETCH_WEATHER_FAILURE,
  payload: { error }
});

export const fetchNewsBegin = () => ({
  type: FETCH_NEWS_BEGIN
});

export const fetchNewsSuccess = news => {
  console.log("fetched news succesfully");
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: { news }
  };
};

export const fetchNewsFailure = error => ({
  type: FETCH_NEWS_FAILURE,
  payload: { error }
});
