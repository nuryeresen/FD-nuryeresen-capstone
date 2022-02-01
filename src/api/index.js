import axios from "axios";
const API_KEY = "a75c039072f6f6025a9c53a11184882b";
const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3"})

export const fetchMovies = (searchValue) => BASE_AXIOS.get(`/search/movie?api_key=${API_KEY}&query=${searchValue}`);

export const fetchDiscoverMovies = () => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&page=1`);

export const fetchTrendingMovies = (time_window) => BASE_AXIOS.get(`/trending/all/${time_window}?api_key=${API_KEY}`);

export const fetchMovieGenres = () =>BASE_AXIOS.get(`/genre/movie/list?api_key=${API_KEY}`);

export const fetchSingleMovie = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`) 

export const fetchPopularTopMovies = (type, page) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&page=${page}`)


export const fetchSingleMovieCredits = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)

export const fetchReviews = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`)


