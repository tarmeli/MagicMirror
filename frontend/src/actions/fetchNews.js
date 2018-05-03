import {
  fetchNewsBegin,
  fetchNewsFailure,
  fetchNewsSuccess
} from "../constants/action_types";
import { newsKey as key } from "../conf/apikey";

export const fetchNews = () => {
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" +
    key;
  return dispatch => {
    dispatch(fetchNewsBegin());
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchNewsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchNewsFailure(error)));
  };
};

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
