export type SignInMethods = 'apple' | 'facebook' | 'google' | 'email';

export interface SocialButtonProps {
  type: SignInMethods;
}
