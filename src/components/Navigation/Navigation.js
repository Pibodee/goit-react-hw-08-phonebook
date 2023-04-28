import { useAuth } from 'hooks/useAuth';
import { StyledLink, StyledNavigation } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledNavigation>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </StyledNavigation>
  );
};
