import React from 'react';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import noop from 'lodash/noop';
import Error from '../../../../components/elements/Error';
import Input from '../../../../components/elements/Input';
import Box from '../../../../components/styles/Box';
import SubmitButton from '../../../../components/elements/SubmitButton';
import LOG_IN_WITH_EMAIL from '../../../../api/mutations/logInWithEmail';
import useStackNavigator from '../../../../hooks/useStackNavigator';
import useFormErrorHandler from '../../../../hooks/useFormErrorHandler';
import { StyledText } from '../../../../components/styles/Typography/styles';
import { useLogInForm } from './hooks';
import { LogInForm } from './types';
import { SubmitButtonWrapper } from './styles';

const Form = () => {
  const navigation = useStackNavigator();
  const { initialValues, validationSchema } = useLogInForm();
  const [logIn, { loading, error }] = useMutation(LOG_IN_WITH_EMAIL, {
    onCompleted: () => {
      navigation.reset({ index: 0, routes: [{ name: 'Profile' }] });
    },
  });

  const generateError = useFormErrorHandler<LogInForm>();

  return (
    <Formik
      {...{ initialValues, validationSchema }}
      onSubmit={(values) => logIn({ variables: values })}
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
            <Input
              label='Email'
              onChangeText={handleChange('email')}
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <Input
              label='Password'
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            {errorHandler && (
              <Box withFlex={false} mb={9} centerHorizontal>
                <Error title={errorHandler} />
              </Box>
            )}
            <SubmitButtonWrapper hasErrors={!!errorHandler}>
              <SubmitButton
                label='Log in'
                onPress={() => handleSubmit()}
                disabled={loading}
                alignCenter
              />
              <Box withFlex={false} mt={21}>
                <StyledText onPress={noop} fontWeight='semibold'>
                  Forgot my password
                </StyledText>
              </Box>
            </SubmitButtonWrapper>
          </>
        );
      }}
    </Formik>
  );
};

export default Form;
