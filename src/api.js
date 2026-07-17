import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseURL = process.env.REACT_APP_BASEURL

export const getTrendingMovieList = async () => {
  const movie = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`)
  return movie.data.results
}

export const getTopRatedMovieList = async () => {
  const movie = await axios.get(`${baseURL}/movie/top_rated?api_key=${apiKey}`)
  return movie.data.results
}
export const getNewReleaseMovieList = async () => {
  const movie = await axios.get(`${baseURL}/movie/upcoming?api_key=${apiKey}`)
  return movie.data.results
}
