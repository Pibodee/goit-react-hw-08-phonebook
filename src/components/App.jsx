import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contatsOperations';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();


  <Routes>
    <Route path="/" element={<MainNav/>}>
      <Route index element={<Homepage />} />
    </Route>
  </Routes>;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && <Loader />}
    </>
  );
};
