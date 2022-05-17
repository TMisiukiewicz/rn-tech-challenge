import { gql } from '@apollo/client';

const USER_QUERY = gql`
  query User {
    user {
      name
      email
      facebookId
      googleId
      appleId
    }
  }
`;

export default USER_QUERY;
