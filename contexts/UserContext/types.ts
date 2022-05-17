import { SetStateAction, Dispatch } from 'react';
import { User } from '../../types';

export interface AccessData {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface UserContextValues {
  isLoggedIn: boolean;
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  accessData: AccessData;
  isContextReady: boolean;
  logOut: () => Promise<void>;
}
