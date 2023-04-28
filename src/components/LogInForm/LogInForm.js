import { Formik, ErrorMessage,} from 'formik';
import {useDispatch } from 'react-redux';
import * as yup from 'yup';
import { logIn } from 'redux/auth/authOperations';
import { StyledField, StyledForm, StyledFormBtn, StyledLabel } from './LoginForm.styled';

const schema = yup.object().shape({
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
  email: '',
  password: '',
};


const LogInForm = () => {
    const dispatch = useDispatch();

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={values => dispatch(logIn(values))}
      >
        <StyledForm autoComplete="off">
          <StyledLabel>
            Email
            <StyledField
              type="text"
              name="email"
              placeholder="Example@aaa.com"
            />
            <ErrorMessage name="email" />
          </StyledLabel>
          <StyledLabel>
            Password
            <StyledField
              type="text"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" />
          </StyledLabel>
          <StyledFormBtn type="submit">Log In</StyledFormBtn>
        </StyledForm>
      </Formik>
    );
}

export default LogInForm