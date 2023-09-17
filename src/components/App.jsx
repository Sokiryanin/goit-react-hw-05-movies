import { Route, Routes } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Layout } from './Layout';
import { MovieCard } from 'pages/MovieCard';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews';

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
      </Route>
    </Routes>
  );
};
