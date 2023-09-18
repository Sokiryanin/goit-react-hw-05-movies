import { MoviesList } from 'components/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/fetch';

export const Movies = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('movie') ?? '';

  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      const dataMovies = await getMovieByQuery(query);
      setLoading(true);
      try {
        setMovies(dataMovies);

        if (dataMovies.length === 0 && query) {
          toast.error('Sorry, no movies were found for your request.');
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [query]);

  return (
    <>
      <SearchBar />
      {loading && <div>...Loading</div>}
      {query && !loading && <MoviesList movies={movies} />}
    </>
  );
};
