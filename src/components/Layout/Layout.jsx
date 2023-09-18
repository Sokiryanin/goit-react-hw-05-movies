import { Outlet } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import { Container, Header, Link } from '../App/App.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <Toaster />
    </Container>
  );
};
