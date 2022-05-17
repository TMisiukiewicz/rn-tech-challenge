import { SignUpWithEmailForm } from '../../../SignUpWithEmailScreen/components/Form/types';

export type LogInForm = Pick<SignUpWithEmailForm, 'email' | 'password'>;

export interface SubmitButtonWrapperProps {
  hasErrors: boolean;
}
