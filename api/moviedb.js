import axios from "axios";
import { apiKey } from "../constants";

const movieBaseurl = "https://api.themoviedb.org/3";
export const imagesBaseUrl500 = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const imagesBaseUrl185 = (path) =>
  path ? `https://image.tmdb.org/t/p/w185${path}` : null;
export const imagesBaseUrl342 = (path) =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : null;
const trendingEndPoint = `/trending/movie/day?language=en-US/`;
const upcompingEndPoint = `/movie/upcoming`;
const topRatedEndPoint = `/movie/top_rated`;
const movieDetailsEndPoint = (id) => `/movie/${id}`;
const movieCreditsEndPoint = (id) => `/movie/${id}/credits`;
const movieSimilarEndPoint = (id) => `/movie/${id}/similar`;

// persons
const personDetailsEndPoint = (id) => `/person/${id}`;
const personMoviesEndPoint = (id) => `/person/${id}/movie_credits`;

// search
const searchEndPoint = `/search/movie`;

const getApiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: movieBaseurl + endpoint,
    params: params ? params : {},
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchTrending = () => {
  return getApiCall(trendingEndPoint);
};

export const fetchUpcoming = () => {
  return getApiCall(upcompingEndPoint);
};

export const fetchToprated = () => {
  return getApiCall(topRatedEndPoint);
};

export const fetchMovieDetails = (id) => {
  return getApiCall(movieDetailsEndPoint(id));
};

export const fetchMovieCredits = (id) => {
  return getApiCall(movieCreditsEndPoint(id));
};

export const fetchSimilarMovie = (id) => {
  return getApiCall(movieSimilarEndPoint(id));
};

export const fetchPeronDetails = (id) => {
  return getApiCall(personDetailsEndPoint(id));
};

export const fetchPersonMovies = (id) => {
  return getApiCall(personMoviesEndPoint(id));
};

export const fetchSeachMovies = (params) => {
  return getApiCall(searchEndPoint, params);
};
