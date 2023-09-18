import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import { Toaster } from 'react-hot-toast';

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
      <Outlet />
      <Toaster />
    </Container>
  );
};
