import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';
import { ListStyled } from './Contactlist.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contatsOperations';


export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const OnFilteredContacts = () => {
    if (filterValue) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return;
  };

  const renderAMarkUpList = array => {
    return array.map(contact => {
      return <Contact key={contact.id} contact={contact} />;
    });
  };

  return (
    <ListStyled>
      {filterValue
        ? renderAMarkUpList(OnFilteredContacts())
        : renderAMarkUpList(contacts)}
    </ListStyled>
  );
};
