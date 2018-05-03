import {
  FETCH_WEATHER_BEGIN,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  FETCH_NEWS_BEGIN,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE
} from "../constants/action_types";

const initialState = {
  articles: [],
  weather: [],
  loading: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload.weather
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        weather: []
      };
    case FETCH_NEWS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload.news
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        news: []
      };
    default:
      return state;
  }
};

export default rootReducer;
