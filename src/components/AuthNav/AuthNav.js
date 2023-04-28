import { StyledNav} from './AuthNav.styled';
import { StyledLink } from 'components/AuthNav/AuthNav.styled';

export const AuthNav = () => {
  return (
    <StyledNav>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </StyledNav>
  );
};
