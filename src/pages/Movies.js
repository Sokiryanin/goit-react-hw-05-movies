import { MoviesList } from 'components/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/fetch';

export const Movies = () => {
  const [movies, setMovies] = useState();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function getMovies() {
      const searchMovie = await getMovieByQuery(query);

      try {
        setMovies(searchMovie);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, [query]);

  return (
    <>
      <SearchBar />
      {query && <MoviesList movies={movies} />}
    </>
  );
};
