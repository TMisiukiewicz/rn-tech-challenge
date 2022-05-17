import { RootNavigationScreens } from '../setup/navigation/types';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootNavigationScreens;
  }
}
