import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const RestrictedRoute = ({ component }) => {
  const isLogged = useSelector(selectIsLoggedIn);

  return isLogged ? <Navigate to="/contacts" replace /> : component;
};

export default RestrictedRoute;

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
};

