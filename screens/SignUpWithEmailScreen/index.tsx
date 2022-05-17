import React from 'react';
import GradientWrapper from '../../components/wrappers/GradientWrapper';
import SafeAreaWrapper from '../../components/wrappers/SafeAreaWrapper';
import HeaderWrapper from '../../components/wrappers/HeaderWrapper';
import Box from '../../components/styles/Box';
import Form from './Form';

const SignUpWithEmailScreen = () => (
  <GradientWrapper>
    <SafeAreaWrapper>
      <HeaderWrapper>
        <Box pl={38} pr={38}>
          <Form />
        </Box>
      </HeaderWrapper>
    </SafeAreaWrapper>
  </GradientWrapper>
);

export default SignUpWithEmailScreen;
