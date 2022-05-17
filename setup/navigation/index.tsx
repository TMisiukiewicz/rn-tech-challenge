import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../screens/SignInScreen';
import { RootNavigationScreens } from './types';

const Stack = createNativeStackNavigator<RootNavigationScreens>();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Sign In' component={SignInScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
