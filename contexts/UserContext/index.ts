import { createContext, useContext } from 'react';
import { UserContextValues } from './types';

export const UserContext = createContext<UserContextValues | undefined>(
  undefined
);

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
};
