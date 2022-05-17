import { SignUpWithEmailForm } from '../../../SignUpWithEmailScreen/components/Form/types';

export type ProfileForm = Pick<SignUpWithEmailForm, 'name' | 'email'>;
