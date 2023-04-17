import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contatsOperations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && <Loader/>}
    </>
  );
};
