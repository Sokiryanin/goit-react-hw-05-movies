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
  console.log(movies);
  return (
    <>
      <h1>Trending today</h1>

      <ul>
        {movies.map(({ id, name, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{title ? title : name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

/*

import { useEffect, useState } from 'react'
import { getNews } from '../../services/getNews'
import { useCustomContex } from '../../testContext/Context/Context'
import ErrorCard from '../ErrorCard/ErrorCard'

const STATUS = {
	IDLE: 'idle',
	PENDING: 'pending',
	REJECTED: 'rejected',
	RESOLVED: 'resolved',
}

const ContentInfo = ({ searchText }) => {
	const { news, setNews } = useCustomContex()
	// const [news, setNews] = useState(null)
	const [error, setError] = useState('')
	const [status, setStatus] = useState(STATUS.IDLE)

	useEffect(() => {
		news && setStatus(STATUS.RESOLVED)
	}, [news])

	useEffect(() => {
		if (!searchText) return
		setStatus(STATUS.PENDING)
		getNews(searchText)
			.then((response) => response.json())
			.then((data) => {
				if (data.status === 'ok') {
					setNews(data.articles)
					setStatus(STATUS.RESOLVED)
				} else return Promise.reject(data.message)
			})
			.catch((error) => {
				setError(error)
				setStatus(STATUS.REJECTED)
			})
	}, [searchText, setNews])

	if (status === STATUS.PENDING)
		return (
			<div className='spinner-border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</div>
		)
	else if (status === STATUS.RESOLVED)
		return (
			<ul>
				{news.map((el) => {
					return <li key={el.url}>{el.title}</li>
				})}
				<button>Load more...</button>
			</ul>
		)
	else if (status === STATUS.REJECTED) return <ErrorCard>{error}</ErrorCard>
}

export default ContentInfo
*/
