import axios from 'axios';

// базовий юрл
const BASE_URL = 'https://api.themoviedb.org/3/';
// базові опції для запитів
const options = {
  method: 'GET',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjA4Y2VkZjlhMzM1MjZlYzcwZjJhMzhhZjFkNmVmNSIsInN1YiI6IjY1MDAyMGM3ZGI0ZWQ2MTA0MzA5MDE0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kMwpaqpoXSv-vSlOe2jwChJ_0soFp2EmP8fvHzizNtg',
  },
};

// трендові фільми
export const getTrandingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}trending/all/day`, options);
  const results = await data.results;
  const upcomMovies = results.map(({ backdrop_path, id, name, title }) => ({
    backdrop_path,
    id,
    name,
    title,
  }));
  return upcomMovies;
};

// по айдішніку для картки фільму
export const getMoviesById = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}`, options);
  return data;
};

// запит акторів
export const getCastById = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}/credits`, options);
  return data.cast;
};

// запит рецензій
export const getReviewById = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}/reviews`, options);
  return data.results;
};

// запит по query
export const getMovieByQuery = async query => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?query=${query}}`,
    options
  );

  return data.results;
};
