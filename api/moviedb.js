import axios from "axios";
import { apiKey } from "../constants";

const movieBaseurl = "https://api.themoviedb.org/3";

const trendingEndPoint = `/trending/movie/day?language=en-US/`;
const upcompingEndPoint = `/movie/upcoming/day?language=en-US/`;
const topRatedEndPoint = `/movie/top_rated/day?language=en-US/`;

const getApiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: movieBaseurl + endpoint,
    params: params ? params : {},
    header: {
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
