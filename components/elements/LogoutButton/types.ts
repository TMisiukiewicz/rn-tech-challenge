import { PressableProps } from 'react-native';

export interface StyledLogoutButtonProps {
  alignCenter?: boolean;
}
export interface LogoutButtonProps
  extends PressableProps,
    StyledLogoutButtonProps {
  label: string;
}
