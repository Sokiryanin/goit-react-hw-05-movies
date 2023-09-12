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
  //   console.log(results);

  return results;
};

// запит по пошуку
// const getSearchMovie = async query => {
//   const { data } = await axios.get(
//     `${BASE_URL}search/movie?query=${query}&include_adult=false&page=1`
//   );
// };
