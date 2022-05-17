import { PressableProps } from 'react-native';

export interface StyledSubmitButtonProps {
  alignCenter?: boolean;
}
export interface SubmitButtonProps
  extends PressableProps,
    StyledSubmitButtonProps {
  label: string;
}
