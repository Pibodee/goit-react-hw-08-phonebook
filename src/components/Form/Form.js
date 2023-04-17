import { Formik, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { FormButton, StyledField, StyledForm } from './Form.styled';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contatsOperations';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: true,
    })
    .required('Required'),
  phone: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
        excludeEmptyString: true,
      }
    )
    .required('Required'),
});

const initialValues = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const checkedContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (checkedContact) {
      alert(`${values.name} is alredy added`);
      return;
    }
    dispatch(addContact(values));
    resetForm({
      name: '',
      phone: '',
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <StyledForm autoComplete="off">
        <label>
          Name
          <StyledField type="text" name="name"></StyledField>
          <ErrorMessage name="name" />
        </label>
        <label>
          Number
          <StyledField type="tel" name="phone"></StyledField>
          <ErrorMessage name="phone" />
        </label>
        <FormButton type="submit">Add Contact</FormButton>
      </StyledForm>
    </Formik>
  );
};
