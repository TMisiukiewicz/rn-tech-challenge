import { useMemo } from 'react';
import { SignInMethods } from './types';

const useSocialButton = (type: SignInMethods) =>
  useMemo(() => {
    if (type === 'apple') {
      return {
        title: 'Sign in with Apple',
        icon: require('../../../../assets/images/apple.png'),
      };
    }

    if (type === 'facebook') {
      return {
        title: 'Sign in with Facebook',
        icon: require('../../../../assets/images/facebook.png'),
      };
    }

    if (type === 'google') {
      return {
        title: 'Sign in with Google',
        icon: require('../../../../assets/images/google.png'),
      };
    }

    return {
      title: 'Sign in with Email',
      icon: undefined,
    };
  }, [type]);

export { useSocialButton };
