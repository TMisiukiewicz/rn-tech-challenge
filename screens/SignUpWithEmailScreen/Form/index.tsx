import React from 'react';
import { Formik } from 'formik';
import { useSignUpWithEmailForm } from './hooks';
import Input from '../../../components/elements/Input';
import Error from '../../../components/elements/Error';
import SubmitButton from '../../../components/elements/SubmitButton';
import { StyledButtonWrapper } from './styles';
import Box from '../../../components/styles/Box';

const Form = () => {
  const { initialValues, validationSchema } = useSignUpWithEmailForm();
  return (
    <Formik
      {...{ initialValues, validationSchema }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, errors, touched }) => (
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
          {Object.values(touched).length ===
            Object.keys(initialValues).length &&
            Object.values(touched).every((value) => value) &&
            Object.keys(errors).length > 0 && (
              <Box withFlex={false} mb={9} centerHorizontal>
                <Error title={Object.values(errors).join('. ')} />
              </Box>
            )}
          <StyledButtonWrapper mt={11}>
            <SubmitButton label='Sign up' onPress={() => handleSubmit()} />
          </StyledButtonWrapper>
        </>
      )}
    </Formik>
  );
};

export default Form;
