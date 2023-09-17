import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMoviesById } from 'services/fetch';
import { ContentWrap, MoviePoster, Wrapper } from './MovieCard.styled';
import poster from '../images/no-picture-available-icon-1.jpeg';
export const MovieCard = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        const ditailMovie = await getMoviesById(movieId);
        setMovie(ditailMovie);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <main>
      {movie && (
        <>
          <Wrapper>
            <MoviePoster
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
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
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </main>
  );
};
