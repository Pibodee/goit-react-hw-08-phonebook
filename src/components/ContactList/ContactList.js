import { Contact } from 'components/Contact/Contact';
import { ListStyled } from './Contactlist.styled';
import { useSelector} from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);


  return (
    <ListStyled>
      {contacts.map(({ id, name, phone }) => {
        return <Contact key={id} name={name} number={phone} delId={id} />;
      })}
    </ListStyled>
  );
};
