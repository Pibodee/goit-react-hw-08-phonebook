import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { addContact } from 'redux/contacts/contatsOperations';
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { StyledForm, StyledField, FormBtn, StyledLabel } from './Form.styled';

export const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const theSameContact = contacts.filter(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (theSameContact.length) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  const FormScheme = object({
    name: string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
        excludeEmptyString: true,
      })
      .required('Required'),
    number: string()
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormScheme}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      <StyledForm>
        <StyledLabel>
          Name
          <StyledField type="text" name="name" />
          <ErrorMessage name="name" />
        </StyledLabel>

        <StyledLabel>
          Number
          <StyledField type="tel" name="number" />
          <ErrorMessage name="number" />
        </StyledLabel>

        <FormBtn type="submit">Add Contact</FormBtn>
      </StyledForm>
    </Formik>
  );
};
