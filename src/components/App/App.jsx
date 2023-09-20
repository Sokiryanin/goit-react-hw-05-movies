import { Navigate, Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import Layout from '../Layout/Layout';

// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import MovieCard from 'pages/MovieCard/MovieCard';
// import Cast from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieCard = lazy(() => import('pages/MovieCard/MovieCard'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieCard />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
