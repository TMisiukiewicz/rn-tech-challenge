import { gql } from '@apollo/client';

const LOG_IN_WITH_EMAIL = gql`
  mutation LogInWithEmail($email: EmailAddress!, $password: NonEmptyString!) {
    loginWithEmail(email: $email, password: $password) {
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

export default LOG_IN_WITH_EMAIL;
