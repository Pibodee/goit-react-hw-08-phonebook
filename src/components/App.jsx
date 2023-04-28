import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Suspense, useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import Homepage from 'pages/homepage/Homepage';
import ContactsPage from 'pages/contactsPage/contactsPage';
import MainNav from './MainNav/MainNav';
import { selectRefreshing, selectisLoading } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';
import Layout from './Layout';
import PrivateRoute from './Routes/PrivateRoute';
import RestrictedRoute from './Routes/RestrictedRoute';
import LogInPage from 'pages/logInPage/logInPage';
import RegistrationPage from 'pages/registerPage/RegisterPage';

export const App = () => {
  const isRefreshing = useSelector(selectRefreshing);
  const isUserLoading = useSelector(selectisLoading);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

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
                element={<PrivateRoute component={<ContactsPage />} />}
              />
              <Route
                path="login"
                element={<RestrictedRoute component={<LogInPage />} />}
              />
              <Route
                path="register"
                element={<RestrictedRoute component={<RegistrationPage />} />}
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
