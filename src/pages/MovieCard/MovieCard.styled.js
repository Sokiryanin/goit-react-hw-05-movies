import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 16px;

  border-bottom: 1px solid black;
  padding-bottom: 8px;
`;

export const ContentWrap = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MoviePoster = styled.img`
  display: block;
  max-width: 400px;
`;

export const Goback = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    color: white;
    background-color: orangered;
  }
`;

export const BottomContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid black;
  padding: 8px 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 8px 8px;
  border-radius: 4px;

  &:hover {
    color: white;
    background-color: #f55138;
    border-radius: 3px;
  }
`;
