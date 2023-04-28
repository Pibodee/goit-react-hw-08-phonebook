import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';
import { UserMenuBlock, UserMenuBtn } from './UserMenu.Styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuBlock>
      <p>Welcome, {user.name}</p>
      <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuBtn>
    </UserMenuBlock>
  );
};
