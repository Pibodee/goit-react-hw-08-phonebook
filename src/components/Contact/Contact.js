import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contatsOperations';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import Avatar from '@mui/material/Avatar';
import { Text, Delete, Item } from './Contact.styled';
import { yellow } from '@mui/material/colors';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <Item>
      <Avatar sx={{ bgcolor: yellow[700] }}>
        <AccountBoxRoundedIcon />
      </Avatar>
      <Text>{contact.name}</Text>
      <Text>{contact.number}</Text>
      <Delete type="button" onClick={handleDelete}>
        Delete
      </Delete>
    </Item>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
