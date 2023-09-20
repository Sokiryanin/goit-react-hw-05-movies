import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

import { getTrandingMovies } from 'services/fetch';
import { Title } from './Home.styled';
import { Loader } from 'components/Loader/Loader';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        setMovies(await getTrandingMovies());
      } catch (error) {
        navigate('/', { replace: true });
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [navigate]);

  return (
    <main>
      <Title>Trending today</Title>
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};
