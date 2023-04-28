import { Formik, ErrorMessage, Form, Field } from 'formik';
import { register } from 'redux/auth/authOperations';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message: 'Please, enter Your name',
      excludeEmptyString: true,
    })
    .required('Required'),
  email: yup.string().matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
    message: 'Please, enter a valid email',
    excludeEmptyString: true,
  }),
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

const RegistrationPage = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={values => dispatch(register(values))}
      >
          <Form>
              <label>
                  Name
                  <Field type='text' name='name'></Field>
              </label>
          </Form>
    </Formik>
  );
};


export default RegistrationPage