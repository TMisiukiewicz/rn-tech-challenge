import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNavigationScreens } from '../setup/navigation/types';

const useStackNavigator = () =>
  useNavigation<NativeStackNavigationProp<RootNavigationScreens>>();

export default useStackNavigator;
