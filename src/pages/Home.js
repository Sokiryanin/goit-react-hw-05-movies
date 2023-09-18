import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';

import { getTrandingMovies } from 'services/fetch';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        setMovies(await getTrandingMovies());
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    }
    getMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};
