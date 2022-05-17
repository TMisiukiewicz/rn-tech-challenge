import { ApolloError } from '@apollo/client';
import { FormikErrors, FormikTouched } from 'formik';

const useFormErrorHandler =
  <T>() =>
  (
    errors: FormikErrors<T>,
    touched: FormikTouched<T>,
    initialValues: T,
    apolloError?: ApolloError
  ) => {
    if (
      Object.values(touched).length === Object.keys(initialValues).length &&
      Object.values(touched).every((value) => value) &&
      Object.keys(errors).length > 0
    ) {
      return Object.values(errors).join('. ');
    }

    if (apolloError) return apolloError.message;

    return undefined;
  };

export default useFormErrorHandler;
