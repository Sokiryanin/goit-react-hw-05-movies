import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import { getMoviesById } from 'services/fetch';
import {
  BottomContentWrap,
  ContentWrap,
  Goback,
  Link,
  List,
  MoviePoster,
  Wrapper,
} from './MovieCard.styled';
import poster from '../../images/no-picture-available-icon-1.jpeg';
import { Loader } from 'components/Loader/Loader';

export const MovieCard = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function getMovie() {
      setLoading(true);
      try {
        const ditailMovie = await getMoviesById(movieId);
        setMovie(ditailMovie);
      } catch (error) {
        navigate('*', { replace: true });
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [movieId, navigate]);

  return (
    <>
      <Goback to={location.state}>Go back</Goback>
      {loading && <Loader />}
      {movie && (
        <>
          <Wrapper>
            <MoviePoster
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : poster
              }
              alt={movie.title}
            />
            <ContentWrap>
              <h1>{movie.title}</h1>
              <p>User score: {Math.round(movie.vote_average) * 10}% </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(({ id, name }) => {
                  return <li key={id}>{name}</li>;
                })}
              </ul>
            </ContentWrap>
          </Wrapper>
          <BottomContentWrap>
            <h3>Additional information</h3>
            <List>
              <li>
                <Link to="cast" state={location.state}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={location.state}>
                  Reviews
                </Link>
              </li>
            </List>
            <Outlet />
          </BottomContentWrap>
        </>
      )}
    </>
  );
};
