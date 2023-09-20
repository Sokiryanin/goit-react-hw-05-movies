import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/fetch';
import poster from '../../images/poster.png';
import { CastList, CastWrapper } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function getCasts() {
      try {
        const allCasts = await getCastById(movieId);
        setCast(allCasts);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCasts();
  }, [movieId]);

  return (
    <div>
      <CastList>
        {cast &&
          cast.length > 0 &&
          cast.map(({ name, profile_path, character, id }) => {
            return (
              <li key={id}>
                <CastWrapper>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : poster
                    }
                    alt={name}
                  />
                  <h3>{name}</h3>
                  <p>Character:{character}</p>
                </CastWrapper>
              </li>
            );
          })}
      </CastList>
    </div>
  );
}
