import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { getTrandingMovies } from 'services/fetch';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      // setLoading(true);

      try {
        setMovies(await getTrandingMovies());
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      <ul>
        {movies.map(({ id, name, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title ? title : name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
