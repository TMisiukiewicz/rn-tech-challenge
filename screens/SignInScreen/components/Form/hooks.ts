import * as Yup from 'yup';

const useLogInForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return {
    initialValues,
    validationSchema,
  };
};

export { useLogInForm };
