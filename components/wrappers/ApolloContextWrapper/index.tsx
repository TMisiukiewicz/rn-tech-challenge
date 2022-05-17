import React, { PropsWithChildren } from 'react';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { ACCESS_TOKEN_KEY } from '../../../utils/consts';

const httpLink = createHttpLink({
  uri: 'https://api-dev.foodstyles.com/graphql',
});

const ApolloContextWrapper: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  // eslint-disable-next-line no-undef
  const authLink = setContext(async (_, { headers }) => {
    try {
      const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
      return token
        ? {
            headers: { ...headers, Authorization: `Bearer ${token}` },
          }
        : { headers };
    } catch (error) {
      return { headers };
    }
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
  return <ApolloProvider {...{ client }}>{children}</ApolloProvider>;
};

export default ApolloContextWrapper;
