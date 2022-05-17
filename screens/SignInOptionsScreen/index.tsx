import React from 'react';
import { Pressable } from 'react-native';
import noop from 'lodash/noop';
import Box from '../../components/styles/Box';
import { StyledText } from '../../components/styles/Typography/styles';
import GradientWrapper from '../../components/wrappers/GradientWrapper';
import SafeAreaWrapper from '../../components/wrappers/SafeAreaWrapper';
import SocialButton from './components/SocialButton';
import { SignInMethods } from './components/SocialButton/types';
import {
  StyledLink,
  StyledLogo,
  StyledPolicyText,
  StyledSignInDescription,
} from './styles';
import BetaVersionInfo from './components/BetaVersionInfo';
import { ScreenProps } from '../../setup/navigation/types';

const SignInOptionsScreen = ({
  navigation,
}: ScreenProps<'Sign In Options'>) => {
  const availableSignInOptions: SignInMethods[] = [
    'apple',
    'facebook',
    'google',
    'email',
  ];

  const onSignInPress = (type: SignInMethods) =>
    type === 'email' ? navigation.navigate('Sign Up With Email') : noop;

  return (
    <GradientWrapper>
      <BetaVersionInfo />
      <SafeAreaWrapper>
        <Box centerHorizontal pt={93} pl={38} pr={38}>
          <StyledLogo
            source={require('../../assets/images/foodstyles-logo.png')}
          />
          <Box pt={25} pb={22}>
            <StyledSignInDescription fontSize={18}>
              Sign in to be able to save your preferences and settings.
            </StyledSignInDescription>
            <Box pt={30}>
              {availableSignInOptions.map((type) => (
                <SocialButton
                  key={type}
                  {...{ type }}
                  onPress={() => onSignInPress(type)}
                />
              ))}
              <Box centerHorizontal pt={5}>
                <Pressable>
                  <StyledText fontWeight='semibold' fontSize={16}>
                    Log in with Email
                  </StyledText>
                </Pressable>
              </Box>
            </Box>
            <StyledPolicyText fontSize={13}>
              By signing in you accept the
              {'\n'}
              <StyledLink onPress={noop}>General Terms</StyledLink> and{' '}
              <StyledLink onPress={noop}>Privacy Policy</StyledLink>
            </StyledPolicyText>
          </Box>
        </Box>
      </SafeAreaWrapper>
    </GradientWrapper>
  );
};

export default SignInOptionsScreen;
