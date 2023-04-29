import { Formik, ErrorMessage } from 'formik';
import { register } from 'redux/auth/authOperations';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  StyledField,
  StyledForm,
  StyledFormBtn,
  StyledLabel,
} from './RegistrationForm.styled';

const schema = yup.object().shape({
  name: yup
    .string('Required')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message: 'Please, enter Your name',
      excludeEmptyString: true,
    })
    .required('Required'),
  email: yup
    .string()
    .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
      message: 'Please, enter a valid email',
      excludeEmptyString: true,
    })
    .required('Required'),
  password: yup
    .string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/, {
      message: 'Enter valid passwoed',
      excludeEmptyString: true,
    })
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={values => dispatch(register(values))}
    >
      <StyledForm autoComplete="off">
        <StyledLabel>
          Name
          <StyledField type="text" name="name" placeholder="Your Name" />
          <ErrorMessage name="name" />
        </StyledLabel>
        <StyledLabel>
          Email
          <StyledField
            type="email"
            name="email"
            placeholder="Example@aaa.com"
          />
          <ErrorMessage name="email" />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledField type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" />
        </StyledLabel>
        <StyledFormBtn type="submit">Register User</StyledFormBtn>
      </StyledForm>
    </Formik>
  );
};

export default RegistrationForm;
