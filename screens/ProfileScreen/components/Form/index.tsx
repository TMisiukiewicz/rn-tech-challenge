import React from 'react';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import Toast from 'react-native-root-toast';
import { useProfileForm } from './hooks';
import { StyledFormWrapper } from './styles';
import useFormErrorHandler from '../../../../hooks/useFormErrorHandler';
import Error from '../../../../components/elements/Error';
import { ProfileForm } from './types';
import Input from '../../../../components/elements/Input';
import { StyledButtonWrapper } from '../../../SignUpWithEmailScreen/components/Form/styles';
import SubmitButton from '../../../../components/elements/SubmitButton';
import { UPDATE_USER } from '../../../../api/mutations/updateUser';
import Box from '../../../../components/styles/Box';

const Form = () => {
  const { initialValues, validationSchema } = useProfileForm();
  const generateError = useFormErrorHandler<ProfileForm>();
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER, {
    onCompleted: () => {
      Toast.show('Successfully updated user', {
        duration: 2000,
      });
    },
  });

  return (
    <Formik
      {...{ initialValues, validationSchema }}
      enableReinitialize
      onSubmit={(values) => updateUser({ variables: values })}
    >
      {({ handleChange, handleSubmit, errors, touched, values }) => {
        const errorHandler = generateError(
          errors,
          touched,
          initialValues,
          error
        );

        return (
          <StyledFormWrapper>
            <Input
              isAlternative
              label='Name shown on your shared cards'
              onChangeText={handleChange('name')}
              defaultValue={values.name}
            />
            <Input
              isAlternative
              label='Email'
              onChangeText={handleChange('email')}
              keyboardType='email-address'
              autoCapitalize='none'
              defaultValue={values.email}
            />
            {errorHandler && (
              <Box withFlex={false} mb={9} centerHorizontal>
                <Error title={errorHandler} />
              </Box>
            )}
            <StyledButtonWrapper mt={15}>
              <SubmitButton
                label='Done'
                onPress={() => handleSubmit()}
                disabled={loading}
              />
            </StyledButtonWrapper>
          </StyledFormWrapper>
        );
      }}
    </Formik>
  );
};

export default Form;
