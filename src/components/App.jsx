import { Route, Routes } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './Layout';
import { Homepage } from 'pages/homepage/Homepage';
import { Registerpage } from 'pages/registerPage/RegisterPage';
import { Loginpage } from 'pages/logInPage/logInPage';
import { Contactspage } from 'pages/contactsPage/contactsPage';
import { refreshUser } from 'redux/auth/authOperations';
import PrivateRoute from './Routes/PrivateRoute';
import RestrictedRoute from './Routes/RestrictedRoute';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { Loader } from './Loader/Loader';
import { selectIsLoading } from 'redux/contacts/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        {!isRefreshing && (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route
                path="contacts"
                element={<PrivateRoute component={<Contactspage />} />}
              />
              <Route
                path="login"
                element={<RestrictedRoute component={<Loginpage />} />}
              />

              <Route
                path="register"
                element={<RestrictedRoute component={<Registerpage />} />}
              />
              <Route path="*" element={<Homepage />} />
            </Route>
          </Routes>
        )}
      </Suspense>
      {isLoading && <Loader />}
    </>
  );
};
