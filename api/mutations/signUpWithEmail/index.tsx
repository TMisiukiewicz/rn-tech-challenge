import { gql } from '@apollo/client';

const SIGN_UP_WITH_EMAIL = gql`
  mutation SignUpWithEmail(
    $name: NonEmptyString!
    $email: EmailAddress!
    $password: Password!
  ) {
    signUpWithEmail(name: $name, email: $email, password: $password) {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;

export default SIGN_UP_WITH_EMAIL;
