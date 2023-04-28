import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const StyledNavigation = styled.nav`
  margin-left: 15px;
  display: flex;
  gap: 50px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  padding: 20px 10px;
  color: #fff;

  &:hover {
    color: #1c1c1e;
    background: #feb340;
  }
`;


