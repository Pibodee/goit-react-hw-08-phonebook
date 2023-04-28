import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contatsOperations';
import {ContactForm } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Hero, ListContainer } from 'pages/PagesStyles.styled.';

export function Contactspage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Hero>Contacts</Hero>
      <ContactForm />
      <Filter />
      <ListContainer>
        <ContactList />
      </ListContainer>
    </Container>
  );
}
