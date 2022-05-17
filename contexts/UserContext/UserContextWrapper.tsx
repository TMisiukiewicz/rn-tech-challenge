import React, { PropsWithChildren, useMemo, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';
import { useLazyQuery } from '@apollo/client';
import { User } from '../../types';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../../utils/consts';
import Box from '../../components/styles/Box';
import { AccessData } from './types';
import { UserContext } from '.';
import USER_QUERY from '../../api/queries/user';

const UserContextWrapper: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [accessData, setAccessData] = useState<AccessData>({
    accessToken: null,
    refreshToken: null,
  });
  const [isReady, setIsReady] = useState(false);
  const isLoggedIn = !!accessData.accessToken;

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
        const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);

        setAccessData({ accessToken, refreshToken });
      } catch (error) {
        console.error('could not get async storage keys');
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  const [getUser, { loading }] = useLazyQuery(USER_QUERY, {
    onCompleted: (data) => {
      setUser(data.user);
    },
  });

  useEffect(() => {
    if (isReady && accessData.accessToken) {
      getUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  const logOut = async () => {
    try {
      await AsyncStorage.multiRemove([ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY]);
      setAccessData({ accessToken: null, refreshToken: null });
      setUser(undefined);

      Promise.resolve();
    } catch (error) {
      console.error('could not remove async storage keys');
      Promise.reject();
    }
  };

  return (
    <UserContext.Provider
      value={useMemo(
        () => ({
          isLoggedIn,
          user,
          setUser,
          accessData,
          setAccessData,
          isContextReady: isReady,
          logOut,
        }),
        [accessData, isLoggedIn, isReady, user]
      )}
    >
      {!isReady || loading ? (
        <Box centerHorizontal centerVertical>
          <Text>Loading...</Text>
        </Box>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};

export default UserContextWrapper;
