import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootNavigationScreens = {
  'Sign In Options': undefined;
  'Sign Up With Email': undefined;
};

export type ScreenProps<S extends keyof RootNavigationScreens> =
  NativeStackScreenProps<RootNavigationScreens, S>;
