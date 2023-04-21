import PropTypes from 'prop-types';
import { Delete, Item, Text } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contatsOperations';

export const Contact = ({ name, number, delId }) => {
  const dispatch = useDispatch();
  const handleDel = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Item>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <Delete onClick={() => handleDel(delId)}>Delete</Delete>
    </Item>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  // number: PropTypes.string.isRequired,
  delId: PropTypes.string.isRequired,
};
