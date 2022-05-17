import React from 'react';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import Input from '../../../../components/elements/Input';
import Error from '../../../../components/elements/Error';
import SubmitButton from '../../../../components/elements/SubmitButton';
import Box from '../../../../components/styles/Box';
import SIGN_UP_WITH_EMAIL from '../../../../api/mutations/signUpWithEmail';
import useStackNavigator from '../../../../hooks/useStackNavigator';
import useFormErrorHandler from '../../../../hooks/useFormErrorHandler';
import { useSignUpWithEmailForm } from './hooks';
import { StyledButtonWrapper } from './styles';
import { SignUpWithEmailForm } from './types';

const Form = () => {
  const navigation = useStackNavigator();
  const { initialValues, validationSchema } = useSignUpWithEmailForm();
  const [signUp, { loading, error }] = useMutation(SIGN_UP_WITH_EMAIL, {
    onCompleted: () => {
      navigation.navigate('Sign In');
    },
  });

  const generateError = useFormErrorHandler<SignUpWithEmailForm>();

  return (
    <Formik
      {...{ initialValues, validationSchema }}
      onSubmit={(values) => signUp({ variables: values })}
    >
      {({ handleChange, handleSubmit, errors, touched }) => {
        const errorHandler = generateError(
          errors,
          touched,
          initialValues,
          error
        );
        return (
          <>
            <Input label='Your name' onChangeText={handleChange('name')} />
            <Input
              label='Email'
              onChangeText={handleChange('email')}
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <Input
              label='Password'
              description='(min 6 characters)'
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            {errorHandler && (
              <Box withFlex={false} mb={9} centerHorizontal>
                <Error title={errorHandler} />
              </Box>
            )}
            <StyledButtonWrapper mt={errorHandler ? 11 : 15}>
              <SubmitButton
                label='Sign up'
                onPress={() => handleSubmit()}
                disabled={loading}
              />
            </StyledButtonWrapper>
          </>
        );
      }}
    </Formik>
  );
};

export default Form;
