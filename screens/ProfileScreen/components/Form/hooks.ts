import * as Yup from 'yup';
import { useUserContext } from '../../../../contexts/UserContext';

const useProfileForm = () => {
  const { user } = useUserContext();
  const initialValues = {
    name: user?.name || '',
    email: user?.email || '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  return {
    initialValues,
    validationSchema,
  };
};

export { useProfileForm };
