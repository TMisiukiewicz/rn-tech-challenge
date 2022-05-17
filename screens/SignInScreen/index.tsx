import React from 'react';
import GradientWrapper from '../../components/wrappers/GradientWrapper';
import SafeAreaWrapper from '../../components/wrappers/SafeAreaWrapper';
import HeaderWrapper from '../../components/wrappers/HeaderWrapper';
import Box from '../../components/styles/Box';
import Form from './components/Form';

const SignInScreen = () => (
  <GradientWrapper>
    <SafeAreaWrapper>
      <HeaderWrapper title='Log in'>
        <Box pl={38} pr={38}>
          <Form />
        </Box>
      </HeaderWrapper>
    </SafeAreaWrapper>
  </GradientWrapper>
);

export default SignInScreen;
