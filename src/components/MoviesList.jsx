import { NavLink } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`}>{title ? title : name}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
