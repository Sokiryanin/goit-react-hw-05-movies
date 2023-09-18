import { useLocation } from 'react-router-dom';
import { List, Link } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title ? movie.title : movie.name}
          </Link>
        </li>
      ))}
    </List>
  );
};
