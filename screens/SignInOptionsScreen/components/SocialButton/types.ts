import { PressableProps } from 'react-native';

export type SignInMethods = 'apple' | 'facebook' | 'google' | 'email';

export interface SocialButtonProps extends Pick<PressableProps, 'onPress'> {
  type: SignInMethods;
}
