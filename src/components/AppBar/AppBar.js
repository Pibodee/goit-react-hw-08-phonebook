import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { NavBar } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </NavBar>
  );
};
