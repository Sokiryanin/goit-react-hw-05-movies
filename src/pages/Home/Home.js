import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

import { getTrandingMovies } from 'services/fetch';
import { Title } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        setMovies(await getTrandingMovies());
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};
